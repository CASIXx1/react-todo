import TodoListItem from "@/app/components/TodoListItem";
import styles from "./TodoList.module.sass";

export default function TodoList({ todoList, onToggleCompleted, onDeleteTodo, onUpdateTodo }) {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header_item}>&nbsp;</div>
        <div className={`${styles.header_item} ${styles['header_item--name']}`}>
          タスク
        </div>
        <div className={styles.header_item}>期限日</div>
        <div className={styles.header_item}>&nbsp;</div>
      </div>

      <div>
        {todoList.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onToggleCompleted={onToggleCompleted}
            onDeleteTodo={onDeleteTodo}
            onUpdateTodo={onUpdateTodo}
          />
        ))}
      </div>
    </>
  );
}