import styles from "./TodoForm.module.sass";
import Button from "./Button";

export default function TodoForm({ onAddTodo }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name"));
    const deadline = String(formData.get("deadline"));

    onAddTodo({ name, deadline });
  }

  return (
    <form className={styles["form"]} onSubmit={handleSubmit}>
      <div className={styles["form__input-group"]}>
        <div
          className={`${styles["form__input"]} ${styles["form__input--name"]}`}
        >
          <label className={styles["form__input-label"]}>タスク</label>
          <input
            name="name"
            type="text"
            className={styles["form__input-field"]}
            placeholder="タスク名を入力"
          />
        </div>
        <div className={styles["form__input"]}>
          <label className={styles["form__input-label"]}>期限日</label>
          <input
            name="deadline"
            type="date"
            className={styles["form__input-field"]}
            placeholder="期限日を入力"
          />
        </div>
      </div>
      <div className={styles["form__input-footer"]}>
        <Button text="追加" klass="button--primary" type="submit" />
      </div>
    </form>
  );
}