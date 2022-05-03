import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { RawDraftContentState } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import axios from "axios";
import { useRouter } from "next/router";
import { InputWithErrors } from "../../components/forms";
import { SectionContainer, SectionHeader } from "../../components/tabloids";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { SubmitButton } from "../../components/postDetails";
import { PostSchema } from "../../lib/types";
import {
  CreatePostForm,
  RichEditorWrapper,
  StyledSelect,
} from "../../components/createPost";
import { customAxios } from "../../lib/hooks/useAxiosInterceptor";
import { DynamicFieldsData } from "../auth/signup";
import {
  CreatePostConstraints,
  handleInputChangeWithErrors,
  validateRequiredFields,
} from "../../lib/utils";

const Editor = dynamic(
  async () => {
    const importRD = await import("react-draft-wysiwyg");
    return importRD.Editor;
  },
  { ssr: false }
);

function CreatePost() {
  const [bodyText, setBodyText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("1");
  const [allCategories, setAllCategories] = useState([]);
  const router = useRouter();

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
      const allCatsRes = await axios.get("/api/categories");
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
      <CreatePostForm onSubmit={submitPost}>
        {Object.keys(fieldData).map((field) => (
          <InputWithErrors
            key={fieldData[field].name}
            serial={field}
            name={fieldData[field].name}
            type={fieldData[field].type}
            changeHandler={handleInputChangeWithErrors}
            error={fieldData[field].error}
            placeholder={fieldData[field].placeholder}
            setState={setFieldData}
            constraints={CreatePostConstraints}
          />
        ))}
        <RichEditorWrapper>
          <Editor
            placeholder="What's on your mind?"
            toolbarClassName="editor-toolbar"
            editorClassName="editor-body"
            onChange={handleBodyChange}
          />
        </RichEditorWrapper>
        <StyledSelect
          value={selectedCategory}
          onChange={handleCategorySelection}
        >
          {allCategories.map((c) => (
            <option key={`categories-${c.id}`} value={c.id}>
              {c.name}
            </option>
          ))}
        </StyledSelect>
        <SubmitButton>Submit post</SubmitButton>
      </CreatePostForm>
    </SectionContainer>
  );
}

export default CreatePost;
