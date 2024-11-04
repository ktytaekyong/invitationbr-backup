/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/invitationSection/Traffic.module.scss";
/* Image */
/* Context */
import { LocationContext } from "../../store/option-location-context.js";

const Traffic = () => {
  const { trafficList, setTrafficList } = useContext(LocationContext);
  return (
    <div className={`${styles.traffic} ${styles.style_theme_1}`}>
      <div className={styles.traffic__wrap}>
        <div className={styles.traffic__content}>
          <ul className={styles.traffic__list}>
            {
              trafficList.map((item, idx) => (
                <li key={item.traffic + idx} className={styles.traffic__item}>
                  <p>{item.traffic === "" ? "버스로 오시는 길" : item.traffic}</p>
                  <p>{item.content === "" ? "남울산우체국 하차(도보2분) : 427, 922, 925, 975" : item.content}</p>
                </li>
              ))
            }
            {/* <li className={styles.traffic__item}>
              <p>주차안내</p>
              <p>
                · 보람 전용 주차장 : 지하2층 지상 4층 약 500대 주차 가능<br />
                · 세이브존 제휴 주차장 : 약 1500대 추가 주차 가능<br />
                · 안내데스크에서 주차권을 수령
              </p>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Traffic;