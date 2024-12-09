/* CSS Module */
import styles from "../../css/module/common/BasicInfomationSettingPlace.module.scss";

// C: 기본 정보 셋팅 - 예식장 명, 층과 홀 (BasicInfomationSetting)
const BasicInfomationSettingPlace = ({ inputType, onChange, placeInfo }) => {
  return (
    <div className={styles.option__input}>
      {
        inputType === "placeName" ?
        <input 
          type="text" 
          name="placeName" 
          value={placeInfo.placeName} 
          onChange={onChange} 
          placeholder="예식장 명 입력"
          maxLength={30}
        />
        :
        <input
          type="text"
          name="placeDetail"
          value={placeInfo.placeDetail}
          onChange={onChange}
          placeholder="층과 홀 입력"
          maxLength={20}
        />
      }
    </div>
  )
}

export default BasicInfomationSettingPlace;