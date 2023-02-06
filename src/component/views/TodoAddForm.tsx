import { ITodoAddForm } from "../types";

export const TodoAddForm = ({
  createTodo,
  handleAddTodoInput,
}: ITodoAddForm) => {
  return (
    <form onSubmit={createTodo}>
      <input data-testid="new-todo-input" onChange={handleAddTodoInput} />
      <button data-testid="new-todo-add-button">추가</button>
    </form>
  );
};
