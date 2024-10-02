/* CSS Module */
import styles from "../../css/module/layout/SettingNotice.module.css";

const SettingNotice = ({ children }) => {
  return (
    <ul className={styles.notice__wrapper}>
      {children}
    </ul>
  )
}

export default SettingNotice;