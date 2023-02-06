export interface IauthFormProps {
  handleEmailInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFetchAuth: (e) => void;
  buttonTitle: string;
  isValid: {
    email: boolean;
    password: boolean;
  };
}
