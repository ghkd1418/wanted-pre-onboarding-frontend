import { useState } from "react";
import { AuthFormView } from "./views/AuthForm";
import type { IauthFormProps } from "./types";
import { AuthApi } from "../api/AuthApi";
// import { useNavigate } from "react-router-dom";

export const SignUpForm = () => {
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

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
    handleFetchAuth: (e) => {
      e.preventDefault();
      AuthApi.SignUp({ email, password });
    },
    buttonTitle: "회원가입",
    isValid,
  };

  return <AuthFormView {...authFormProps} />;
};
