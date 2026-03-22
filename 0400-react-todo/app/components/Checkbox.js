import Icon from "./Icon";
import styles from "./Checkbox.module.sass";
import iconStyles from "./Icon.module.sass";

export default function Checkbox({ checked, onToggle }) {
  return (
    <label
      className={`${styles.checkbox} ${checked ? styles.checkboxChecked : ""}`}
    >
      <input
        type="checkbox"
        className={styles.checkboxInput}
        checked={checked}
        onChange={(event) => onToggle(event.target.checked, event.target, styles.checkboxChecked)}
      />
      <Icon className={`${iconStyles.icon} ${iconStyles.iconCheck} fa-solid fa-check`} />
    </label>
  );
}
