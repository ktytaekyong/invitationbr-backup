/* Import */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/* Component */
/* CSS Module */
import styles from "../../css/module/invitationSection/Tab.module.css";

const tabList = ["모시는 글", "예식 일시", "오시는 길", "갤러리"];
// const tabList = [ /* 기본 리스트 */];

const Tab = () => {
  const [isActive, setIsActive] = useState(false);
  const setActiveHandler = (idx) => {
    setIsActive(idx);
  }
  
  useEffect(() => {
    setIsActive(0);
  }, []);
  
  return (
    <ul className={styles.tab}>
      {tabList.map((item, idx) => (
        <li key={"tab" + idx}
          id={"tab" + idx} 
          className={`${styles.tab__item} ${isActive === idx ? styles["active"] : ""}`}
          onClick={() => setActiveHandler(idx)}
          >
          <Link to="/">{item}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Tab;