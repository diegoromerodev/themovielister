import { SetStateAction } from "react";
import styled from "styled-components";
import { DynamicFieldsData } from "../pages/auth/signup";
import ColorPalette from "../styles/ColorPalette";

export const StyledTextInput = styled.input`
  background: transparent;
  border: 1px solid ${ColorPalette.gray};
  padding: 0.5rem;
  font-family: Inter;
  color: ${ColorPalette.light};
  outline: none;
  font-size: 1.2rem;
  &.invalid {
    border-color: ${ColorPalette.error};
    background-color: ${ColorPalette.error}57;
  }
  ::placeholder {
    color: ${ColorPalette.lightGray};
  }
`;

export const ErrorMessage = styled.small`
  font-weight: 700;
  color: ${ColorPalette.error};
  text-align: left;
  padding-left: 2rem;
`;

export const PostBodyArea = styled.textarea`
  background: transparent;
`;

export const FormContainer = styled.form`
  padding: 1rem;
  display: grid;
  gap: 1rem;
  text-align: center;
`;

interface InputWithErrorsProps {
  name: string;
  error?: string;
  placeholder: string;
  type: string;
  serial: string;
  changeHandler: (value: SetStateAction<DynamicFieldsData>) => void;
}

export function InputWithErrors({
  name,
  error,
  placeholder,
  type,
  serial,
  changeHandler,
}: InputWithErrorsProps): JSX.Element {
  return (
    <>
      <StyledTextInput
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={({ target: { value } }) =>
          changeHandler((prevState) => {
            const newState = { ...prevState };
            newState[serial].value = value;
            if (value && newState[serial].error) {
              newState[serial].error = "";
            }
            return newState;
          })
        }
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
}

InputWithErrors.defaultProps = {
  error: "",
};
