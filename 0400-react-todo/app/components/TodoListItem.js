import {useState} from "react";
import styles from "./TodoListItem.module.sass";
import Icon from "./Icon";
import Checkbox from "@/app/components/Checkbox";
import InputField from "@/app/components/InputField";
import iconStyles from "./Icon.module.sass";

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

      const itemContainer = element.closest(`.${styles.listItem}`);
      if (itemContainer) {
        itemContainer.classList.add(styles.listItemFadeout);
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
    <div className={styles.listContainer}>
      <div className={styles.listItem}>
        <div className={`${styles.listItemCol} ${styles.listItemColCheckbox}`}>
          <Checkbox
            checked={todo.completed}
            onToggle={handleToggle}
          />
        </div>

        <div
          className={`${styles.listItemCol} ${styles.listItemColName}`}
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
              klass="listInput"
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
          className={`${styles.listItemCol} ${styles.listItemColDeadline}`}

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
              klass="listInput"
              onChange={setDraftDeadline}
              onBlur={commitDeadline}
              onEnter={commitDeadline}
              autoFocus
            />
          ) : (
            todo.deadline.toString()
          )}
        </div>

        <div className={`${styles.listItemCol} ${styles.listItemColActions}`}>
          <Icon
            className={`${iconStyles.icon} fa-solid fa-trash`}
            onClick={() => onDeleteTodo(todo)}
          />
        </div>
      </div>
    </div>
  );
}