/* CSS Module */
import styles from "../../css/module/common/CommonOptionWrapper.module.scss";

// C: 편집 - 컨텐츠 포장
const CommonOptionWrapper = ({ children }) => {
  return (
    <div className={styles.option__content_wrapper}>
      {children}
    </div>
  )
}

export default CommonOptionWrapper;