/* Import */
// import { useState, useEffect, useRef } from "react";
import { DndProvider } from "react-dnd-multi-backend";
import { HTML5toTouch } from "rdndmb-html5-to-touch";
/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import OrderSettingState from "./OrderSettingState.js";
/* CSS Module */
import styles from "../../css/module/common/OrderSetting.module.css";

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
    <div className="content__wrapper">
      <ul className={styles.option__list}>
        <CommonItemWrapper>
          <p>항목을 드래그..</p>
          <p>고정 탭 설정..</p>
          <OrderSettingState></OrderSettingState>
        </CommonItemWrapper>
      </ul>
    </div>
  )
}

export default OrderSetting;