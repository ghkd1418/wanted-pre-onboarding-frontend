import { useState } from "react";
import { AuthFormView } from "./views/AuthForm";
import { AuthApi } from "../api/AuthApi";
import type { IAuthFormProps } from "./types";
import { AxiosError } from "axios";

export const SignInForm = () => {
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authFormProps: IAuthFormProps = {
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
      try {
        e.preventDefault();
        const data = await AuthApi.SignIn({ email, password });
        localStorage.setItem("token", data.data.access_token);
        alert("로그인 되었습니다.");
        window.location.href = "/todo";
      } catch (error) {
        if (error instanceof AxiosError) {
          alert(error.response?.data.message);
        } else {
          alert("Unexpected error");
        }
      }
    },
    buttonTitle: "로그인",
    isValid,
  };

  return <AuthFormView {...authFormProps} />;
};
