/* Import */
import { useEffect, useState, useContext } from "react";
/* Component */
import FixedTabSettingItem from "../common/FixedTabSettingItem";
/* CSS Module */
import styles from "../../css/module/common/FixedTabSettingList.module.css";
/* Context */
import { TabContext } from "../../store/option-tab-context.js";

const FixedTabSettingList = () => {
  const { basicTabList, setBasicTabList, selectTabList, setSelectTabList } = useContext(TabContext);
  const [initialRender, setInitialRender] = useState(true); 
  const changeFixTabHandler = (clickedIdx) => {
    if(selectTabList.length < 4) {
      console.log("아직 적어", clickedIdx);
      setSelectTabList(prevList => {
        prevList.map((prevItem, prevItemIdx) => {
          // if(index === idx) {
          //   if((basicItem.isView)) { 
          //     setSelectTabList((prevList) => { 
          //       const newSelectTabList = prevList
          //       .filter(selectItem => selectItem.id !== basicItem.id)
          //       .map((newSelectItem) => { 
          //         return newSelectItem;
          //       });
          //       return newSelectTabList;
          //     });
          //     return {...basicItem, isView: !basicItem.isView}; 
          //   } else if(!basicItem.isView) { 
          //     if(selectTabList.length === 4) { 
          //       return basicItem;
          //     } else { 
               
          //       setSelectTabList(() => {
          //         return [...selectTabList, basicItem];
          //       });
          //       return {...basicItem, isView: !basicItem.isView}; 
          //     }
          //   }
          // } else { 
          //   return basicItem;
          // }
        })
      });
    } else if(selectTabList.length === 4) {
      return;
    }
    
  };
  useEffect(() => {
    console.log(selectTabList);
  }, []);
  return (
    <ul className={styles.option__list}>
      {basicTabList.map((item, idx) => (
        <FixedTabSettingItem 
          key={`tabOption${idx}`} 
          id={item.id} 
          optionTitle={item.content} 
          // checked={item.isView}
          onChange={() => {changeFixTabHandler(idx)}}
        />
      ))}
    </ul>
  )
}

export default FixedTabSettingList;