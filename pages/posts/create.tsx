import { FormEvent, useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { RawDraftContentState } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import axios from "axios";
import { StyledTextInput } from "../../components/forms";
import { SectionContainer, SectionHeader } from "../../components/tabloids";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import ColorPalette from "../../styles/ColorPalette";
import { SubmitButton } from "../../components/postDetails";

const Editor = dynamic(
  async () => {
    const importRD = await import("react-draft-wysiwyg");
    return importRD.Editor;
  },
  { ssr: false }
);

const CreatePostForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

const RichEditorWrapper = styled.div`
  .editor-toolbar {
    background-color: ${ColorPalette.darker};
    border: 1px solid ${ColorPalette.gray};
    align-items: center;
    justify-content: center;
    border-radius: 0;
    margin-bottom: 0;
  }
  .editor-body {
    padding: 0.5rem 1rem;
    border: 1px solid ${ColorPalette.gray};
    border-top: none;
    min-height: 50vh;
  }
  .rdw-option-wrapper {
    background-color: ${ColorPalette.lightGray};
    border-radius: 0;
    border: 1px solid ${ColorPalette.gray};
    a {
      color: ${ColorPalette.darker};
      border: 1px solid red;
    }
    &:hover {
      background-color: ${ColorPalette.light};
      border: 1px solid transparent;
    }
  }
  .rdw-dropdown-wrapper {
    color: ${ColorPalette.darker};
  }
`;

function CreatePost() {
  const [bodyText, setBodyText] = useState("");

  const handleBodyChange = (contentState: RawDraftContentState) => {
    const markup = draftToHtml(contentState);
    setBodyText(markup);
  };

  const submitPost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const reqBody = {
      title: e.currentTarget["post-title"].value,
      movie: e.currentTarget.movie.value,
      body: bodyText,
    };
    await axios.post(`${process.env.API_URL}/posts`, reqBody);
    return true;
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
        <SubmitButton>Submit post</SubmitButton>
      </CreatePostForm>
    </SectionContainer>
  );
}

export default CreatePost;
