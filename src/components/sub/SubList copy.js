/* import */
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
/* CSS Module */
import styles from "../../css/module/sub/SubList.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */
import SubListSearch from "./SubListSearch.js";

const SubList = ({ menuList }) => {
  return (
    <div className={styles.sub__list}>
      <div className={styles.sub__list_wrapper}>
        <SubListSearch></SubListSearch>
        <ul>
          
        </ul>
      </div>
    </div>
  )
}

export default SubList;