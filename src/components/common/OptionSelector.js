/* CSS Module */
import styles from "../../css/module/common/OptionSelector.module.css";

const OptionSelector = ({ selectID, listName, type, hour }) => {
  return (
    <select id={selectID} className={styles.option__selector}>
      {type === "hour" ?
        hour.map((dist) => (
          listName.map((item, index) => (
            <option 
              value={index + 1} 
              key={index}
              >
                {`${dist} ${item.itemName ? item.itemName : item}`}시
            </option>
          ))
        ))
        : 
        listName.map((item, index) => (
          <option 
            value={item.itemKey ? item.itemKey : item} 
            key={`${item.itemKey}${item.itemName}${index}`}
            >
              {item.itemName ? item.itemName : item}
              {type === "minute" ? "분" : null}
          </option>
        ))
      }
      {}
    </select>
  )
}

export default OptionSelector;