import Icon from "./Icon";
import styles from "./Checkbox.module.sass";

export default function Checkbox({ checked, onChange }) {
  return (
    <label
      className={`${styles.checkbox} ${checked ? styles["checkbox--checked"] : ""}`}
    >
      <input
        type="checkbox"
        className={styles["checkbox__input"]}
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <Icon className="icon icon--check fa-solid fa-check" />
    </label>
  );
}
