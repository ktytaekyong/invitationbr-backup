/* Import */
import { useState, useEffect, useCallback, useRef } from "react";
import { useDrag, useDrop } from 'react-dnd'
/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
/* CSS Module */
import styles from "../../css/module/common/OrderSettingStateItem.module.css";

const ItemTypes = {
  ORDER: "order",
}

const OrderSettingStateFixedItem = ({ children, className }) => {
  const orderItemRef = useRef(null);
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default OrderSettingStateFixedItem;