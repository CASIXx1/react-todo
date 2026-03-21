import Icon from "./Icon";
import styles from "./Checkbox.module.sass";

export default function Checkbox({ checked, onToggle }) {
  return (
    <label
      className={`${styles.checkbox} ${checked ? styles["checkbox--checked"] : ""}`}
    >
      <input
        type="checkbox"
        className={styles["checkbox__input"]}
        checked={checked}
        onChange={(event) => onToggle(event.target.checked)}
      />
      <Icon className="icon icon--check fa-solid fa-check" />
    </label>
  );
}
