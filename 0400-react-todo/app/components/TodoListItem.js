import {useState} from "react";
import styles from "./TodoListItem.module.sass";

export default function TodoListItem({ todo, onToggleCompleted, onDeleteTodo, onUpdateTodo }) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [draftName, setDraftName] = useState("");
  const [isEditingDeadline, setIsEditingDeadline] = useState(false);

  const commitName = (input) => {
    const inputText = input.trim();

    if (!inputText) {
      setDraftName(todo.name);
      setIsEditingName(false);
      return;
    }

    onUpdateTodo(todo, { name: inputText });
    setIsEditingName(false);
  };

  return (
    <div className={styles.list__container}>
      <div className={styles.list__item}>
        <div className={styles["list__item-col"]}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(event) => onToggleCompleted(todo, event.target.checked)}
          />
        </div>

        <div className={styles["list__item-col"]}>
          {isEditingName ? (
            <input
              type="text"
              value={draftName}
              onChange={(event) => setDraftName(event.target.value)}
              onBlur={() => setIsEditingName(false)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  commitName(event.target.value);
                }
              }}
              autoFocus
            />
          ) : (
            <div onClick={() => {
              setDraftName(todo.name);
              setIsEditingName(true);
            }}>
            {todo.name}
            </div>
          )}
        </div>

        <div
          className={styles["list__item-col"]}
          onClick={() => setIsEditingDeadline(true)}
        >
          {todo.deadline.toString()}
        </div>

        <div className={styles["list__item-col"]}>
          <button
            type="button"
            onClick={() => onDeleteTodo(todo)}
          >
            削除
          </button>
        </div>
      </div>
    </div>
  );
}