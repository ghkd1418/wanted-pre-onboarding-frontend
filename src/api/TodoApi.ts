import { Idata } from "./types";
import { api } from "./index";

export const TodoApi = {
  getTodos() {
    return api.get("/todos");
  },
  createTodo(data: Idata) {
    return api.post("/todos", data);
  },
  updateTodo(id: number, data: Idata) {
    return api.put(`/todos/${id}`, data);
  },
  deleteTodo(id: number) {
    return api.delete(`/todos/${id}`);
  },
};
