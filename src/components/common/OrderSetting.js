/* Import */
import { useState, useEffect, useRef } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import OrderSettingState from "./OrderSettingState.js";
/* CSS Module */
import styles from "../../css/module/common/OrderSetting.module.css";
import CommonOptionContent from "./CommonOptionContent.js";

// const orderList = [
//   {
//     title: "asdf",
//     order: "fixed"
//   },
//   {
//     title: "asdf",
//     order: "fixed"
//   },
//   {
//     title: "asdf",
//   },
//   {
//     title: "asdf",
//   },
//   {
//     title: "asdf",
//   },
//   {
//     title: "asdf",
//   },  
//   {
//     title: "asdf",
//   },
//   {
//     title: "asdf",
//   },
//   {
//     title: "asdf",
//   }
// ]

const OrderSetting = () => {
  return (
    <CommonOptionWrapper>
        <CommonOptionContent>
          <CommonItemWrapper>
            <p>항목을 드래그..</p>
            <p>고정 탭 설정..</p>
            <OrderSettingState></OrderSettingState>
          </CommonItemWrapper>
        </CommonOptionContent>
    </CommonOptionWrapper>
  )
}

export default OrderSetting;