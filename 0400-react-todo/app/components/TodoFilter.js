import styles from "./TodoFilter.module.sass";

export default function TodoFilter({ checked, onChange }) {
  return (
    <div className={styles.listSetting}>
      <label className={styles.listSettingLabel}>
        <input
          type="checkbox"
          className={styles.listSettingInput}
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
        />
        完了タスクを表示
      </label>
    </div>
  );
}