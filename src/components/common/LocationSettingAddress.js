/* Import */
import { useContext } from "react";
/* Component */
import Button from "../layout/Button.js";
import CheckItem from "./CheckItem.js";
/* CSS Module */
import styles from "../../css/module/common/LocationSettingAddress.module.scss";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

// C: 오시는 길 편집 - 주소
const LocationSettingAddress = ({ onChange }) => {
  const { basicInfoList } = useContext(InfoContext);
  return (
    <>
      <div className={styles.option__input}>
        <input 
          type="text" 
          value={basicInfoList.placeInfo.placeAddress} 
          name="placeAddress" 
          placeholder="주소 입력" 
          onChange={onChange} 
        />
        <Button content="검색" styleType="point" />
      </div>
      {/* work: onChange -> map__wrap(active) */}
      <div className={styles.map}>
        <div className={styles.map__wrap}></div>
        <CheckItem id="locationViewOption" content="청첩장에 지도 표기" />
      </div>
    </>

  )
}

export default LocationSettingAddress;