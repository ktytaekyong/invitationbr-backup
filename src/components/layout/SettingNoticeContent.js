/* CSS Module */
import styles from "../../css/module/layout/SettingNoticeContent.module.css";

const SettingNoticeContent = ({ children }) => {
  return (
    <li className={styles.notice__content}>
      <span>※</span>
      <span>{children}</span>
    </li>
  )
}

export default SettingNoticeContent;