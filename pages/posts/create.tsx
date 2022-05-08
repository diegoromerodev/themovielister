import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import draftToHtml from "draftjs-to-html";
import { useRouter } from "next/router";
import {
  ContentState,
  convertFromHTML,
  convertToRaw,
  RawDraftContentState,
} from "draft-js";
import { SectionContainer, SectionHeader } from "../../components/tabloids";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { PostSchema } from "../../lib/types";
import { customAxios } from "../../lib/hooks/useAxiosInterceptor";
import { DynamicFieldsData } from "../auth/signup";
import { validateRequiredFields } from "../../lib/utils";
import { PostCreator } from "../../components/PostCreator";

function CreatePost() {
  const [bodyText, setBodyText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("1");
  const [allCategories, setAllCategories] = useState([]);
  const router = useRouter();

  const [initialEditorState, setInitialEditorState] =
    useState<RawDraftContentState>({
      entityMap: {},
      blocks: [],
    });

  useEffect(() => {
    const content = ContentState.createFromBlockArray(
      convertFromHTML("").contentBlocks
    );
    setInitialEditorState(convertToRaw(content));
  }, []);

  const [fieldData, setFieldData] = useState<DynamicFieldsData>({
    postTitle: {
      value: "",
      placeholder: "Enter a post title",
      error: "",
      name: "Post title",
      type: "text",
    },
    movie: {
      value: "",
      placeholder: "Enter an IMDB Movie ID",
      error: "",
      name: "IMDB ID",
      type: "text",
    },
  });

  useEffect(() => {
    const fetchCategories = async () => {
      const allCatsRes = await customAxios.get("/api/categories");
      const allCatsData = allCatsRes.data;
      if (allCatsData) {
        setAllCategories(allCatsData);
      }
    };

    fetchCategories().catch(() => setAllCategories([]));
  }, []);

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
    const postingRes = await customAxios.post(`/api/posts`, reqBody);
    const savedPost: PostSchema = postingRes?.data;
    if (savedPost) {
      router.push(`/posts/${savedPost.id}`);
    }
  };

  return (
    <SectionContainer>
      <SectionHeader>Create a post</SectionHeader>
      <PostCreator
        initialEditorState={initialEditorState}
        submitPost={submitPost}
        fieldData={fieldData}
        setFieldData={setFieldData}
        handleBodyChange={handleBodyChange}
        selectedCategory={selectedCategory}
        handleCategorySelection={handleCategorySelection}
        allCategories={allCategories}
        showCategory
      />
    </SectionContainer>
  );
}

export default CreatePost;
