/* Import */
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
/* Component */
import Button from "../layout/Button.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Tab.module.scss";
/* Context */
import { TabContext } from "../../store/option-tab-context.js";
import { SetContext } from "../../store/option-set-context.js";
import { InfoContext } from "../../store/option-info-context.js";
import { IntroContext } from "../../store/option-intro-context.js";

const Tab = ({ buttonOnClick, isActiveTab }) => {
  const { basicTabList, selectTabList } = useContext(TabContext); 
  const { selectOptionList } = useContext(SetContext);
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
    <div className={`${styles.tab__wrap} ${styles[selectOptionList.introFillType]}`}>
      <div className={`${styles.backdrop} ${isActiveTab ? styles["active"] : ""}`} onClick={buttonOnClick}></div>
      <div className={styles.button__wrapper}>
        <Button onClick={buttonOnClick} className={`${isActiveTab ? styles["active"] : ""}`} />
      </div>
      <ul className={`${styles.tab} ${isActiveTab ? styles["active"] : ""}`} >
        {selectTabList
        .map((item, idx) => {
          const tabContent = basicTabList.find(tab => tab.id === item);
          return (
            <li key={"tab" + idx}
              id={"tab" + idx} 
              className={`${styles.tab__item} ${isActive === idx ? styles["active"] : ""}`}
              onClick={() => setActiveHandler(idx)}
            >
              <Link to="#" onClick={(e => e.preventDefault())}>
                {tabContent ? tabContent.content : null}
              </Link>
            </li>
          )
        })}
      </ul>
      
    </div>
    
  )
}

export default Tab;