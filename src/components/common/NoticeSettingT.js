/* Import */
import { useState, useContext } from "react";
import ReactDOM from 'react-dom';
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import TabSelector from "./TabSelector.js"
import TextEditor from "./TextEditor.js";
import PhotoSelector from "./PhotoSelector.js";
import RadioList from "./RadioList.js";
import RadioItem from "./RadioItem.js";
import ButtonWrapper from "../layout/ButtonWrapper.js";
import Button from "../layout/Button.js";
import BasicModalNoticeTAdd from "../layout/modal/BasicModalNoticeTAdd.js";
import BasicModalNoticeTDelete from "../layout/modal/BasicModalNoticeTDelete.js";
import Toast from "../layout/Toast.js";
/* CSS Module */
import styles from "../../css/module/common/NoticeSettingT.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

// C: 안내사항 설정
const NoticeSettingT = () => {
  const { noticeTList, setNoticeTList, selectNoticeT, setSelectNoticeT } = useContext(SetContext);
  const [addTitle, setAddTitle] = useState("");
  const [openAdd, setOpenAdd] = useState(false);
  const [openDel, setOpenDel] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  const handleOpenDel = () => setOpenDel(true);
  const handleCloseDel = () => setOpenDel(false);
  const fileAddHandler = (e, index) => {
    const file = e.target.files[0];
    if(file) {
      const fileList = new FileReader();
      fileList.onload = (e) => {
        setNoticeTList((prev) => {
          const newList = [...prev];
          newList[index] = { ...newList[index], src: e.target.result };
          return newList;
        })
      };
      fileList.readAsDataURL(file);
    }
  }
  const addTabTitle = (e) => {
    setAddTitle(e.target.value);
  }
  const noticeAddHandler = () => {
    setNoticeTList((prev) => (
      [
        ...prev,
        {
          title: addTitle,
          id: `noticeTab${Date.now().toString()}`,
          content: "",
          src: "",
          position: "top"
        }
      ]
    ))
    setSelectNoticeT(noticeTList.length);
  }
  const noticeRemoveHandler = (removeidx) => {
    console.log(removeidx);
    if(noticeTList.length === 1) {
      setNoticeTList((prev) => {
        setOpenToast(true);
        return prev;
      })
    } else {
      setNoticeTList((prev) => {
        return prev.filter((_, index) => index !== removeidx)
      })
    }
  }
  const noticeTabDataChangeHandler = (e, index) => {
    const { name, value } = e.target;
    setNoticeTList(prev => {
      const newList = [...prev];
      newList[index] = { ...newList[index], [name]: value };
      return newList;
    });
  };
  const photoDeleteHandler = (index) => {
    setNoticeTList((prev) => {
      const newList = [...prev];
      newList[index] = { ...newList[index], src: "" };
      return newList; 
    });
  };
  return (
    <>
      <CommonOptionWrapper>
        <CommonOptionContent>
          <CommonItemWrapper>
            <CommonItemContent title="탭 순서" multi="check">
              <TabSelector 
                listName={noticeTList} 
                name={`noticeTtitle`}
                onClickDel={handleOpenDel} 
                selectNoticeT={selectNoticeT}
              />
              <ButtonWrapper>
                <Button content="탭 추가" styleType="add" onClick={handleOpenAdd} />
              </ButtonWrapper>
            </CommonItemContent>
          </CommonItemWrapper>
          {noticeTList.map((item, idx) => (
            <div key={`noticeTList${idx}`} id={`${item.id}content`} className={`${styles.tab__item} ${selectNoticeT === idx ? styles["active"] : ""}`}>
              <CommonItemWrapper>
                <CommonItemContent title="제목">
                  <input 
                    type="text" 
                    id={`${item.id}Title`} 
                    name="title" 
                    value={item.title}
                    maxLength={10}
                    onChange={(e)=>{noticeTabDataChangeHandler(e, idx)}}
                    placeholder="탭 제목을 작성해 주세요."
                  />
                </CommonItemContent>

                <CommonItemContent title="내용" multi={true}>
                  <TextEditor 
                    dataName="content" 
                    textValue={item.content} 
                    onChange={(e)=>{noticeTabDataChangeHandler(e, idx)}}
                    maxLength={100}
                  />
                </CommonItemContent>

                <CommonItemContent title="사진" multi={true}>
                  <PhotoSelector
                    id={`NoticeTPhotoList${idx}`}
                    limit={1}
                    listName={[noticeTList[idx]]}
                    onChange={(e) => fileAddHandler(e, idx)}
                    deleteFunction={() => photoDeleteHandler(idx)}
                  />
                  <RadioList title="사진 위치">
                    <RadioItem
                      name={`position${idx}`} 
                      id={`top${idx}`} 
                      content="본문 위쪽" 
                      radioidx={idx}
                      radioChecked={item.position === "top" ? item.position : null} 
                    />
                    <RadioItem 
                      name={`position${idx}`} 
                      id={`bottom${idx}`} 
                      content="본문 아래쪽" 
                      radioidx={idx}
                      radioChecked={item.position === "bottom" ? item.position : null} 
                    />
                  </RadioList>
                </CommonItemContent>
              </CommonItemWrapper>
            </div>
          ))}
        </CommonOptionContent>
      </CommonOptionWrapper>
      {
        ReactDOM.createPortal(      
        <BasicModalNoticeTAdd 
          openvar={openAdd} 
          onClose={handleCloseAdd} 
          addTitle={addTabTitle} 
          addFunction={noticeAddHandler} 
        />, document.body)
      }
      {
        ReactDOM.createPortal(      
        <BasicModalNoticeTDelete 
          openvar={openDel}
          onClose={handleCloseDel} 
          onClick={() => noticeRemoveHandler(selectNoticeT)} 
        />, document.body)
      }
      {
        ReactDOM.createPortal(<Toast type="warn" open={openToast} setOpen={setOpenToast} message="최소 한 개입니다." />, document.body)
      }
    </>
  )
}

export default NoticeSettingT;