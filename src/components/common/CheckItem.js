/* CSS Module */
import styles from "../../css/module/common/CheckItem.module.css";

const CheckItem = (props) => {
  return (
    <div className={styles.check}>
      <input type="checkbox" name={props.id} id={props.id} disabled={props.disabled} />
      <label htmlFor={props.id}>
        {
          props.labelImgSrc ?
          <img src={props.labelImgSrc} alt="" />
          :
          null
        }
        {props.content}
      </label>
      {props.children}
    </div>
  )
}

export default CheckItem;