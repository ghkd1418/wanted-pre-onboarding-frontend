import { TodoAddForm } from "./views/TodoAddForm";
import { TodoApi } from "../api/TodoApi";
import { useState } from "react";
import { AxiosError } from "axios";
import type { ITodoAddForm } from "./types";

export const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const todoAddFormProps: ITodoAddForm = {
    createTodo: async (e) => {
      try {
        e.preventDefault();
        await TodoApi.createTodo({ todo });
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
