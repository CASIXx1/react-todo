import TodoListItem from "@/app/components/TodoListItem";
import styles from "./TodoList.module.sass";

export default function TodoList({ todoList, showCompleted, onToggleCompleted, onDeleteTodo, onUpdateTodo }) {
  return (
    <>
      <div className={styles.listHeader}>
        <div className={styles.listHeaderItem}>&nbsp;</div>
        <div className={`${styles.listHeaderItem} ${styles.listHeaderItemName}`}>
          タスク
        </div>
        <div className={styles.listHeaderItem}>期限日</div>
        <div className={styles.listHeaderItem}>&nbsp;</div>
      </div>

      <div>
        {todoList.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            showCompleted={showCompleted}
            onToggleCompleted={onToggleCompleted}
            onDeleteTodo={onDeleteTodo}
            onUpdateTodo={onUpdateTodo}
          />
        ))}
      </div>
    </>
  );
}