/* Import */
import { useState, useEffect } from "react";
/* Component */
/* CSS Module */
import styles from "../../css/module/common/BasicInfomationSettingName.module.scss";

const BasicInfomationSettingName = ({ genderCode, nameInfo, onChange }) => {
  return (
    <div className={styles.option__input}>
      <input type="text" 
        id={`BasicInfoLastName${genderCode}`}
        name="lastname"
        value={nameInfo.lastname}
        placeholder="성"
        onChange={onChange}
        required={true}
        maxLength={2}
      />
      <input type="text" 
        id={`BasicInfoFirstName${genderCode}`} 
        name="firstname"
        value={nameInfo.firstname} 
        placeholder="이름" 
        onChange={onChange}
        required={true} 
        maxLength={5}
      />
    </div>
  )
}

export default BasicInfomationSettingName;