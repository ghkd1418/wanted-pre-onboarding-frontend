import { useState } from "react";
import { AuthFormView } from "./views/AuthForm";
import { AuthApi } from "../api/AuthApi";
import type { IauthFormProps } from "./types";

export const SignInForm = () => {
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authFormProps: IauthFormProps = {
    handleEmailInput: (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      if (e.target.value.includes("@"))
        setIsValid((prev) => ({ ...prev, email: true }));
      else setIsValid((prev) => ({ ...prev, email: false }));
    },

    handlePasswordInput: (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      if (e.target.value.length >= 8)
        setIsValid((prev) => ({ ...prev, password: true }));
      else setIsValid((prev) => ({ ...prev, password: false }));
    },
    handleFetchAuth: async (e) => {
      e.preventDefault();
      const token = await AuthApi.SignIn({ email, password });
      console.log(token);
      localStorage.setItem("token", token.data.access_token);
      window.location.href = "/auth/signin";
    },
    buttonTitle: "로그인",
    isValid,
  };

  return <AuthFormView {...authFormProps} />;
};
