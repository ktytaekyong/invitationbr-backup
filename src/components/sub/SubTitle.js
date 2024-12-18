/* import */
import { useContext } from "react";
import { Link } from "react-router-dom";
/* CSS Module */
import styles from "../../css/module/sub/SubTitle.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */
import logoImg from "../../img/main/logo.svg";
import myInfo from "../../img/icon/icon_info.png";

const SubTitle = ({ subTitle, subContent }) => {
  const { isMobile } = useContext(SetContext);
  return (
    <div className={styles.sub__title}>
      <div className={styles.sub__title_wrap}>
        <h2>{subTitle}</h2>
        <p>{subContent}</p>
      </div>
    </div>
  )
}

export default SubTitle;