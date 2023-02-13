import { TodoItemForm } from "./views/TodoItemForm";
import { TodoApi } from "../api/TodoApi";
import { useEffect, useState } from "react";
import { TodoAddForm } from "./views/TodoAddForm";
import { AxiosError } from "axios";
import type { ITodoAddForm, ITodos } from "./types";
import { useNavigate } from "react-router-dom";

export const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  const fetchTodo = async () => {
    try {
      const data = await TodoApi.getTodos();
      setTodos(data.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.dir(error);
        if (error.response?.status === 401) {
          alert("로그인이 필요한 서비스입니다.");
          navigate("/signin");
          return;
        }
        alert(error.response?.data.message);
      } else {
        alert("Unexpected error❗️");
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
        (e.target as HTMLFormElement).reset();
        await TodoApi.createTodo({ todo });
        fetchTodo();
      } catch (error) {
        if (error instanceof AxiosError) {
          alert(error.response?.data.message);
        } else {
          alert("Unexpected error❗️");
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
        if (!window.confirm("삭제하시겠습니까?")) return;
        await TodoApi.deleteTodo(id);
        fetchTodo();
      } catch (error) {
        if (error instanceof AxiosError) {
          alert(error.response?.data.message);
        } else {
          alert("Unexpected error❗️");
        }
      }
    },
    handleModifySubmit: async (
      id: number,
      todo: string,
      isCompleted: boolean
    ) => {
      try {
        await TodoApi.updateTodo(id, { todo, isCompleted });
        fetchTodo();
      } catch (error) {
        if (error instanceof AxiosError) {
          alert(error.response?.data.message);
        } else {
          alert("Unexpected error❗️");
        }
      }
    },
  };

  return (
    <>
      <TodoAddForm {...todoAddFormProps} />
      <ul>
        {todos?.map((todo: ITodos) => (
          <TodoItemForm {...todoItemFormProps} todo={todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
};
