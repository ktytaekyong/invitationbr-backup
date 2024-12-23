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

const SubListItem = ({}) => {
  const { isMobile } = useContext(SetContext);
  return (
    <>
      <div className={styles.paging}>
      {isMobile ? <button>더 보기(0/0)</button> : 
        <div className={styles.paging__wrapper}>
          {false ? 
            <>
              <div className={styles.paging__item}>
                <Link><img src={iconLeftArrow2} alt="" /></Link>
              </div>
              <div className={styles.paging__item}>
                <Link><img src={iconLeftArrow} alt="" /></Link>
              </div>
            </> : null
          }
          <div className={styles.paging__item}>
            <Link className={`${styles.active}`}>1</Link>
          </div>
          <div className={styles.paging__item}>
            <Link>2</Link>
          </div>
          <div className={styles.paging__item}>
            <Link><img src={iconRightArrow} alt="" /></Link>
          </div>
          <div className={styles.paging__item}>
            <Link><img src={iconRightArrow2} alt="" /></Link>
          </div>
        </div>
      }
      </div>
    </>
  )
}

export default SubListItem;