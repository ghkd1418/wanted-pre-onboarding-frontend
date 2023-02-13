export interface IAuthFormProps {
  handleEmailInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFetchAuth: (e: React.FormEvent) => void;
  buttonTitle: string;
  isValid: {
    email: boolean;
    password: boolean;
  };
}

export interface ITodoAddForm {
  createTodo: (e: React.FormEvent) => void;
  handleAddTodoInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ITodoItemFromProps {
  handleDeleteButton: (id: number) => void;
  handleModifySubmit: (id: number, todo: string, isComplete: boolean) => void;
  todo: ITodos;
}

export interface ITodos {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}
