/* Import */
import { useEffect, useState, useContext } from "react";
/* Component */
import OptionTabFixItem from "../common/OptionTabFixItem";
/* CSS Module */
import styles from "../../css/module/common/OptionTabFixList.module.css";
/* Context */
import { TabContext } from "../../store/option-tab-context.js";

// 내가 봤을 땐 이거.. 1. 객체로 만든다 2. 선택한 목록을 새 배열에 넣는다 3. 꺼내 쓴다
const OptionTabFixList = () => {
  const [basicTablList, setBasicTablList] = useState();
  const TabCtx = useContext(TabContext);
  console.log("TabCtx:" + TabCtx.tabList);
  const changeTabFixHandler = (idx) => {
    
  }
  return (
    <ul className={styles.option__list}>
      {TabCtx.basicTabList.map((item, idx) => (
        <OptionTabFixItem 
          key={`tabOption${idx}`} 
          id={item.id} 
          optionTitle={item.content} 
          checked={item.isView}
          onChange={() => {changeTabFixHandler(idx)}}
          // onChange={() => {}}
        />
      ))}
    </ul>
  )
}

export default OptionTabFixList;