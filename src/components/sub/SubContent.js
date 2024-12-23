/* import */
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { DateConverterDot } from "../../utils/helpers.js";
/* CSS Module */
import styles from "../../css/module/sub/SubListItem.module.scss";
/* Component */
import SubListSearch from "./SubListSearch.js";
import SubListItem from "./SubListItem.js";
import SubPagingContent from "./SubPagingContent.js";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */
import iconFileImg from "../../img/icon/icon_clip.png";

const SubContent = ({ item }) => {
  return (
    <div className={styles.sub__content}>
      <div className={`${styles.info} ${styles.detail}`}>
        <div className={styles.badge}>
          <p>{item.type}</p>
        </div>
        <div className={styles.title}>
          <p>{item.title}</p>
        </div>
        <div className={styles.date}>
          <p>{DateConverterDot(item.date)}</p>
        </div>
      </div>
      <div className={styles.content}>
        <p>
          - 저소득 재가 장애인 등 소외이웃 약 150명과 추석 나눔 행사<br />
          - 명절음식·선물·전통놀이 등 다채로운 프로그램 진행
          <img src="/img/notice/notice_test.png" alt="" />
          보람상조가 추석 명절을 앞두고 온기를 담은 한끼 식사를 어려운 이웃들과 함께 나눴다.<br />
          보람상조는 지난 6일 서울 금천장애인종합복지관을 방문해 명절 음식을 나누고 선물을 전달했다고 7일 밝혔다.<br />
          이날 저소득 재가 장애인과 시설 이용자 150여명은 보람상조가 준비한 갈비탕과 잡채, 전, 송편 등 명절 음식을 먹고 윷놀이, 투호던지기 등 전통놀이도 즐겼다.<br />
          보람상조 직원들은 이날 배식과 선물 나눔 등 봉사에 직접 참여했다. 보람상조는 금천장애인종합복지관과 2018년부터 인연을 맺고 장애인의 날 행사, 추석 나눔 행사 등을 펼치고 있다.
          <Link to="/">
            <img src={iconFileImg} alt="" />
            <span>붙임_보람그룹_2024후원금 전달내역.pdf</span>
          </Link>
        </p>
      </div>
      <SubPagingContent></SubPagingContent>
    </div>
  )
}

export default SubContent;