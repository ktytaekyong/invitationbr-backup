/* Import */
import { useState, useEffect, useRef } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import OrderSettingState from "./OrderSettingState.js";
/* CSS Module */
import styles from "../../css/module/common/OrderSetting.module.css";
import CommonOptionContent from "./CommonOptionContent.js";
import SettingNotice from "../layout/SettingNotice.js";
import SettingNoticeContent from "../layout/SettingNoticeContent.js";

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
          <SettingNotice>
            <SettingNoticeContent>항목을 드래그하여 순서를 변경해주세요.</SettingNoticeContent>
            <SettingNoticeContent>고정 탭 설정, 기본 정보, 배경, 인트로 화면과 사진, 신랑/신부측 정보는 순서 변경할 수 없습니다.</SettingNoticeContent>
          </SettingNotice>
          <OrderSettingState></OrderSettingState>
        </CommonItemWrapper>
      </CommonOptionContent>
    </CommonOptionWrapper>
  );
};

export default OrderSetting;
