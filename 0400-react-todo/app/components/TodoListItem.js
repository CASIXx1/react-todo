import styles from "./TodoListItem.module.sass";

export default function TodoListItem({ todo, onToggleCompleted, onDeleteTodo }) {
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
          {todo.name}
        </div>

        <div className={styles["list__item-col"]}>
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