/* CSS Module */
import styles from "../../css/module/common/OptionSelector.module.css";

const OptionSelector = ({ selectID, listName, type, styleType }) => {
  return (
    <div className={`${styles.option__selector_wrapper} ${styleType ? styles[styleType] : ""}`}>
      <select id={selectID} className={styles.option__selector}>
        {
          // type === "hour" ?
          // hour.map((dist) => (
          //   listName.map((item, index) => (
          //     <option 
          //       value={index + 1} 
          //       key={index}
          //       >
          //         {`${dist} ${item.itemName ? item.itemName : item}`}시
          //     </option>
          //   ))
          // ))
          // : 
        }
        {
          listName.map((item, index) => (
            <option 
              value={item.itemKey ? item.itemKey : item} 
              key={`${item.itemKey}${item.itemName}${index}`}
              >
                {item.itemName ? item.itemName : item}
                {type === "hour" ? "시" : null}
                {type === "minute" ? "분" : null}
            </option>
          ))
        }
        
      </select>
    </div>

  )
}

export default OptionSelector;