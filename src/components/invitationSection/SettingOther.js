/* Import */
import { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
/* Component */
/* CSS Module */
import styles from "../../css/module/invitationSection/SettingOther.module.scss";
/* Image */
import iconBg from "../../img/icon/icon_other_setting_bg.png";
import iconKakao from "../../img/icon/icon_other_setting_kakao.png";
import iconUrl from "../../img/icon/icon_other_setting_url.png";
import iconOrder from "../../img/icon/icon_other_setting_order.png";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const SettingOther = () => {
  const { selectSettingList, setSelectSettingList, settingList } = useContext(SetContext);
  return (
    selectSettingList.includes("settingBgMusic") || selectSettingList.includes("settingThumbK") || selectSettingList.includes("settingThumbU") || selectSettingList.includes("settingOrder") ?
    <div className={styles.other}>
      <div className={styles.other__wrap}>
        {
          selectSettingList.includes("settingBgMusic") ?
          <div className={styles.other__item}>
            <img src={iconBg} alt="" />
            <p>배경 음악 설정</p>
            <p>모바일 청첩장 접속 시 나오는 배경음악을<br />
            설정할 수 있습니다.</p>
          </div>
          : null
        }
        {
          selectSettingList.includes("settingThumbK") ?
          <div className={styles.other__item}>
            <img src={iconKakao} alt="" />
            <p>배경 음악 설정</p>
            <p>모바일 청첩장 접속 시 나오는 배경음악을<br />
            설정할 수 있습니다.</p>
          </div>
          : null
        }
        {
          selectSettingList.includes("settingThumbU") ?
          <div className={styles.other__item}>
            <img src={iconUrl} alt="" />
            <p>배경 음악 설정</p>
            <p>모바일 청첩장 접속 시 나오는 배경음악을<br />
            설정할 수 있습니다.</p>
          </div>
          : null
        }
        {
          selectSettingList.includes("settingOrder") ?
          <div className={styles.other__item}>
            <img src={iconOrder} alt="" />
            <p>배경 음악 설정</p>
            <p>모바일 청첩장 접속 시 나오는 배경음악을<br />
            설정할 수 있습니다.</p>
          </div>
          : null
        }
      </div>
    </div>
    : null
  )
}

export default SettingOther;