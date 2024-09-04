/* CSS Module */
import styles from "../../css/module/common/OptionListWrapper.module.css";

const OptionListWrapper = (props) => {
  return (
    <div className={styles.option__item} >
      <p className={styles.option__title}>{props.title}</p>
      {props.children}
    </div>
  )
}

export default OptionListWrapper;