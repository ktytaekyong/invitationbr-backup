/* Import */
import { useState, useEffect, useCallback, Children } from "react";
import { DndProvider } from "react-dnd-multi-backend";
import { HTML5toTouch } from "rdndmb-html5-to-touch";
import update from "immutability-helper";
/* Component */
import OrderSettingStateItem from "./OrderSettingStateItem.js";
import OrderSettingStateFixedItem from "./OrderSettingStateFixedItem.js";
/* CSS Module */
import styles from "../../css/module/common/OrderSettingStateWrapper.module.css";

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