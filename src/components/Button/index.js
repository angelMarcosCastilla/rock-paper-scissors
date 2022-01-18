import styles from "./styles.module.css"

function Button({ text, primary, outline, ...rest }) {
  if (primary) return <button className={styles.primary} {...rest}>{text}</button>;

  if (outline) return <button className={styles.outline} {...rest}>{text}</button>;

  return <button {...rest}>{text}</button>;
}

export default Button;
