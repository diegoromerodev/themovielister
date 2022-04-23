/* eslint-disable no-restricted-syntax */
import { useRouter } from "next/router";
import { FormEvent, useContext, useEffect, useState } from "react";
import {
  ErrorMessage,
  FormContainer,
  StyledTextInput,
} from "../../components/forms";
import { SubmitButton } from "../../components/postDetails";
import { SectionContainer, SectionHeader } from "../../components/tabloids";
import AppContext from "../../lib/AppContext";
import { customAxios } from "../../lib/hooks/useAxiosInterceptor";
import { AppDataContext, UserSchema } from "../../lib/types";

interface FieldErrors {
  [index: string]: string;
}

function SignupPage() {
  const router = useRouter();
  const [, setAppData]: AppDataContext = useContext(AppContext);
  const [fieldsWithErrors, setFieldsWithErrors] = useState<FieldErrors>({
    username: null,
    password: null,
    passwordConfirm: null,
  });
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [avatarURL, setAvatarURL] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    for (const errorVal of Object.values(fieldsWithErrors)) {
      if (errorVal) return;
    }
    const createdUserRes = await customAxios.post("/api/users", {
      username,
      bio,
      avatarURL,
      email,
      firstName,
      lastName,
      password,
    });
    if (createdUserRes?.data) {
      const loginRes = await customAxios.post("/api/auth", {
        username,
        password,
      });
      const token: string = loginRes.data.toString();
      const userData: UserSchema = createdUserRes.data;
      setAppData((prevState) => ({ ...prevState, userData, token }));
      localStorage.setItem("loginToken", token);
      router.push("/");
    }
  };

  return (
    <SectionContainer>
      <SectionHeader>Create account</SectionHeader>
      <FormContainer onSubmit={handleSubmit}>
        <StyledTextInput
          name="username"
          type="text"
          placeholder="Create a username"
          onChange={({ target: { value } }) => setUsername(value)}
        />
        <StyledTextInput
          name="avatar"
          type="text"
          placeholder="Enter an avatar image url"
          onChange={({ target: { value } }) => setAvatarURL(value)}
        />
        <StyledTextInput
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <StyledTextInput
          name="first-name"
          type="text"
          placeholder="Enter your first name"
          onChange={({ target: { value } }) => setFirstName(value)}
        />
        <StyledTextInput
          name="last-name"
          type="text"
          placeholder="Enter your last name"
          onChange={({ target: { value } }) => setLastName(value)}
        />
        <StyledTextInput
          name="bio"
          type="text"
          placeholder="Describe yourself in a few words"
          onChange={({ target: { value } }) => setBio(value)}
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
