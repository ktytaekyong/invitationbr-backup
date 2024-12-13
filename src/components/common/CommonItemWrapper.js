/* CSS Module */
import styles from "../../css/module/common/CommonItemWrapper.module.scss";

// C: 편집 - 타이틀/컨텐츠 포장 (CommonItemWrapper)
const CommonItemWrapper = (props) => {
  return (
    <div className={styles.item__content_wrapper}>
      {props.children}
    </div>
  )
}

export default CommonItemWrapper;