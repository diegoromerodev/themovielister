import axios from "axios";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import { FormContainer, StyledTextInput } from "../../components/forms";
import { SubmitButton } from "../../components/postDetails";
import { SectionContainer, SectionHeader } from "../../components/tabloids";
import { PrimaryThinHeader } from "../../components/typography";

function LoginPage() {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = e.currentTarget;
    const token = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth`,
      {
        username: username.value,
        password: password.value,
      }
    );
    if (token) {
      localStorage.setItem("loginToken", token.data);
    }
    router.push("/");
  };

  return (
    <SectionContainer>
      <SectionHeader>Login</SectionHeader>
      <FormContainer onSubmit={handleSubmit}>
        <PrimaryThinHeader>Welcome Back!</PrimaryThinHeader>
        <StyledTextInput
          name="username"
          type="text"
          placeholder="Enter your username"
        />
        <StyledTextInput
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <SubmitButton type="submit">Access</SubmitButton>
      </FormContainer>
    </SectionContainer>
  );
}

export default LoginPage;
