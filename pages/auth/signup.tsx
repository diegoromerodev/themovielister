/* eslint-disable no-restricted-syntax */
import { useRouter } from "next/router";
import { FormEvent, useContext, useEffect, useState } from "react";
import { FormContainer, InputWithErrors } from "../../components/forms";
import { SubmitButton } from "../../components/postDetails";
import { SectionContainer, SectionHeader } from "../../components/tabloids";
import AppContext from "../../lib/AppContext";
import { customAxios } from "../../lib/hooks/useAxiosInterceptor";
import { AppDataContext, UserSchema } from "../../lib/types";

export interface DynamicFieldsObj {
  [index: string]: string;
}

function SignupPage() {
  const router = useRouter();
  const [, setAppData]: AppDataContext = useContext(AppContext);
  const [fieldsWithErrors, setFieldsWithErrors] = useState<DynamicFieldsObj>(
    {}
  );

  const [fieldData, setFieldData] = useState<DynamicFieldsObj>({
    username: "",
    bio: "",
    avatarURL: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
  });

  const checkEqualPasswords = () => {
    let passwordError;
    if (fieldData.password !== fieldData.passwordConfirm)
      passwordError = "Passwords must match.";

    setFieldsWithErrors((prevErrors) => ({
      ...prevErrors,
      passwordConfirm: passwordError,
    }));
  };

  const validateRequiredFields = (fields: DynamicFieldsObj): boolean => {
    let allGood = true;
    const badFields: DynamicFieldsObj = {};
    Object.keys(fields).forEach((k) => {
      if (!fields[k]) {
        badFields[k] = `${k[0].toUpperCase() + k.slice(1)} is required.`;
        allGood = false;
      }
    });
    if (!allGood) {
      setFieldsWithErrors((prevFields) => ({
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
            error={fieldsWithErrors[field]}
          />
        ))}
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </FormContainer>
    </SectionContainer>
  );
}

export default SignupPage;
