import { useState } from "react";
import type { ITodoItemFromProps } from "../types";

export const TodoItemForm = ({
  handleDeleteButton,
  handleModifySubmit,
  todo,
}: ITodoItemFromProps) => {
  const [isModifyMode, setIsModifyMode] = useState(false);
  const [modifyTodo, setModifyTodo] = useState(todo.todo);

  const handleModifyButton = () => {
    setIsModifyMode((prev) => !prev);
  };
  const handleModifyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModifyTodo(e.target.value);
  };
  const handleCheckd = (e: React.ChangeEvent<HTMLInputElement>) => {
    todo.isCompleted = e.target.checked;
    handleModifySubmit(todo.id, todo.todo, todo.isCompleted);
  };

  return (
    <li>
      {isModifyMode ? (
        <>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={handleCheckd}
          />
          <input
            data-testid="modify-input"
            defaultValue={modifyTodo}
            onChange={handleModifyChange}
          />
          <button
            data-testid="submit-button"
            onClick={() => {
              handleModifySubmit(todo.id, modifyTodo, todo.isCompleted);
              setIsModifyMode((prev) => !prev);
            }}
          >
            제출
          </button>
          <button data-testid="cancel-button" onClick={handleModifyButton}>
            취소
          </button>
        </>
      ) : (
        <>
          <label>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={handleCheckd}
            />
            <span>{todo.todo}</span>
          </label>
          <button data-testid="modify-button" onClick={handleModifyButton}>
            수정
          </button>
          <button
            data-testid="delete-button"
            onClick={() => handleDeleteButton(todo.id)}
          >
            삭제
          </button>
        </>
      )}
    </li>
  );
};
