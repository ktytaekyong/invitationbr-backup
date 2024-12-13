/* CSS Module */
import styles from "../../css/module/common/CommonOptionContent.module.scss";

// C: 편집 - 타이틀/컨텐츠 포장 (하단 border, CommonOptionWrapper)
const CommonOptionContent = ({ children, style }) => {
  return (
    <div className={styles.option__content} style={style ? style : null}>
      {children}
    </div>
  )
}

export default CommonOptionContent;