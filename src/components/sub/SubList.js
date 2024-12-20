/* import */
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
/* CSS Module */
import styles from "../../css/module/sub/SubList.module.scss";
/* Component */
import SubListSearch from "./SubListSearch.js";
import SubListItem from "./SubListItem.js";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */
import iconClipImg from "../../img/icon/icon_clip.png";

const SubList = ({ list }) => {
  return (
    <div className={styles.sub__list}>
      <div className={styles.sub__list_wrapper}>
        <SubListSearch></SubListSearch>
        <ul>
          <SubListItem></SubListItem>          
        </ul>
      </div>
    </div>
  )
}

export default SubList;