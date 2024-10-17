/* Import */
/* Component */
/* CSS Module */
import styles from "../../css/module/common/LocationSettingName.module.scss";

const LocationSettingName = ({ data, locationValue }) => {

  return (
    <div className={styles.option__input}>
      {
        data === "name" ?
        <input type="text" value={locationValue} placeholder="예식장 명 입력"/>
        :
        <input type="text" value={locationValue} placeholder="층과 홀 입력"/>
      }
    </div>
  )
}

export default LocationSettingName;