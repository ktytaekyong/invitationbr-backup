/* CSS Module */
import styles from "../../css/module/layout/SettingNotice.module.css";

const SettingNotice = ({ children }) => {
  return (
    <p className={styles.setting__notice}>
      {children}
    </p>
  )
}

export default SettingNotice;