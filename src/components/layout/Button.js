/* CSS Module */
import styles from "../../css/module/layout/Button.module.scss";

const Button = ({ type, styleType, content, onClick, className }) => {
  return (
    <button type={type} className={`${styles.btn} ${styles[styleType]} ${className ? className : ""}`} onClick={onClick}>
      {content}
    </button>
  )
}

export default Button;