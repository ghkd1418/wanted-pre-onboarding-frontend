export interface IauthFormProps {
  handleEmailInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: {
    email: boolean;
    password: boolean;
  };
}
