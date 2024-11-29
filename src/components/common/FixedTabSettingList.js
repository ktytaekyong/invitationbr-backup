/* Import */
import { useEffect, useState, useContext } from "react";
import ReactDOM from 'react-dom';
/* Component */
import FixedTabSettingItem from "../common/FixedTabSettingItem";
import Toast from "../layout/Toast.js";
/* CSS Module */
import styles from "../../css/module/common/FixedTabSettingList.module.scss";
/* Context */
import { TabContext } from "../../store/option-tab-context.js";

const FixedTabSettingList = () => {
  const { basicTabList, selectTabList, setSelectTabList } = useContext(TabContext);
  const [open, setOpen] = useState(false);
  const changeFixTabHandler = (clickedIdx) => {
    const selectedItem = basicTabList[clickedIdx].id;
    setSelectTabList(prevList => {
      if(selectTabList.includes(selectedItem)) {
        return prevList.filter(item => item !== selectedItem);
      } else {
        if(selectTabList.length === 4) {
          setOpen(true);
          return prevList;
        } else {
          return [...prevList, selectedItem];
        }
      }
    });
  };
  useEffect(() => {
  }, []);

  return (
    <>
      <ul className={styles.option__list}>
        {basicTabList.map((item, idx) => {
          const isChecked = selectTabList.includes(item.id);
          return (
            <FixedTabSettingItem 
              key={`tabOption${idx}`} 
              id={item.id} 
              optionTitle={item.content} 
              checked={isChecked}
              onChange={() => {changeFixTabHandler(idx)}}
            />
          )
        })}
      </ul>
      {
        ReactDOM.createPortal(<Toast type="warn" open={open} setOpen={setOpen} message="최대 4개입니다." />, document.body)
      }
    </>
  )
}

export default FixedTabSettingList;