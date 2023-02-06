import { useState } from "react";
import { AuthFormView } from "./views/AuthForm";
import type { IauthFormProps } from "./types";
import { AuthApi } from "../api/AuthApi";

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
    handleFetchAuth: async (e) => {
      try {
        e.preventDefault();
        const data = await AuthApi.SignUp({ email, password });
        console.log(data);
        if (data.status === 201) {
          alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
          window.location.href = "/auth/signin";
        }
      } catch (error: any) {
        alert(error.response.data.message);
      }
    },
    buttonTitle: "회원가입",
    isValid,
  };

  return <AuthFormView {...authFormProps} />;
};
