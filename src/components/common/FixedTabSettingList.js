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
  const changeTabFixHandler = (idx) => {
    setBasicTabList(prevList => {
      const newBasicTabList = prevList.map((basicItem, index) => {
        if(index === idx) {
          if((basicItem.isView)) { 
            setSelectTabList((prevList) => { 
              const newSelectTabList = prevList
              .filter(selectItem => selectItem.id !== basicItem.id)
              .map((newSelectItem) => { 
                return newSelectItem;
              });
              return newSelectTabList;
            });
            return {...basicItem, isView: !basicItem.isView}; 
          } else if(!basicItem.isView) { 
            if(selectTabList.length === 4) { 
              return basicItem;
            } else { 
             
              setSelectTabList(() => {
                return [...selectTabList, basicItem];
              });
              return {...basicItem, isView: !basicItem.isView}; 
            }
          }
        } else { 
          return basicItem;
        }
      });
      return newBasicTabList;
    });
  };

  useEffect(() => {
    setInitialRender(false);
  }, [selectTabList]);

  return (
    <ul className={styles.option__list}>
      {basicTabList.map((item, idx) => (
        <FixedTabSettingItem 
          key={`tabOption${idx}`} 
          id={item.id} 
          optionTitle={item.content} 
          checked={item.isView}
          onChange={() => {changeTabFixHandler(idx)}}
        />
      ))}
    </ul>
  )
}

export default FixedTabSettingList;