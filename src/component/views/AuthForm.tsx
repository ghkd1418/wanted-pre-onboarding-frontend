import type { IauthFormProps } from "../types";

export const AuthFormView = ({
  handleEmailInput,
  handlePasswordInput,
  handleFetchAuth,
  buttonTitle,
  isValid,
}: IauthFormProps) => {
  return (
    <form onSubmit={handleFetchAuth}>
      <input data-testid="email-input" onChange={handleEmailInput} />
      <input data-testid="password-input" onChange={handlePasswordInput} />
      <button
        data-testid="signup-button"
        disabled={!(isValid.email && isValid.password)}
      >
        {buttonTitle}
      </button>
    </form>
  );
};
