import { IauthFormProps } from "../types";

export const AuthForm = ({
  handleEmailInput,
  handlePasswordInput,
  isValid,
}: IauthFormProps) => {
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
