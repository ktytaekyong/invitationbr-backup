/* import */
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { DateConverterDot } from "../../utils/helpers.js";
/* CSS Module */
import styles from "../../css/module/sub/SubPaging.module.scss";
/* Component */
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */
import iconLeftArrow from "../../img/icon/icon_paging_left.png";
import iconLeftArrow2 from "../../img/icon/icon_paging_left2.png";
import iconRightArrow from "../../img/icon/icon_paging_right.png";
import iconRightArrow2 from "../../img/icon/icon_paging_right2.png";
import iconPagingMenu from "../../img/icon/icon_paging_menu.png";

const SubPagingContent = ({}) => {
  const { isMobile } = useContext(SetContext);
  return (
    <>
      <div className={`${styles.paging} ${styles.content}`}>
        <div className={styles.paging__wrapper}>
          <div className={styles.paging__item}>
            <Link to="/Notice" className={``}>
              <div className={styles.badge}>이전글</div>
              <span className={styles.disabled}>이전 글이 없습니다.</span>
            </Link>
          </div>
          <div className={`${styles.paging__item} ${styles.menu__button}`}>
            <Link to="/Notice" className={`${styles.active}`}>
              {isMobile ? <span>목록으로</span> : <img src={iconPagingMenu} alt="" />}
            </Link>
          </div>
          <div className={styles.paging__item}>
            <Link to="/Notice" className={``}>
              <span>축하 화환 주문 방법</span>
              <div className={styles.badge}>다음글</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubPagingContent;