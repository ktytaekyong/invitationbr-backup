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
  const { basicTabList, setBasicTabList, selectTabList, setSelectTabList } = useContext(TabContext);
  // const [basicTabList, setBasicTabList] = useState(TabCtx.basicTabList);
  // const [selectTabList, setSelectTabList] = useState(TabCtx.selectTabList);
  const [initialRender, setInitialRender] = useState(true); 

  const changeTabFixHandler = (idx) => {
    setBasicTabList(prevList => {
      const newBasicTabList = prevList.map((basicItem, index) => {
        if(index === idx) { // 누른놈정보시작(맞으면멈추고 니바꿀거야)
          if((basicItem.isView)) { // true 누른놈true엿으면 false로변할테니
            setSelectTabList((prevList) => { // 그럼셀렉트에서도 빼
              const newSelectTabList = prevList
              .filter(selectItem => selectItem.id !== basicItem.id)
              .map((newSelectItem) => { // 새배열
                return newSelectItem;
              });
              return newSelectTabList;
            });
            return {...basicItem, isView: !basicItem.isView}; // 걍 false로 바꾸고
          } else if(!basicItem.isView) { // false 누른놈false 엿으면 true 가 될거아님
            if(selectTabList.length === 4) { // 먼저 검사해 selectlist 4개찻는지 찼냐? 넘었냐??(추가해야댐)
              return basicItem; // 그러면 닌 바뀌지마
            } else { // 4개아니야;;; 넘지도않아
              // 그럼셀렉트에서도 빼거나 넣자
              setSelectTabList(() => {// 그럼셀렉트에 더해
                return [...selectTabList, basicItem];
              });
              return {...basicItem, isView: !basicItem.isView}; // 4개가아니라면바뀌어도댜ㅐㅂ니다
            }
          }
        } else { // 누른넘아닌넘들
          return basicItem; // 누른넘아닌넘들은 그대로반환해
        }
      });
      return newBasicTabList;
    });
  };

  useEffect(() => {
    setInitialRender(false);
  }, [selectTabList]);

  // {
  //   console.log("basicTabList"+basicTabList.length);
  //   console.log("basicTabList"+JSON.stringify(basicTabList));
  //   console.log("selectTabList"+selectTabList.length);
  //   console.table("selectTabList"+JSON.stringify(selectTabList));
  // }

  return (
    <ul className={styles.option__list}>
      {basicTabList.map((item, idx) => (
        <OptionTabFixItem 
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

export default OptionTabFixList;