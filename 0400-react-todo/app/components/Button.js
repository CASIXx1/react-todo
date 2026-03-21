import styles from "./Button.module.sass";

export default function Button({ text, klass = "", type = "button" }) {
  const klassName = klass ? styles[klass] : "";

  return (
    <button
      type={type}
      className={`${styles.button} ${klassName}`}
    >
      {text}
    </button>
  );
}