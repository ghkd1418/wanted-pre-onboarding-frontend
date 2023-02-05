import { useState } from "react";
import { IauthFormProps } from "./types.d";
import { AuthForm } from "./views/AuthForm";

export const Auth = () => {
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
  });

  const authFormProps: IauthFormProps = {
    handleEmailInput: (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.includes("@"))
        setIsValid((prev) => ({ ...prev, email: true }));
      else setIsValid((prev) => ({ ...prev, email: false }));
    },

    handlePasswordInput: (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length >= 8)
        setIsValid((prev) => ({ ...prev, password: true }));
      else setIsValid((prev) => ({ ...prev, password: false }));
    },
    isValid,
  };

  return <AuthForm {...authFormProps} />;
};
