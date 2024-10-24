/* CSS Module */
import styles from "../../css/module/common/CheckItem.module.scss";

const CheckItem = ({ name, id, content, disabled, labelImgSrc, children, optionSet }) => {
  return (
    <div className={styles.check}>
      <input 
        type="checkbox" 
        name={name} 
        id={id} 
        disabled={disabled}
        onChange={() => {optionSet(id)}} 
      />
      <label htmlFor={id}>
        {
          labelImgSrc ?
          <img src={labelImgSrc} alt="" />
          :
          null
        }
        {content}
      </label>
      {children}
    </div>
  )
}

export default CheckItem;