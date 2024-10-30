/* Import */
import { Link } from "react-router-dom";
/* Component */
/* CSS Module */
import styles from "../../css/module/invitationSection/Banner.module.scss";

const Banner = () => {
  return (
    <Link to="#" onClick={(e => e.preventDefault())} className={`${styles.banner}`}>
      <div className={styles.banner__wrap}>
        <p>축하 화환 보내기</p>
        <p>예식일에 맞춰 축하 화환을 전해보세요.</p>
      </div>
    </Link>
  )
}

export default Banner;