/* Import */
import { useState, useEffect, useRef } from "react";
/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import OptionSelector from "./OptionSelector.js";
import BackgroundSettingTheme from "./BackgroundSettingTheme.js";
import BackgroundSettingEffect from "./BackgroundSettingEffect.js";
import BackgroundSettingCheckbox from "./BackgroundSettingCheckbox.js";
/* CSS Module */
import styles from "../../css/module/common/OrderSetting.module.css";

const orderList = [
  {
    title: "asdf",
    order: "fixed"
  },
  {
    title: "asdf",
    order: "fixed"
  },
  {
    title: "asdf",
  },
  {
    title: "asdf",
  },
  {
    title: "asdf",
  },
  {
    title: "asdf",
  },  
  {
    title: "asdf",
  },
  {
    title: "asdf",
  },
  {
    title: "asdf",
  }
]

const OrderSetting = () => {

  return (
    <div className="content__wrapper">
      <ul className={styles.option__list}>
        <CommonItemWrapper>
          <p>항목을 드래그..</p>
          <p>고정 탭 설정..</p>
          <ul className={styles.order__list}>
            {
              orderList.map((item, idx) => (
                <li 
                  id={`${item.title}${idx}`} 
                  key={`${item.title}${idx}`} 
                  className={`${styles.order__item} ${item.order === "fixed" ? styles.fixed : null}`}
                >
                  {item.title}
                  {idx}
                </li>
              ))
            }
          </ul>
        </CommonItemWrapper>
      </ul>
    </div>
  )
}

export default OrderSetting;