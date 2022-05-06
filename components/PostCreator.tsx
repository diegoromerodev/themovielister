import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { RawDraftContentState } from "draft-js";
import dynamic from "next/dynamic";
import {
  FormEvent,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { InputWithErrors } from "./forms";
import { SubmitButton } from "./postDetails";
import { CreatePostForm, RichEditorWrapper, StyledSelect } from "./createPost";
import {
  CreatePostConstraints,
  handleInputChangeWithErrors,
} from "../lib/utils";
import { AppDataContext, CategorySchema } from "../lib/types";
import { DynamicFieldsData } from "../pages/auth/signup";
import AppContext from "../lib/AppContext";

export const Editor = dynamic(
  async () => {
    const importRD = await import("react-draft-wysiwyg");
    return importRD.Editor;
  },
  { ssr: false }
);

export interface PostCreatorProps {
  submitPost: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  fieldData: DynamicFieldsData;
  setFieldData: Dispatch<SetStateAction<DynamicFieldsData>>;
  handleBodyChange: (contentState: RawDraftContentState) => void;
  selectedCategory: string;
  handleCategorySelection: (e: ChangeEvent<HTMLSelectElement>) => void;
  allCategories: CategorySchema[];
  initialEditorState: RawDraftContentState;
}

export function PostCreator({
  submitPost,
  fieldData,
  setFieldData,
  handleBodyChange,
  selectedCategory,
  handleCategorySelection,
  allCategories,
  initialEditorState,
}: PostCreatorProps) {
  const [appData]: AppDataContext = useContext(AppContext);
  return (
    <CreatePostForm onSubmit={submitPost}>
      {Object.keys(fieldData).map((field) => (
        <InputWithErrors
          key={fieldData[field].name}
          serial={field}
          value={fieldData[field].value}
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
          initialContentState={initialEditorState}
          placeholder="What's on your mind?"
          toolbarClassName="editor-toolbar"
          editorClassName="editor-body"
          onChange={handleBodyChange}
        />
      </RichEditorWrapper>
      <StyledSelect value={selectedCategory} onChange={handleCategorySelection}>
        {allCategories.map((c) => (
          <option key={`categories-${c.id}`} value={c.id}>
            {c.name}
          </option>
        ))}
      </StyledSelect>
      <SubmitButton>
        <FontAwesomeIcon icon={faPencilRuler} />
        &nbsp;&nbsp;Submit post
      </SubmitButton>
    </CreatePostForm>
  );
}
