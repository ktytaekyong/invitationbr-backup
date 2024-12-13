/* CSS Module */
import styles from "../../css/module/common/LocationSettingName.module.scss";

// C: 오시는 길 편집 - 예식장 명, 층과 홀 입력
const LocationSettingName = ({ name, locationValue, onChange }) => {
  return (
    <div className={styles.option__input}>
      {
        name === "placeName" ?
        <input name="placeName" type="text" value={locationValue} onChange={onChange} placeholder="예식장 명 입력"/>
        :
        <input name="placeDetail" type="text" value={locationValue} onChange={onChange} placeholder="층과 홀 입력"/>
      }
    </div>
  )
}

export default LocationSettingName;