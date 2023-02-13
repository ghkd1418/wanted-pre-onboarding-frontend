import { ITodoItemFromProps } from "../TodoList";
import { useState } from "react";

export const TodoItemForm = ({
  handleDeleteButton,
  // handleModifySubmit,
  todo,
}: ITodoItemFromProps) => {
  const [isModifyMode, setIsModifyMode] = useState(false);
  const [modifyTodo, setModifyTodo] = useState(todo.todo);
  // const [isChecked, setIsChecked] = useState(false);
  console.log(todo);
  const handleModifyButton = () => {
    setIsModifyMode((prev) => !prev);
  };
  const handleModifyChange = (e: any) => {
    setModifyTodo(e.target.value);
  };
  // const handleCheck = () => {
  //   setIsChecked((prev) => !prev);
  // };

  return (
    <li key={todo.id}>
      {isModifyMode ? (
        <>
          <input
            data-testid="modify-input"
            defaultValue={modifyTodo}
            onChange={handleModifyChange}
          />
          <button data-testid="submit-button">제출</button>
          <button data-testid="cancel-button" onClick={handleModifyButton}>
            취소
          </button>
        </>
      ) : (
        <>
          <label>
            <input type="checkbox" />
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
