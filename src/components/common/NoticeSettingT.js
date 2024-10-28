/* Import */
import { useState, useEffect, useContext } from "react";
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
import BasicModalHeader from "../layout/modal/BasicModalHeader.js";
import BasicModalNoticeTAdd from "../layout/modal/BasicModalNoticeTAdd.js";
import BasicModalNoticeTDelete from "../layout/modal/BasicModalNoticeTDelete.js";
/* CSS Module */
import styles from "../../css/module/common/NoticeSettingT.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const NoticeSettingT = () => {
  const { noticeTList, setNoticeTList } = useContext(SetContext);
  const { selectNoticeT, setSelectNoticeT } = useContext(SetContext);
  
  const [addTitle, setAddTitle] = useState("");
  const [openAdd, setOpenAdd] = useState(false);
  const [openDel, setOpenDel] = useState(false);
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
          console.log(newList);
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
          position: ""
        }
      ]
    ))
  }
  const noticeRemoveHandler = (removeidx) => {
    if(noticeTList.length === 1) {
      setNoticeTList((prev) => {
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
      newList[index].src = "";  
      return newList;
    });
  }
  return (
    <>
      <CommonOptionWrapper>
        <CommonOptionContent>
          <CommonItemWrapper>
            <CommonItemContent title="탭 순서" multi="check">
              <TabSelector 
                listName={noticeTList} 
                name="title"
                onChange={setSelectNoticeT} 
                onClick={handleOpenDel} 
                selectNoticeT={selectNoticeT}
              />
              <ButtonWrapper>
                <Button content="탭 추가" styleType="add" onClick={handleOpenAdd} />
              </ButtonWrapper>
            </CommonItemContent>
          </CommonItemWrapper>
          {noticeTList.map((item, idx) => (
            <div key={`noticeTList${idx}`} id={item.id} className={`${styles.tab__item} ${selectNoticeT === idx ? styles["active"] : ""}`}>
              <CommonItemWrapper>
                <CommonItemContent title="제목">
                  <input 
                    type="text" 
                    id={`${item.id}Title`} 
                    name="title" 
                    value={item.title} 
                    onChange={(e)=>{noticeTabDataChangeHandler(e, idx)}} 
                    placeholder="탭 제목을 작성해 주세요." 
                  />
                </CommonItemContent>

                <CommonItemContent title="내용" multi={true}>
                  <TextEditor 
                    name="content" 
                    textValue={item.content} 
                    onChange={(e)=>{noticeTabDataChangeHandler(e, idx)}} 
                  />
                </CommonItemContent>

                <CommonItemContent title="사진" multi={true}>
                  <PhotoSelector 
                    id={`NoticeTPhotoList${idx}`} 
                    listName={[noticeTList[idx]]} 
                    onChange={(e) => fileAddHandler(e, idx)} 
                    deleteFunction={setNoticeTList} 
                    hasSrc={true} 
                    hasSrcFunction={() => photoDeleteHandler(idx)}
                  />
                  <RadioList title="사진 위치">
                    <RadioItem radioName={`noticePhotoPosition${idx}`} id={`noticePhotoIntro${idx}`} content="본문 위쪽" defaultChecked={true}></RadioItem>
                    <RadioItem radioName={`noticePhotoPosition${idx}`} id={`noticePhotoAll${idx}`} content="본문 아래쪽"></RadioItem>
                  </RadioList>
                </CommonItemContent>
              </CommonItemWrapper>
            </div>
          ))}
        </CommonOptionContent>
      </CommonOptionWrapper>

      <BasicModalNoticeTAdd openvar={openAdd} onClose={handleCloseAdd} addTitle={addTabTitle} addFunction={noticeAddHandler} />
      <BasicModalNoticeTDelete openvar={openDel} onClose={handleCloseDel} onClick={() => noticeRemoveHandler(selectNoticeT)} />
    </>
  )
}

export default NoticeSettingT;