import styles from "./TodoFilter.module.sass";

export default function TodoFilter({ checked, onChange }) {

  return (
    <div className={styles.list__setting}>
      <label className={styles.list__setting_label}>
        <input
          type="checkbox"
          className={styles.list__setting_input}
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
        />
        完了タスクを表示
      </label>
    </div>
  );
}