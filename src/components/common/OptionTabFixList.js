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
  const TabCtx = useContext(TabContext);
  const [basicTabList, setBasicTabList] = useState(TabCtx.basicTabList);
  const changeTabFixHandler = (target, idx) => {

    console.log(idx);
    setBasicTabList(prevList => {
      const updatedList = prevList.map((item, index) => 
        index === idx ? { ...item, isView: !item.isView } : item
      );
      return updatedList;
    });

  }
  {
    console.log(basicTabList);

  }
  return (
    <ul className={styles.option__list}>
      {basicTabList.map((item, idx) => (
        <OptionTabFixItem 
          key={`tabOption${idx}`} 
          id={item.id} 
          optionTitle={item.content} 
          checked={item.isView}
          onChange={(e) => {changeTabFixHandler(e.target, idx)}}
        />
      ))}
    </ul>
  )
}

export default OptionTabFixList;