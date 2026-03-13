import styles from "./Home.module.sass";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";
import TodoListItem from "./TodoListItem";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles["main__container"]}>
        <div className={styles["main__header"]}>
          <h1 className={styles["main__header-title"]}>Todo</h1>
        </div>
        <div className={styles["main__body"]}>
          <TodoForm />

          <div className={styles["list"]}>

            <TodoList
              todoList={[]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}