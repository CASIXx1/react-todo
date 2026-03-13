import styles from "./TodoFilter.module.sass";

export default function TodoFilter() {

  return (
    <div className={styles.list__setting}>
      <label className={styles.list__setting_label}>
        <input
          type="checkbox"
          className={styles.list__setting_input}
        />
        完了タスクを表示
      </label>
    </div>
  );
}