import styles from "./TodoForm.module.sass";
import Button from "./Button";

export default function TodoForm({ onAddTodo }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name"));
    const deadline = String(formData.get("deadline"));

    if (!name.trim()) {
      window.alert("タスク名を入力してください。");
      return;
    }

    if (!deadline) {
      window.alert("期限日を入力してください。");
      return;
    }

    onAddTodo({ name, deadline });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formInputGroup}>
        <div
          className={`${styles.formInput} ${styles.formInputName}`}
        >
          <label className={styles.formInputLabel}>タスク</label>
          <input
            name="name"
            type="text"
            className={styles.formInputField}
            placeholder="タスク名を入力"
          />
        </div>
        <div className={styles.formInput}>
          <label className={styles.formInputLabel}>期限日</label>
          <input
            name="deadline"
            type="date"
            className={styles.formInputField}
            placeholder="期限日を入力"
          />
        </div>
      </div>
      <div className={styles.formInputFooter}>
        <Button text="追加" klass="buttonPrimary" type="submit" />
      </div>
    </form>
  );
}