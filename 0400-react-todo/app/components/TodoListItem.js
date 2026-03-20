import {useState} from "react";
import styles from "./TodoListItem.module.sass";
import Icon from "./Icon";
import Checkbox from "@/app/components/Checkbox";

export default function TodoListItem({ todo, onToggleCompleted, onDeleteTodo, onUpdateTodo }) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingDeadline, setIsEditingDeadline] = useState(false);
  const [draftName, setDraftName] = useState("");
  const [draftDeadline, setDraftDeadline] = useState("");

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

  const commitDeadline = (input) => {
    if (!input) {
      setDraftDeadline(todo.deadline.toString());
      setIsEditingDeadline(false);
      return;
    }

    onUpdateTodo(todo, { deadline: input });
    setIsEditingDeadline(false);
  }

  const handleDelete = () => {
    const confirmed = window.confirm("このタスクを削除しますか？");
    if (!confirmed) return;

    onDeleteTodo(todo);
  };

  return (
    <div className={styles.list__container}>
      <div className={styles.list__item}>
        <div className={`${styles["list__item-col"]} ${styles["list__item-col--checkbox"]}`}>
          <Checkbox
            checked={todo.completed}
            onChange={(checked) => onToggleCompleted(todo, checked)}
          />
        </div>

        <div
          className={`${styles["list__item-col"]} ${styles["list__item-col--name"]}`}
          onClick={() => {
            if (isEditingName) return;
            setDraftName(todo.name);
            setIsEditingName(true);
          }}
        >
          {isEditingName ? (
            <input
              type="text"
              className={styles["list__input"]}
              value={draftName}
              onChange={(event) => setDraftName(event.target.value)}
              onBlur={(event) => commitName(event.currentTarget.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  commitName(event.currentTarget.value);
                }
              }}
              autoFocus
            />
          ) : (
            todo.name
          )}
        </div>

        <div
          className={`${styles["list__item-col"]} ${styles["list__item-col--deadline"]}`}

          onClick={() => {
            if (isEditingDeadline) return;
            setDraftDeadline(todo.deadline.toString());
            setIsEditingDeadline(true);
          }}
        >
          {isEditingDeadline ? (
            <input
              type="date"
              className={styles["list__input"]}
              value={draftDeadline}
              onChange={(event) => setDraftDeadline(event.target.value)}
              onBlur={(event) => commitDeadline(event.currentTarget.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  commitDeadline(event.currentTarget.value);
                }
              }}
              autoFocus
            />
          ) : (
            todo.deadline.toString()
          )}
        </div>

        <div className={`${styles["list__item-col"]} ${styles["list__item-col--actions"]}`}>
          <Icon
            className="icon icon--trash fa-solid fa-trash"
            onClick={() => onDeleteTodo(todo)}
          />
        </div>
      </div>
    </div>
  );
}