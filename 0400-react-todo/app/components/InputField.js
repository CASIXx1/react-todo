import styles from "./InputField.module.sass";

export default function InputField({
  type = "text",
  value,
  klass = "",
  onEnter,
  onBlur,
  onChange,
  autoFocus = false,
}) {
  const className = klass ? styles[klass] : "";

  return (
    <input
      type={type}
      value={value}
      className={`${styles.input} ${className}`}
      onChange={(event) => onChange?.(event.target.value)}
      onBlur={(event) => onBlur?.(event.target.value)}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          onEnter?.(event.currentTarget.value);
        }
      }}
      autoFocus={autoFocus}
    />
  );
}