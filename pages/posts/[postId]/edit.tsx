import {
  ContentState,
  convertFromHTML,
  convertToRaw,
  RawDraftContentState,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { PostCreator } from "../../../components/PostCreator";
import { SectionContainer, SectionHeader } from "../../../components/tabloids";
import AppContext from "../../../lib/AppContext";
import { customAxios } from "../../../lib/hooks/useAxiosInterceptor";
import { serverAxios } from "../../../lib/serverside/serverAxiosInterceptors";
import { AppDataContext, CategorySchema, PostSchema } from "../../../lib/types";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { validateRequiredFields } from "../../../lib/utils";
import { DynamicFieldsData } from "../../auth/signup";

function EditPostView({
  post,
  categories,
}: {
  post: PostSchema;
  categories: CategorySchema[];
}) {
  const router = useRouter();
  const [appData]: AppDataContext = useContext(AppContext);
  const [bodyText, setBodyText] = useState<string>(post.body);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    String(post.CategoryId)
  );

  const [initialEditorState, setInitialEditorState] =
    useState<RawDraftContentState>({
      entityMap: {},
      blocks: [],
    });

  useEffect(() => {
    const content = ContentState.createFromBlockArray(
      convertFromHTML(bodyText).contentBlocks
    );
    setInitialEditorState(convertToRaw(content));
  }, []);

  const [fieldData, setFieldData] = useState<DynamicFieldsData>({
    postTitle: {
      value: post.title,
      placeholder: "Enter a post title",
      error: "",
      name: "Post title",
      type: "text",
    },
    movie: {
      value: post.MovieId,
      placeholder: "Enter an IMDB Movie ID",
      error: "",
      name: "IMDB ID",
      type: "text",
    },
  });

  useEffect(() => {
    const userSavedSession = localStorage.getItem(
      process.env.NEXT_PUBLIC_TOKEN_STORAGE
    );
    if (
      !userSavedSession ||
      (appData.userData && post.UserId !== appData.userData.id)
    ) {
      router.push("/");
    }
  }, [appData]);

  const handleBodyChange = (contentState: RawDraftContentState) => {
    const markup = draftToHtml(contentState);
    setBodyText(markup);
  };

  const handleCategorySelection = (e: ChangeEvent<HTMLSelectElement>) => {
    const categoryId = e.currentTarget.value;
    setSelectedCategory(categoryId);
  };

  const submitPost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateRequiredFields<DynamicFieldsData>(fieldData, setFieldData)) {
      return;
    }
    const reqBody = {
      title: e.currentTarget.postTitle.value,
      movie: e.currentTarget.movie.value,
      category: selectedCategory,
      body: bodyText,
    };
    const postingRes = await customAxios.put(`/api/posts/${post.id}`, reqBody);
    const savedPost: PostSchema = postingRes?.data;
    if (savedPost) {
      router.push(`/posts/${savedPost.id}`);
    }
  };

  if (!post || !appData.userData || post.UserId !== appData.userData.id)
    return null;

  return (
    <SectionContainer>
      <SectionHeader>Edit your post</SectionHeader>
      <PostCreator
        initialEditorState={initialEditorState}
        submitPost={submitPost}
        fieldData={fieldData}
        setFieldData={setFieldData}
        handleBodyChange={handleBodyChange}
        selectedCategory={selectedCategory}
        handleCategorySelection={handleCategorySelection}
        allCategories={categories}
        showCategory={["admin", "mod"].includes(appData.userData.role)}
      />
    </SectionContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const { postId } = ctx.query;
  const categoriesRes = await serverAxios(`/api/categories`);
  const categories: CategorySchema[] = categoriesRes?.data;
  let post;
  try {
    const postRes = await serverAxios(`/api/posts/${postId}`);
    post = postRes?.data;
  } catch {
    post = null;
  }
  return {
    props: {
      post,
      categories,
    },
  };
};

export default EditPostView;
