/* Import */
import { useState, useEffect, useCallback, Children } from "react";
import { DndProvider } from "react-dnd-multi-backend";
import { HTML5toTouch } from "rdndmb-html5-to-touch";
import update from "immutability-helper";
/* Component */
import OrderSettingStateItem from "./OrderSettingStateItem.js";
/* CSS Module */
import styles from "../../css/module/common/OrderSettingStateWrapper.module.css";

const OrderSettingStateWrapper = ({ children }) => {
  return (
    <div className={styles.order__wrapper}>
      {children}
    </div>
  )
}

export default OrderSettingStateWrapper;