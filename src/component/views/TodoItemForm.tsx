import { ITodoItemFromProps, ITodos } from "../TodoList";

export const TodoItemForm = ({
  todos,
  handleModifyButton,
  handleDeleteButton,
}: ITodoItemFromProps) => {
  return (
    <nav>
      {todos?.map((todo: ITodos) => {
        return (
          <li key={todo.id}>
            <label>
              <input type="checkbox" />
              <span>{todo.todo}</span>
            </label>
            <button data-testid="modify-button" onClick={handleModifyButton}>
              수정
            </button>
            <button data-testid="delete-button" onClick={handleDeleteButton}>
              삭제
            </button>
          </li>
        );
      })}
    </nav>
  );
};
