/* Import */
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
/* Component */
/* CSS Module */
import styles from "../../css/module/invitationSection/NoticeTItem.module.scss";
/* Context */
import { TabContext } from "../../store/option-tab-context.js";

const NoticeTItem = () => {
  const TabCtx = useContext(TabContext); 
  const [isActive, setIsActive] = useState(false);
  const setActiveHandler = (idx) => {
    setIsActive(idx);
  }
  useEffect(() => {
    setIsActive(0);
  }, []);

  return (
    TabCtx.selectTabList.length === 0 ?
    null
    :
    <ul className={styles.tab}>
    {TabCtx.selectTabList
    .map((item, idx) => {
      const tabContent = TabCtx.basicTabList.find(tab => tab.id === item);
      return (
        <li key={"tab" + idx}
          id={"tab" + idx} 
          className={`${styles.tab__item} ${isActive === idx ? styles["active"] : ""}`}
          onClick={() => setActiveHandler(idx)}
          >
          <Link to="/">{tabContent ? tabContent.content : item}</Link>
        </li>
      )
    })}
    </ul>
  )
}

export default NoticeTItem;