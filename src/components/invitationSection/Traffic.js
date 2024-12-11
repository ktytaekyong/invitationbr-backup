/* Import */
import { useContext } from "react";
/* CSS Module */
import styles from "../../css/module/invitationSection/Traffic.module.scss";
/* Context */
import { LocationContext } from "../../store/option-location-context.js";

const Traffic = () => {
  const { trafficList } = useContext(LocationContext);
  return (
    <div className={`${styles.traffic}`}>
      <div className={styles.traffic__wrap}>
        <div className={styles.traffic__content}>
          <ul className={styles.traffic__list}>
            {
              trafficList.map((item, idx) => (
                idx === 0 ? 
                <li key={item.traffic + idx} className={styles.traffic__item}>
                  <p>{item.traffic === "" ? "버스로 오시는 길" : item.traffic}</p>
                  <p>{item.content === "" ? "남울산우체국 하차(도보2분) : 427, 922, 925, 975" : item.content}</p>
                </li> : 
                <li key={item.traffic + idx} className={styles.traffic__item}>
                  <p>{item.traffic === "" ? "지하철로 오시는 길" : item.traffic}</p>
                  <p>{item.content === "" ? "태화강역 하차 (동해선)" : item.content}</p>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Traffic;