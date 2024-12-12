// Import
import { nameHandler } from '../../utils/helpers';
/* CSS Module */
import styles from "../../css/module/common/BasicInfomationSettingName.module.scss";

// C: 기본 정보 셋팅 - 이름 (BasicInfomationSetting)
const BasicInfomationSettingName = ({ genderCode, nameInfo, onChange }) => {
  return (
    <div className={styles.option__input}>
      <input type="text" 
        id={`BasicInfoLastName${genderCode}`}
        name="lastname"
        value={nameHandler(nameInfo.lastname)}
        placeholder="성"
        onChange={onChange}
        required={true}
        maxLength={2}
      />
      <input type="text" 
        id={`BasicInfoFirstName${genderCode}`} 
        name="firstname"
        value={nameHandler(nameInfo.firstname)}
        placeholder="이름" 
        onChange={onChange}
        required={true} 
        maxLength={3}
      />
    </div>
  )
}

export default BasicInfomationSettingName;