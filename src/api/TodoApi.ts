import { api } from "./index";

export const TodoApi = {
  getTodos() {
    return api.get("/todos");
  },
  getTodoById(id: string) {
    return api.get(`/todos/${id}`);
  },
  createTodo(data: string) {
    return api.post("/todos", data);
  },
  updateTodo(id: string, data: string) {
    return api.put(`/todos/${id}`, data);
  },
  deleteTdod(id: string) {
    return api.delete(`/todos/${id}`);
  },
};
