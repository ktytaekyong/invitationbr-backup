/* Import */
import { useState, useEffect, useCallback } from "react";
import { DndProvider } from "react-dnd-multi-backend";
import { HTML5toTouch } from "rdndmb-html5-to-touch";
import update from "immutability-helper";
/* Component */
import OrderSettingStateFixedWrapper from "./OrderSettingStateFixedWrapper.js";
import OrderSettingStateItem from "./OrderSettingStateItem.js";
/* CSS Module */
import styles from "../../css/module/common/OrderSettingState.module.css";

const fixedList = ["고정 탭 설정", "기본 정보", "배경", "인트로 화면", "인트로 사진", "신랑/신부 정보", "하단 글귀", "카톡 공유", "URL 공유"];
const orderList = [
  {
    title: "모시는 글",
    order: 1,
    option: false,
  },
  {
    title: "예식 일시",
    order: 2,
    option: false,
  },
  {
    title: "오시는 길",
    order: 3,
    option: false,
  },
  {
    title: "갤러리",
    order: 4,
    option: true,
  },  
  {
    title: "동영상",
    order: 5,
    option: true,
  },
  {
    title: "마음전하기",
    order: 6,
    option: true,
  },
  {
    title: "안내사항",
    order: 7,
    option: true,
  },
  {
    title: "공지사항",
    order: 8,
    option: true,
  },
  {
    title: "방명록",
    order: 9,
    option: true,
  },
  {
    title: "참석 의사 전달",
    order: 10,
    option: true,
  }
];

const OrderSettingState = () => {
  const [orders, setOrders] = useState(orderList);
  const moveItemHandler = useCallback((dragIndex, hoverIndex) => {
    if (orders[dragIndex].order === "fixed" || orders[hoverIndex].order === "fixed") {
      return;
    }
    setOrders((prevList) =>
      {
        const updateOrderList = update(prevList, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevList[dragIndex]],
          ],
        });
        let currentOrder = 1;
        return updateOrderList.map((item, index) => {
          if (item.order === "fixed") {
            return item; // 고정된 항목은 건드리지 않음
          }
          return {
            ...item,
            order: currentOrder++ // 1부터 순서대로 order 값 업데이트
          };
        });
      }
    )
  }, [orders]);
  const renderItemHandler = useCallback((item, index) => {
    return (
        <OrderSettingStateItem 
          key={`${item.title}${index}`} 
          index={index}
          id={`${item.title}${index}`} 
          moveItemHandler={moveItemHandler}
          className={`${styles.order__wrapper}`} 
        >
          <div className={styles.order__item}>
            {
              item.option ?
              <>
                <input type="checkbox" id={`orderItem${item.order}`}/>
                <label htmlFor="">{item.title}</label>
              </>
              :
              <p>{item.title}</p>
            }
          </div>
        </OrderSettingStateItem>
    )
  }, [])
  // useEffect(() => {
  //   console.log(orders);
  // }, [orders]);
  return (
    <DndProvider options={HTML5toTouch}>
      <div className={styles.order__setting}>
        <OrderSettingStateFixedWrapper className={styles.order__item} listName={fixedList} filterCondition={(_, idx) => idx < 3}></OrderSettingStateFixedWrapper>
        <OrderSettingStateFixedWrapper className={styles.order__item} listName={fixedList} filterCondition={(_, idx) => ((idx > 2) && (idx < 6))}></OrderSettingStateFixedWrapper>
        {orders.map((orderItem, i) => renderItemHandler(orderItem, i))}
        <OrderSettingStateFixedWrapper className={styles.order__item} listName={fixedList} filterCondition={(_, idx) => (idx > 5)}></OrderSettingStateFixedWrapper>
      </div>
    </DndProvider>
  )
}

export default OrderSettingState;