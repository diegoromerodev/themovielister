/* eslint-disable no-restricted-syntax */
import { ChangeEvent, useEffect, useState } from "react";
import {
  ErrorMessage,
  FormContainer,
  StyledTextInput,
} from "../../components/forms";
import { SubmitButton } from "../../components/postDetails";
import { SectionContainer, SectionHeader } from "../../components/tabloids";
import { PrimaryThinHeader } from "../../components/typography";

interface FieldErrors {
  [index: string]: string;
}

function SignupPage() {
  const [fieldsWithErrors, setFieldsWithErrors] = useState<FieldErrors>({
    username: null,
    password: null,
    passwordConfirm: null,
  });
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const checkEqualPasswords = () => {
    let passwordError;
    if (password !== passwordConfirm) passwordError = "Passwords must match.";

    setFieldsWithErrors((prevErrors) => ({
      ...prevErrors,
      passwordConfirm: passwordError,
    }));
  };

  useEffect(checkEqualPasswords, [password, passwordConfirm]);

  console.log(fieldsWithErrors.passwordConfirm);

  const handleSubmit = () => {
    for (const errorVal of Object.values(fieldsWithErrors)) {
      if (errorVal) return;
    }
    // implement user registration
    console.log("user will be signed up someday");
  };

  return (
    <SectionContainer>
      <SectionHeader>Login</SectionHeader>
      <FormContainer onSubmit={handleSubmit}>
        <PrimaryThinHeader>Welcome Back!</PrimaryThinHeader>
        <StyledTextInput
          name="username"
          type="text"
          placeholder="Create a username"
        />
        <StyledTextInput
          name="password"
          type="password"
          placeholder="Create a password"
          onChange={({ target: { value } }) => setPassword(value)}
        />
        <StyledTextInput
          name="passwordConfirm"
          type="password"
          placeholder="Confirm your password"
          onChange={({ target: { value } }) => setPasswordConfirm(value)}
          className={fieldsWithErrors.passwordConfirm ? "invalid" : ""}
        />
        <ErrorMessage>{fieldsWithErrors.passwordConfirm}</ErrorMessage>
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </FormContainer>
    </SectionContainer>
  );
}

export default SignupPage;
