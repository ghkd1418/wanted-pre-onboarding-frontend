import { TodoItemForm } from "./views/TodoItemForm";
import { TodoApi } from "../api/TodoApi";
import { useEffect, useState } from "react";

export interface ITodoItemFromProps {
  todos: ITodos[];
  handleModifyButton: () => void;
  handleDeleteButton: () => void;
}

export interface ITodos {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      todo: "",
      isCompleted: false,
      userId: 0,
    },
  ]);
  useEffect(() => {
    TodoApi.getTodos()
      .then((data) => {
        setTodos(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const todoItemFormProps = {
    todos,
    handleModifyButton: () => {},
    handleDeleteButton: () => {},
  };

  return <TodoItemForm {...todoItemFormProps} />;
};
