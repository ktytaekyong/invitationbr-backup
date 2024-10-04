/* Import */
import { useState, useEffect, useCallback } from "react";
import { DndProvider } from "react-dnd-multi-backend";
import { HTML5toTouch } from "rdndmb-html5-to-touch";
import update from "immutability-helper";
/* Component */
// import OrderSettingStateWrapper from "./OrderSettingStateWrapper.js";
import OrderSettingStateItem from "./OrderSettingStateItem.js";
/* CSS Module */
import styles from "../../css/module/common/OrderSettingState.module.css";

const orderList = [
  {
    title: "고정 탭 설정",
    order: "fixed"
  },
  {
    title: "기본 정보",
    order: "fixed"
  },
  {
    title: "배경",
    order: "fixed"
  },
  {
    title: "인트로 화면",
    order: "fixed"
  },
  {
    title: "인트로 사진",
    order: "fixed"
  },
  {
    title: "신랑/신부 정보",
    order: "fixed"
  },
  {
    title: "as3df",
    order: 1
  },
  {
    title: "as4df",
    order: 2
  },
  {
    title: "asd5f",
    order: 3
  },
  {
    title: "asd6f",
    order: 4
  },  
  {
    title: "asd7f",
    order: 5
  },
  {
    title: "asd8f",
    order: 6
  },
  {
    title: "as9df",
    order: 7
  }
]

const OrderSettingState = () => {
  const [orders, setOrders] = useState(orderList);
  const moveItemHandler = useCallback((dragIndex, hoverIndex) => {
    if (orders[dragIndex].order === "fixed" || orders[hoverIndex].order === "fixed") {
      console.log("no");
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
            console.log("no");
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
        className={`${styles.order__item} ${item.order === "fixed" ? styles.fixed : null}`} 
      >
        {item.title}
        {/* {index} */}
      </OrderSettingStateItem>
    )
  }, [])
  useEffect(() => {
    // console.log(orders);
  }, [orders]);
  return (
    <DndProvider options={HTML5toTouch}>
      <div className={styles.order__list}>
        {
          orders.filter((item) => 
            item.order === "fixed"
          ).map((fixedItem, i) => 
            <OrderSettingStateFixedItem></OrderSettingStateFixedItem>
          )
        }
        {
          orders.filter((item) => 
            item.order !== "fixed"
          ).map((orderItem, i) => renderItemHandler(orderItem, i))
        }
      </div>
    </DndProvider>
  )
}

export default OrderSettingState;