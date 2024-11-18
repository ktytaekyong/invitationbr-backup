/* Component */
import OrderSettingStateFixedItem from "./OrderSettingStateFixedItem.js";
/* CSS Module */
import styles from "../../css/module/common/OrderSettingStateFixedWrapper.module.scss";

const OrderSettingStateFixedWrapper = ({ listName, filterCondition, className }) => {
  return (
    <div className={`${styles.order__wrapper} ${styles.fixed}`}>
      {
        listName.filter(filterCondition).map((item, idx) => (
          <OrderSettingStateFixedItem className={className} key={`${item}${idx}`}>{item}</OrderSettingStateFixedItem>
        ))
      }
    </div>
  )
}

export default OrderSettingStateFixedWrapper;