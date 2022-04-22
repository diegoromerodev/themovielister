import { useState } from "react";
import { FormContainer, StyledTextInput } from "../../components/forms";
import { SubmitButton } from "../../components/postDetails";
import { SectionContainer, SectionHeader } from "../../components/tabloids";
import { PrimaryThinHeader } from "../../components/typography";

function SignupPage() {
  const [fieldsWithErrors, setFieldsWithErrors] = useState({});

  const handleSubmit = () => {
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
        />
        <StyledTextInput
          name="password-confirm"
          type="password"
          placeholder="Confirm your password"
        />
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </FormContainer>
    </SectionContainer>
  );
}

export default SignupPage;
