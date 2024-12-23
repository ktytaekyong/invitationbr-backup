/* import */
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
/* CSS Module */
import styles from "../../css/module/sub/SubListSearch.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */
import iconSearchIcon from "../../img/icon/icon_search.png";
import myInfo from "../../img/icon/icon_info.png";

const SubListSearch = ({ length }) => {
  return (
    <div className={styles.sub__list_search}>
      <p className={styles.sub__list_search_total}>총 <span>{length}</span>건</p>
      <div className={styles.sub__list_search_wrapper}>
        <input type="text" placeholder="제목 또는 내용을 입력하세요." />
        <button><img src={iconSearchIcon} alt="" /></button>
      </div>
    </div>
  )
}

export default SubListSearch;