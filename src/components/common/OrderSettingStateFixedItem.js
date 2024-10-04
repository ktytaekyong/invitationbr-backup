/* Import */
import { useState, useEffect, useCallback, useRef } from "react";
import { useDrag, useDrop } from 'react-dnd'
/* Component */
/* CSS Module */
// import styles from "../../css/module/common/OrderSettingStateItem.module.css";

const OrderSettingStateFixedItem = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default OrderSettingStateFixedItem;