/* CSS Module */
import styles from "../../css/module/layout/SettingNoticeContent.module.scss";

const SettingNoticeContent = ({ children, style }) => {
  return (
    <li className={`${styles.notice__content}`} style={style}>
      <span>※</span>
      <span>{children}</span>
    </li>
  )
}

export default SettingNoticeContent;