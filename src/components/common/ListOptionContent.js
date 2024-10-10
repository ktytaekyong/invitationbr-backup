/* CSS Module */
import styles from "../../css/module/common/ListOptionContent.module.scss";

const ListOptionContent = ({ children, list }) => {
  return (
    <div className={`${styles.option__content} ${list ? styles.list : null}`}>
      {children}
    </div>
  )
}

export default ListOptionContent;