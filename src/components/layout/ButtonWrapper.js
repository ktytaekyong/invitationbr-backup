/* CSS Module */
import styles from "../../css/module/layout/ButtonWrapper.module.scss";

const ButtonWrapper = ({ children, styleType }) => {
  return (
    <div className={`${styles.button__wrapper}
      ${styleType === "center" ? styles["center"] : ""} 
      ${styleType === "centerfill" ? styles["centerfill"] : ""}`}
    >
      {children}
    </div>
  )
}

export default ButtonWrapper;