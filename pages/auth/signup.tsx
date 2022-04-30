/* eslint-disable no-restricted-syntax */
import { useRouter } from "next/router";
import { FormEvent, useContext, useEffect, useState } from "react";
import { FormContainer, InputWithErrors } from "../../components/forms";
import { SubmitButton } from "../../components/postDetails";
import { SectionContainer, SectionHeader } from "../../components/tabloids";
import AppContext from "../../lib/AppContext";
import { customAxios } from "../../lib/hooks/useAxiosInterceptor";
import { AppDataContext, UserSchema } from "../../lib/types";

export interface DynamicFieldsData {
  [index: string]: { value: string; placeholder: string; error: string };
}

function SignupPage() {
  const router = useRouter();
  const [, setAppData]: AppDataContext = useContext(AppContext);

  const [fieldData, setFieldData] = useState<DynamicFieldsData>({
    username: { value: "", placeholder: "Choose a username", error: "" },
    bio: { value: "", placeholder: "Introduce yourself", error: "" },
    avatarURL: { value: "", placeholder: "Enter an image url", error: "" },
    email: { value: "", placeholder: "Enter your email", error: "" },
    firstName: { value: "", placeholder: "Enter your first name", error: "" },
    lastName: { value: "", placeholder: "Type your last name", error: "" },
    password: { value: "", placeholder: "Choose a password", error: "" },
    passwordConfirm: {
      value: "",
      placeholder: "Confirm your password",
      error: "",
    },
  });

  const checkEqualPasswords = () => {
    let passwordError;
    if (fieldData.password !== fieldData.passwordConfirm)
      passwordError = "Passwords must match.";

    setFieldData((prevFieldData) => {
      const newFieldData = { ...prevFieldData };
      newFieldData.passwordConfirm.error = passwordError;
      return newFieldData;
    });
  };

  const validateRequiredFields = (fields: DynamicFieldsData): boolean => {
    let allGood = true;
    const badFields: DynamicFieldsData = { ...fields };
    Object.keys(fields).forEach((k) => {
      if (!fields[k].value) {
        badFields[k].error = `${k[0].toUpperCase() + k.slice(1)} is required.`;
        allGood = false;
      }
    });
    if (!allGood) {
      setFieldData((prevFields) => ({
        ...prevFields,
        ...badFields,
      }));
    }
    return allGood;
  };

  useEffect(checkEqualPasswords, [
    fieldData.password,
    fieldData.passwordConfirm,
  ]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateRequiredFields(fieldData)) {
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
      localStorage.setItem("loginToken", token);
      router.push("/");
    }
  };

  return (
    <SectionContainer>
      <SectionHeader>Create account</SectionHeader>
      <FormContainer onSubmit={handleSubmit}>
        {Object.keys(fieldData).map((field) => (
          <InputWithErrors
            name={field}
            changeHandler={setFieldData}
            error={fieldData[field].error}
            placeholder={fieldData[field].placeholder}
          />
        ))}
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </FormContainer>
    </SectionContainer>
  );
}

export default SignupPage;
