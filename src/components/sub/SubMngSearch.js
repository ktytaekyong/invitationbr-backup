/* import */
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { DateConverterDot } from "../../utils/helpers.js";
/* CSS Module */
import styles from "../../css/module/sub/SubMngSearch.module.scss";
/* Component */
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */
import iconSearch from "../../img/icon/icon_search_g.png";

const SubMngSearch = ({ item, idx }) => {
  const { isMobile } = useContext(SetContext);
  return (
    <div className={styles.sub__mng_search}>
      <div className={styles.sub__mng_search_wrapper}>
        <select name="" id="">
          <option value="">전체</option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
      <div className={styles.sub__mng_search_wrapper}>
        <select name="" id="">
          <option value="">참석 여부</option>
          <option value=""></option>
        </select>
      </div>
      <div className={styles.sub__mng_search_wrapper}>
        <input type="text" placeholder="작성자명 검색" />
        <button><img src={iconSearch} alt="" /></button>
      </div>
    </div>
  )
}

export default SubMngSearch;