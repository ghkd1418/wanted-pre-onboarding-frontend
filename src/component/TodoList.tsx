import { TodoItemForm } from "./views/TodoItemForm";
import { TodoApi } from "../api/TodoApi";
import { useEffect, useState } from "react";
import { TodoAddForm } from "./views/TodoAddForm";
import { AxiosError } from "axios";
import type { ITodoAddForm } from "./types";
import { Idata } from "../type/IAuth";

export interface ITodoItemFromProps {
  handleDeleteButton: (id: number) => void;
  // handleModifySubmit: (id: number, todo: string) => void;
  todo: ITodos;
}

export interface ITodos {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const fetchTodo = async () => {
    try {
      const data = await TodoApi.getTodos();
      setTodos(data.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.message);
      } else {
        alert("Unexpected error");
      }
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const todoAddFormProps: ITodoAddForm = {
    createTodo: async (e) => {
      try {
        e.preventDefault();
        await TodoApi.createTodo({ todo });
        fetchTodo();
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

  const todoItemFormProps = {
    handleDeleteButton: async (id: number) => {
      try {
        await TodoApi.deleteTodo(id);
        fetchTodo();
      } catch (error) {
        if (error instanceof AxiosError) {
          alert(error.response?.data.message);
        } else {
          alert("Unexpected error");
        }
      }
    },
    handleModifySubmit: async (id: number, data: Idata) => {
      try {
        console.log(id, data);
        await TodoApi.updateTodo(id, data);
        fetchTodo();
      } catch (error) {
        if (error instanceof AxiosError) {
          alert(error.response?.data.message);
        } else {
          alert("Unexpected error");
        }
      }
    },
  };

  return (
    <>
      <TodoAddForm {...todoAddFormProps} />
      <ul>
        {todos?.map((todo: ITodos) => (
          <TodoItemForm {...todoItemFormProps} todo={todo} />
        ))}
      </ul>
    </>
  );
};
