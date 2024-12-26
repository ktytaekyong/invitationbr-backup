/* import */
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { DateConverterDot } from "../../utils/helpers.js";
/* CSS Module */
import styles from "../../css/module/sub/SubMngItem.module.scss";
/* Component */
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */
import SubListSearch from "./SubListSearch.js";
import iconClipImg from "../../img/icon/icon_clip.png";

const SubMngItem = ({ img, type, listType }) => {
  const { isMobile, attendGuestList } = useContext(SetContext);
  const listWetherDivider = (listType) => {
    let total = {
      totalCount: 0,
      groomCount: 0,
      brideCount: 0,
    };
    const incrementCounts = (condition, type, count) => {
      if (condition) {
        total.totalCount = total.totalCount + count + 1; 
        if (type === "attendTypeGroom") {
          total.groomCount = total.groomCount + count + 1;
        } else {
          total.brideCount = total.brideCount + count + 1;
        }
      }
    };
    if (listType === "whether") {
      attendGuestList.forEach((element) =>
        incrementCounts(element.attendWhether, element.attendType, element.attendCount)
      );
    } else if (listType === "meal") {
      attendGuestList.forEach((element) =>
        incrementCounts(element.attendMealYes, element.attendType, element.attendCount)
      );
    } else if (listType === "bus") {
      attendGuestList.forEach((element) =>
        incrementCounts(element.attendBusYes, element.attendType, element.attendCount)
      );
    }
    return total;
  };
  return (
    <li className={styles.sub__mng_ltem}>
      <div className={styles.img__wrap}>
        <img src={img} alt="" />
      </div>
      <p className={styles.total}>{type} {isMobile ? <br /> : null} <span>{listWetherDivider(listType).totalCount}</span>명</p>
      <div className={styles.detail}>
        <div>
          <p>신랑측</p>
          <p><span>{listWetherDivider(listType).groomCount}</span>명</p>
        </div>
        <div>
          <p>신부측</p>
          <p><span>{listWetherDivider(listType).brideCount}</span>명</p>
        </div>
      </div>
    </li>
  )
}

export default SubMngItem;