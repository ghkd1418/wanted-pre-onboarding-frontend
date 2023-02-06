export interface IAuthFormProps {
  handleEmailInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFetchAuth: (e) => void;
  buttonTitle: string;
  isValid: {
    email: boolean;
    password: boolean;
  };
}

export interface ITodoAddForm {
  createTodo: (e) => void;
  handleAddTodoInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
