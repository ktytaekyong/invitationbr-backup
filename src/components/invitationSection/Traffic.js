/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/invitationSection/Traffic.module.scss";
/* Image */
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const Traffic = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  return (
    <div className={`${styles.traffic} ${styles.style_theme_1}`}>
      <div className={styles.traffic__wrap}>
        <div className={styles.traffic__content}>
          <ul className={styles.traffic__list}>
            <li className={styles.traffic__item}>
              <p>버스로 오시는 길</p>
              <p>
                남울산우체국 하차(도보2분) : 427, 922, 925, 975<br />
                남구청앞 하차(도보9분) : 147, 702, 754
              </p>
            </li>
            <li className={styles.traffic__item}>
              <p>KTX·기차·고속버스로 오시는 길</p>
              <p>
                태화강역, 울산시외·고속터미널에서 택시 이용시 5~10분
              </p>
            </li>
            <li className={styles.traffic__item}>
              <p>자가용으로 오시는 길</p>
              <p>
                네비게이션 '왕생로 160' 또는 '삼산동 1493-5'입력
              </p>
            </li>
            <li className={styles.traffic__item}>
              <p>주차안내</p>
              <p>
                · 보람 전용 주차장 : 지하2층 지상 4층 약 500대 주차 가능<br />
                · 세이브존 제휴 주차장 : 약 1500대 추가 주차 가능<br />
                · 안내데스크에서 주차권을 수령
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Traffic;