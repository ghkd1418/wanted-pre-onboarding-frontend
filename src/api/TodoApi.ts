import { Idata } from "../type/IAuth";
import { api } from "./index";

export const TodoApi = {
  getTodos() {
    return api.get("/todos");
  },
  createTodo(data: Idata) {
    return api.post("/todos", data);
  },
  updateTodo(id: string, data: Idata) {
    return api.put(`/todos/${id}`, data);
  },
  deleteTdod(id: string) {
    return api.delete(`/todos/${id}`);
  },
};
