/* Import */
import { useContext, useCallback } from "react";
import { DndProvider } from "react-dnd-multi-backend";
import { HTML5toTouch } from "rdndmb-html5-to-touch";
import update from "immutability-helper";
/* Component */
import OrderSettingStateFixedWrapper from "./OrderSettingStateFixedWrapper.js";
import OrderSettingStateItem from "./OrderSettingStateItem.js";
import LetterImg from "../../img/orderState/background_letter.png";
import DateImg from "../../img/orderState/background_date.png";
import LocationImg from"../../img/orderState/background_location.png";
import GalleryImg from "../../img/orderState/background_gallery.png";
import VideoImg from "../../img/orderState/background_video.png";
import GiftImg from "../../img/orderState/background_gift.png";
import NoticeTImg from "../../img/orderState/background_noticeT.png";
import NoticeDImg from "../../img/orderState/background_noticeD.png";
import BgmImg from "../../img/orderState/background_bgm.png";
import GuestbookImg from "../../img/orderState/background_guestbook.png";
import AttendImg from "../../img/orderState/background_attend.png";
import IntroImg from "../../img/orderState/background_letter.png";
/* CSS Module */
import styles from "../../css/module/common/OrderSettingState.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const fixedList = ["고정 메뉴 설정", "기본 정보", "배경", "인트로 화면", "인트로 사진", "신랑/신부 정보", "하단 글귀", "카톡 공유", "URL 공유"];
const fixedItems = ["settingOutro", "settingThumbK", "settingThumbU", "settingOrder"];

const OrderSettingState = () => {
  const { settingList, selectSettingList, setSelectSettingList } = useContext(SetContext);
  const moveItemHandler = useCallback((dragIndex, hoverIndex) => {
    setSelectSettingList((prevList) => {
      const movableItems = prevList.filter(item => !fixedItems.includes(item));
      const updatedMovableItems = update(movableItems, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, movableItems[dragIndex]],
        ],
      });
      const updatedList = prevList.map(item => 
        fixedItems.includes(item) ? item : updatedMovableItems.shift()
      );
      return updatedList;
    });
    
  }, [setSelectSettingList]);
  
  const renderComponentHandler = (id) => {
    switch(id) {
      case "settingLetter":
        return LetterImg;
      case "settingDate":
        return DateImg;
      case "settingLocation":
        return LocationImg;
      case "settingGallery":
        return GalleryImg;
      case "settingVideo":
        return VideoImg;
      case "settingGift":
        return GiftImg;
      case "settingNoticeT":
        return NoticeTImg;
      case "settingNoticeD":
        return NoticeDImg;
      case "settingGuestbook":
        return GuestbookImg;
      case "settingAttend":
        return AttendImg;
      case "settingBgMusic":
        return BgmImg;
      default:
        return null;
    }
  }
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
            <div className={styles.order__item_wrap}>
              <div className={styles.order__item_title}>
                {
                  item === "settingLetter" || item === "settingDate" || item === "settingLocation" || item === "settingOrder" ? null : <input type="checkbox" name={`orderItemChk${index}`} id={`orderItemChk${index}`} />
                }
                <label htmlFor={`orderItemChk${index}`}>
                  {item.title}
                  {
                    settingList.map((settingListItem, idx) => {
                      return settingListItem.itemId === item ? settingList[idx].itemTitle : ""
                    })
                  }
                </label>
              </div>
              <div className={styles.order__item_inner}>
                {// Feat: 내부 이미지 OR 렌더링 처리
                /* {
                  selectSettingList.includes(item) ? (
                    renderComponentHandler(item)
                  ) : null
                } */}
                <img src={renderComponentHandler(item)} alt="" />
              </div>
            </div>
            :
            <p>{item.title}</p>
          }
        </div>
      </OrderSettingStateItem>
    )
  }, [moveItemHandler, selectSettingList, settingList])

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