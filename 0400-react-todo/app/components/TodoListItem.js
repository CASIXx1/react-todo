import {useState} from "react";
import styles from "./TodoListItem.module.sass";
import Icon from "./Icon";
import Checkbox from "@/app/components/Checkbox";
import InputField from "@/app/components/InputField";

export default function TodoListItem({ todo, showCompleted, onToggleCompleted, onDeleteTodo, onUpdateTodo }) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingDeadline, setIsEditingDeadline] = useState(false);
  const [draftName, setDraftName] = useState("");
  const [draftDeadline, setDraftDeadline] = useState("");
  const handleToggle = (checked, element, checkedClass) => {
    if (checked && !showCompleted) {
      if (element && checkedClass) {
        element.parentElement.classList.add(checkedClass);
      }

      const itemContainer = element.closest(`.${styles.list__item}`);
      if (itemContainer) {
        itemContainer.classList.add(styles["list__item--fadeout"]);
      }
      
      setTimeout(() => {
        onToggleCompleted(todo, checked);
      }, 1200);
    } else {
      onToggleCompleted(todo, checked);
    }
  };

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

  return (
    <div className={styles.list__container}>
      <div className={styles.list__item}>
        <div className={`${styles["list__item-col"]} ${styles["list__item-col--checkbox"]}`}>
          <Checkbox
            checked={todo.completed}
            onToggle={handleToggle}
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
            <InputField
              type="text"
              value={draftName}
              klass="list__input"
              onChange={setDraftName}
              onBlur={commitName}
              onEnter={commitName}
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
            <InputField
              type="date"
              value={draftDeadline}
              klass="list__input"
              onChange={setDraftDeadline}
              onBlur={commitDeadline}
              onEnter={commitDeadline}
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