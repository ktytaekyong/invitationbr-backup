/* Import */
/* Component */
/* CSS Module */
import styles from "../../css/module/common/LocationSettingName.module.scss";

const LocationSettingName = ({ data }) => {

  return (
    <div className={styles.option__input}>
      {
        data === "name" ?
        <input type="text" placeholder="예식장 명 입력"/>
        :
        <input type="text" placeholder="층과 홀 입력"/>
      }
    </div>
  )
}

export default LocationSettingName;