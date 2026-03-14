import styles from './TodoListItem.module.sass';

export default function TodoListItem({ todo }) {
  return (
    <div className={styles.list__container}>
      <div>{todo.name}</div>
      <div>{todo.deadline.toString()}</div>
    </div>
  );
}