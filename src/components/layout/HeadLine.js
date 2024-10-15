/* Import */
/* Component */
/* CSS Module */
import styles from "../../css/module/layout/HeadLine.module.scss";
/* Image */

const HeadLine = ({ title, content }) => {
  return (
    <div className={styles.headline}>
      <p>{title}</p>
      <div className={styles.divide}></div>
      <p>{content}</p>
    </div>
  )
}

export default HeadLine;