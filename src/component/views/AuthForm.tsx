import { useState } from "react";

export const AuthForm = () => {
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
  });
  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.includes("@"))
      setIsValid((prev) => {
        return { ...prev, email: true };
      });
    else
      setIsValid((prev) => {
        return { ...prev, email: false };
      });
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 8)
      setIsValid((prev) => {
        return { ...prev, password: true };
      });
    else
      setIsValid((prev) => {
        return { ...prev, password: false };
      });
  };

  return (
    <form>
      <input data-testid="email-input" onChange={handleEmailInput} />
      <input data-testid="password-input" onChange={handlePasswordInput} />
      <button
        data-testid="signup-button"
        disabled={!(isValid.email && isValid.password)}
      >
        로그인
      </button>
    </form>
  );
};
