/* CSS Module */
import styles from "../../css/module/common/FixedTabSettingItem.module.scss";

// C: 고정 메뉴 설정 - 아이템
const FixedTabSettingItem = ({ id, checked, onChange, optionTitle }) => {
  return (
    <li className={styles.option__item}>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{optionTitle}</label>
    </li>
  )
}

export default FixedTabSettingItem;