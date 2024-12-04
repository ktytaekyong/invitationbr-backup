/* Import */
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
/* Component */
import Button from "../layout/Button.js";
import MobileSettingButtonWrapper from "../layout/MobileSettingButtonWrapper.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Tab.module.scss";
/* Context */
import { TabContext } from "../../store/option-tab-context.js";
import { SetContext } from "../../store/option-set-context.js";
import { InfoContext } from "../../store/option-info-context.js";
import { RefContext } from "../../store/option-ref-context.js";

const Tab = ({ setActiveTabHandler, isActiveTab, setIsActiveTab }) => {
  const previewLocation = useLocation();
  const isTargetPage = previewLocation.pathname === "/Preview";
  const { basicTabList, selectTabList, activeTabState, setActiveTabState } = useContext(TabContext); 
  const { isMobile, selectOptionList } = useContext(SetContext);
  const { basicInfoList } = useContext(InfoContext);
  const { letterRef } = useContext(RefContext);
  const [isActive, setIsActive] = useState(false);
  const setActiveHandler = (idx) => {
    setIsActive(idx);
  }
  const dayCalculator = (date) => {
    const today = new Date();
    const selectedDate = new Date(date);
    const diffTime = selectedDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  const scrollHandler = (ref) => {
    console.log(ref.current);
    console.log(ref);
  }
  
  useEffect(() => {
    setIsActive(0);
  }, []);
  useEffect(() => {
    setIsActiveTab(false);
  }, [selectOptionList.introFillType, setIsActiveTab]);
  return (
    <>
      {!isTargetPage && isMobile ? 
      <MobileSettingButtonWrapper 
        id="settingFixedTab" 
        position="absolute" 
        top={20}
      /> : null}
      {
        selectTabList.length === 0 ?
        null
        :
        <div className={`${styles.tab__wrap} ${isTargetPage ? styles.preview : ""} ${styles[selectOptionList.theme === "themeModernBasic" ? selectOptionList.introFillType : selectOptionList.theme]}`}>
          <div className={`${styles.backdrop} ${isActiveTab ? styles["active"] : ""}`} onClick={setActiveTabHandler}></div>
          <div className={styles.button__wrapper}>
            <Button onClick={setActiveTabHandler} className={`${isActiveTab ? styles["active"] : ""}`} />
          </div>
          <ul className={`${styles.tab} ${isActiveTab ? styles["active"] : ""}`} >
            {selectTabList
            .map((item, idx) => {
              const tabContent = basicTabList.find(tab => tab.id === item);
              return (
                <li key={"tab" + idx}
                  id={"scroll" + tabContent.id} 
                  className={`${styles.tab__item} ${isActive === idx ? styles["active"] : ""}`}
                  onClick={() => {
                    setActiveHandler(idx);
                    scrollHandler(tabContent.id.substring(3));
                  }}
                >
                  {/* <Link to={`#${tabContent.id.substring(3)}`}> */}
                    <span>{tabContent ? tabContent.content : null}</span>
                  {/* </Link> */}
                </li>
              )
            })}
            <li className={styles.tab__day}>
              <p>보람<span>♥</span>신우의 결혼식<br /><span>{dayCalculator(basicInfoList.dateInfo.date)}</span>일 남았습니다.</p>
            </li>
          </ul>
        </div>
      }
    </>

  )
}

export default Tab;