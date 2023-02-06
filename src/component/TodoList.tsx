import { TodoAddForm } from "./views/TodoAddForm";
import { TodoApi } from "../api/TodoApi";
import { ITodoAddForm } from "./types";
import { useState } from "react";
import { AxiosError } from "axios";

export const TodoList = () => {
  const [todo, setTodo] = useState("");
  const todoAddFormProps: ITodoAddForm = {
    createTodo: async (e) => {
      try {
        e.preventDefault();
        const data = await TodoApi.createTodo({ todo });
        console.log(data);
      } catch (error) {
        if (error instanceof AxiosError) {
          alert(error.response?.data.message);
        } else {
          alert("Unexpected error");
        }
      }
    },
    handleAddTodoInput: (e) => {
      setTodo(e.target.value);
    },
  };

  return <TodoAddForm {...todoAddFormProps} />;
};
