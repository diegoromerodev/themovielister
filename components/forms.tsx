import { SetStateAction } from "react";
import styled from "styled-components";
import { DynamicFieldsObj } from "../pages/auth/signup";
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
  changeHandler: (value: SetStateAction<DynamicFieldsObj>) => void;
}

export function InputWithErrors({
  name,
  error,
  changeHandler,
}: InputWithErrorsProps): JSX.Element {
  const inputTypes = {
    email: "email",
    password: "password",
    passwordConfirm: "password",
  };

  return (
    <>
      <StyledTextInput
        name={name}
        type={inputTypes[name] || "text"}
        placeholder={`Enter your ${name}`}
        onChange={({ target: { value } }) =>
          changeHandler((prevState) => ({
            ...prevState,
            name: value,
          }))
        }
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
}

InputWithErrors.defaultProps = {
  error: "",
};
