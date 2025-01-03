// CSS
import styles from "../../css/module/common/CoupleInfomationSettingMobileTab.module.scss";

// C: 신랑/신부 정보 - 모바일 버전의 전환 탭
const CoupleInfomation = ({ mobileTabActive, onClick }) => {
  return (
    <div className={styles.mobile__tab}>
      <button onClick={() => onClick("M")} className={mobileTabActive === "M" ? styles.active : ""}>신랑측</button>
      <button onClick={() => onClick("F")} className={mobileTabActive === "F" ? styles.active : ""}>신부측</button>
    </div>
  )
}

export default CoupleInfomation;