/* Import */
import { useState, useEffect, useContext, useCallback } from "react";
import { DndProvider } from "react-dnd-multi-backend";
import { HTML5toTouch } from "rdndmb-html5-to-touch";
import update from "immutability-helper";
/* Component */
import OrderSettingStateFixedWrapper from "./OrderSettingStateFixedWrapper.js";
import OrderSettingStateItem from "./OrderSettingStateItem.js";
/* CSS Module */
import styles from "../../css/module/common/OrderSettingState.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const fixedList = ["고정 탭 설정", "기본 정보", "배경", "인트로 화면", "인트로 사진", "신랑/신부 정보", "하단 글귀", "카톡 공유", "URL 공유"];
const OrderSettingState = () => {
  const { settingOrderList, setSettingOrderList, settingList, selectSettingList, setSelectSettingList } = useContext(SetContext);
  const moveItemHandler = useCallback((dragIndex, hoverIndex) => {
    setSelectSettingList((prevList) =>
      {
        const updateOrderList = update(prevList, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevList[dragIndex]],
          ],
        });
        let currentOrder = 1;
        return updateOrderList.map((item, idx) => (
          updateOrderList[idx] = item
        ));
      }
    )
  }, [selectSettingList]);
  const renderItemHandler = useCallback((item, index) => {
    return (
        <OrderSettingStateItem 
          key={`orderItem${index}`} 
          index={index}
          id={`orderItem${index}`} 
          moveItemHandler={moveItemHandler}
          className={`${styles.order__wrapper}`} 
        >
          <div className={styles.order__item}>
            {
              selectSettingList.includes(item) ?
                <>
                  <input type="checkbox" name={`orderItemChk${index}`} id={`orderItemChk${index}`} />
                  <label htmlFor={`orderItemChk${index}`}>
                    {item.title}
                    {
                      settingList.map((settingListItem, idx) => {
                        return settingListItem.itemId === item ? settingList[idx].itemTitle : ""
                      })
                    }
                  </label>
                </>
              :
              <p>{item.title}</p>
            }
          </div>
        </OrderSettingStateItem>
    )
  }, [])
  useEffect(() => {
    console.log(selectSettingList);
  }, [selectSettingList]);
  return (
    <DndProvider options={HTML5toTouch}>
      <div className={styles.order__setting}>
        <OrderSettingStateFixedWrapper className={styles.order__item} listName={fixedList} filterCondition={(_, idx) => idx < 3}></OrderSettingStateFixedWrapper>
        <OrderSettingStateFixedWrapper className={styles.order__item} listName={fixedList} filterCondition={(_, idx) => ((idx > 2) && (idx < 6))}></OrderSettingStateFixedWrapper>
        {
          selectSettingList
          .filter((item) => (
            item !== "settingOutro" && item !== "settingThumbK" && item !== "settingThumbU" && item !== "settingOrder"
          ))
          .map((orderItem, j) => renderItemHandler(orderItem, j))
        }
        <OrderSettingStateFixedWrapper className={styles.order__item} listName={fixedList} filterCondition={(_, idx) => (idx > 5)}></OrderSettingStateFixedWrapper>
      </div>
    </DndProvider>
  )
}

export default OrderSettingState;