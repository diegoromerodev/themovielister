import { FormEvent, useState } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { StyledTextInput } from "../../components/forms";
import { SectionContainer, SectionHeader } from "../../components/tabloids";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const CreatePostForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

const RichEditor = styled(Editor)`
  .rdw-editor-toolbar {
    background: #333;
    border: 3px solid red;
  }
`;

const submitPost = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  return true;
};

function CreatePost() {
  const [bodyText, setBodyText] = useState("");
  return (
    <SectionContainer>
      <SectionHeader>Create a post</SectionHeader>
      <CreatePostForm onSubmit={submitPost}>
        <StyledTextInput placeholder="Enter a post title" />
        <RichEditor />
      </CreatePostForm>
    </SectionContainer>
  );
}

export default CreatePost;
