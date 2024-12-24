/* import */
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { DateConverterDot } from "../../utils/helpers.js";
/* CSS Module */
import styles from "../../css/module/sub/SubMngList.module.scss";
/* Component */
import SubMngListItem from "../sub/SubMngListItem.js";
import Button from "../layout/Button.js";
import SubPaging from "./SubPaging.js";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */
import SubListSearch from "./SubListSearch.js";
import iconClipImg from "../../img/icon/icon_clip.png";

const SubMngList = ({ item, idx }) => {
  const { isMobile } = useContext(SetContext);
  return (
    <div className={styles.sub__mng_list}>
      <div className={styles.sub__mng_list_wrapper}>
        <div className={styles.tool}>
          {isMobile ? 
            <div className={styles.mng__container_header_chkbox}>
              <input type="checkbox" name="" id="" />
              <label>전체 선택</label>
            </div>
          : null}
          <p>총 <span>{0}</span>건</p>
          {isMobile ? null : <Button content="액셀 다운로드" styleType="primary"></Button>}
        </div>
        <div className={styles.mng__container}>
          {
            isMobile ? null :
            <div className={`${styles.mng__container_header} ${styles.mng__container_wrapper}`}>
              <div className={styles.mng__container_header_chkbox}>
                <input type="checkbox" name="" id="" />
                <label>전체 선택</label>
              </div>
              <div>
                <p>작성자 및 동행인 수</p>
              </div>
              <div>
                <p>참석 여부</p>
              </div>
              <div>
                <p>식사 여부</p>
              </div>
              <div>
                <p>버스 탑승 여부</p>
              </div>
              <div>
                <p>답변일</p>
              </div>
            </div>
          }
          <SubMngListItem></SubMngListItem>
          <SubMngListItem></SubMngListItem>
          <SubMngListItem></SubMngListItem>
        </div>
        <div className={styles.tool2}>
          <Button content="선택항목 삭제" styleType="default"></Button>
          <SubPaging></SubPaging>
        </div>
      </div>

    </div>
  )
}

export default SubMngList;