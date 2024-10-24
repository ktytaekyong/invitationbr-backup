/* Import */
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
/* Component */
/* CSS Module */
import styles from "../../css/module/invitationSection/Tab.module.scss";
/* Context */
import { TabContext } from "../../store/option-tab-context.js";

const Tab = () => {
  const { basicTabList, selectTabList } = useContext(TabContext); 
  const [isActive, setIsActive] = useState(false);
  const setActiveHandler = (idx) => {
    setIsActive(idx);
  }
  useEffect(() => {
    setIsActive(0);
  }, []);
  return (
    selectTabList.length === 0 ?
    null
    :
    <ul className={styles.tab}>
    {selectTabList
    .map((item, idx) => {
      const tabContent = basicTabList.find(tab => tab.id === item);
      return (
        <li key={"tab" + idx}
          id={"tab" + idx} 
          className={`${styles.tab__item} ${isActive === idx ? styles["active"] : ""}`}
          onClick={() => setActiveHandler(idx)}
        >
          <Link to="/">
            {tabContent && tabContent.id !== "tabNoticeT" && tabContent.id !== "tabNoticeD" ? tabContent.content : null}
            {tabContent && tabContent.id === "tabNoticeT" ? "안내사항" : null}
            {tabContent && tabContent.id === "tabNoticeD" ? "공지사항" : null}
          </Link>
        </li>
      )
    })}
    </ul>
  )
}

export default Tab;