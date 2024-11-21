/* CSS Module */
import styles from "../../css/module/common/CommonOptionContent.module.scss";

const CommonOptionContent = ({ children, style }) => {
  return (
    <div className={styles.option__content} style={style ? style : null}>
      {children}
    </div>
  )
}

export default CommonOptionContent;