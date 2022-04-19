import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { RawDraftContentState } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import axios from "axios";
import { useRouter } from "next/router";
import { StyledTextInput } from "../../components/forms";
import { SectionContainer, SectionHeader } from "../../components/tabloids";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { SubmitButton } from "../../components/postDetails";
import { AppDataContext, PostSchema } from "../../lib/types";
import AppContext from "../../lib/AppContext";
import {
  CreatePostForm,
  RichEditorWrapper,
  StyledSelect,
} from "../../components/createPost";

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
  const [appData]: AppDataContext = useContext(AppContext);
  const router = useRouter();

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
    const reqBody = {
      title: e.currentTarget["post-title"].value,
      movie: e.currentTarget.movie.value,
      category: selectedCategory,
      body: bodyText,
    };
    const postingRes = await axios.post(`/api/posts`, reqBody);
    const savedPost: PostSchema = postingRes.data;
    if (savedPost) {
      return router.push(`/posts/${savedPost.id}`);
    }
    return false;
  };

  return (
    <SectionContainer>
      <SectionHeader>Create a post</SectionHeader>
      <CreatePostForm onSubmit={submitPost}>
        <StyledTextInput name="post-title" placeholder="Enter a post title" />
        <StyledTextInput name="movie" placeholder="Enter an IMDB Movie ID" />
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
