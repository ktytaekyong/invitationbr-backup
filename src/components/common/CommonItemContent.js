/* CSS Module */
import styles from "../../css/module/common/CommonItemContent.module.scss";

// C: 편집 - 타이틀/컨텐츠 구분 (CommonItemWrapper)
const CommonItemContent = ({ title, multi, essential, children, wrap }) => {
  return (
    <div 
      className={`${styles.item__content} ${multi ? styles.multiLine : null} 
      ${multi === "check" ? styles.multiCheck : null}`} // 항목 내용이 두 줄 이상일 경우 (디자인 요소)
    >
      <p className={styles.option__title}>
        {title}
        {
          essential === true ? 
          <span className={styles.essential}>*</span> // 항목 설정이 저장에 필수일 경우
          :
          null
        }
      </p>
      <div className={styles.option__content} style={{flexWrap: wrap ? "nowrap" : "wrap"}}>
        {children}
      </div>
    </div>
  )
}

export default CommonItemContent;