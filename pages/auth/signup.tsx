/* eslint-disable no-restricted-syntax */
import { useRouter } from "next/router";
import { FormEvent, useContext, useEffect, useState } from "react";
import { FormContainer, InputWithErrors } from "../../components/forms";
import { SubmitButton } from "../../components/postDetails";
import { SectionContainer, SectionHeader } from "../../components/tabloids";
import AppContext from "../../lib/AppContext";
import { customAxios } from "../../lib/hooks/useAxiosInterceptor";
import { AppDataContext, UserSchema } from "../../lib/types";
import {
  handleInputChangeWithErrors,
  UserFormFieldConstraints,
  validateRequiredFields,
} from "../../lib/utils";

export interface DynamicFieldsData {
  [index: string]: {
    value: string;
    placeholder: string;
    error: string;
    name: string;
    type: string;
  };
}

function SignupPage() {
  const router = useRouter();
  const [, setAppData]: AppDataContext = useContext(AppContext);

  const [fieldData, setFieldData] = useState<DynamicFieldsData>({
    username: {
      value: "",
      placeholder: "Choose a username",
      error: "",
      name: "Username",
      type: "text",
    },
    bio: {
      value: "",
      placeholder: "Introduce yourself",
      error: "",
      name: "Bio",
      type: "text",
    },
    avatarURL: {
      value: "",
      placeholder: "Enter an image url",
      error: "",
      name: "Avatar URL",
      type: "text",
    },
    email: {
      value: "",
      placeholder: "Enter your email",
      error: "",
      name: "E-mail",
      type: "email",
    },
    firstName: {
      value: "",
      placeholder: "Enter your first name",
      error: "",
      name: "First name",
      type: "text",
    },
    lastName: {
      value: "",
      placeholder: "Type your last name",
      error: "",
      name: "Last name",
      type: "text",
    },
    password: {
      value: "",
      placeholder: "Choose a password",
      error: "",
      name: "Password",
      type: "password",
    },
    passwordConfirm: {
      value: "",
      placeholder: "Confirm your password",
      error: "",
      name: "Password confirmation",
      type: "password",
    },
  });

  const checkEqualPasswords = () => {
    let passwordError;
    if (fieldData.password.value !== fieldData.passwordConfirm.value)
      passwordError = "Passwords must match.";

    setFieldData((prevFieldData) => {
      const newFieldData = { ...prevFieldData };
      newFieldData.passwordConfirm.error = passwordError;
      return newFieldData;
    });
  };

  useEffect(checkEqualPasswords, [
    fieldData.password,
    fieldData.passwordConfirm,
  ]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateRequiredFields<DynamicFieldsData>(fieldData, setFieldData)) {
      return;
    }
    const createdUserRes = await customAxios.post("/api/users", fieldData);
    if (createdUserRes?.data) {
      const loginRes = await customAxios.post("/api/auth", {
        username: fieldData.username,
        password: fieldData.password,
      });
      const token: string = loginRes.data.toString();
      const userData: UserSchema = createdUserRes.data;
      setAppData((prevState) => ({ ...prevState, userData, token }));
      localStorage.setItem(process.env.NEXT_PUBLIC_TOKEN_STORAGE, token);
      router.push("/");
    }
  };

  return (
    <SectionContainer>
      <SectionHeader>Create account</SectionHeader>
      <FormContainer onSubmit={handleSubmit}>
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
            constraints={UserFormFieldConstraints}
          />
        ))}
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </FormContainer>
    </SectionContainer>
  );
}

export default SignupPage;
