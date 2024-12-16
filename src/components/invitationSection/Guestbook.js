/* Import */
import { useState, useEffect, useContext } from "react";
import ReactDOM from 'react-dom';
/* Component */
import InvitationModalGuestbook from "../layout/modal/InvitationModalGuestbook.js";
import HeadLine from "../layout/HeadLine.js";
import ButtonWrapper from "../layout/ButtonWrapper.js";
import Button from "../layout/Button.js";
import Toast from "../layout/Toast.js";
import TextareaWapperCount from "../common/TextareaWapperCount.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Guestbook.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
import { RefContext } from "../../store/option-ref-context.js";

const Guestbook = () => {
  const { guestbookList, setGuestbookList } = useContext(SetContext);
  const { guestbookRef } = useContext(RefContext);

  const [tempBookList, setTempBookList] = useState({ guestName: "", guestPassword: "", guestMessage: "" });
  const [open, setOpen] = useState(false);
  const [clickidx, setClickidx] = useState(0);
  const [guestMoreCount, setGuestMoreCount] = useState(2);
  const handleOpen = (idx) => {
    setOpen(true);
    setClickidx(idx);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const tempGuestbookHandler = (e) => {
    const { name, value } = e.target;
    setTempBookList(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const regGuestbookHandler = () => {
    if (!tempBookList.guestName || !tempBookList.guestMessage) {
      alert("이름과 메시지를 입력해주세요.");
      return;
    }
    setGuestbookList(prev => [
      {
        ...tempBookList,
        guestDate: new Date().toLocaleDateString()
      },
      ...prev,
    ]);
    setTempBookList({ guestName: "", guestPassword: "", guestMessage: "" });
    handleClick();
  }
  const [toastOpen, setToastOpen] = useState(false);
  const handleClick = () => {
    setToastOpen(true);
  };
  useEffect(() => {
  }, [guestbookList.length])
  return (
    <div ref={guestbookRef} id="Guestbook" className={`${styles.guestbook}`}>
      {
        ReactDOM.createPortal(<Toast type="reg" open={toastOpen} setOpen={setToastOpen} message="등록되었습니다." />, document.body)
      }
      <div className={styles.guestbook__wrap}>
        <HeadLine title="방명록" content="message" />
        <div className={styles.guestbook__content}>
          <div className={styles.input__wrap}>
            <input type="text" name="guestName" value={tempBookList.guestName} onChange={tempGuestbookHandler} placeholder="이름" maxLength={7} />
            <input type="password" name="guestPassword" value={tempBookList.guestPassword} onChange={tempGuestbookHandler} placeholder="비밀번호" maxLength={10} />
            <TextareaWapperCount name="guestMessage" id="" value={tempBookList.guestMessage} onChange={tempGuestbookHandler} placeholder="축하메시지(100자 이내)" maxLength={100} />
          </div>
          <ButtonWrapper styleType="center">
            <Button content="등록하기" styleType="invitation__reg" onClick={regGuestbookHandler} />
          </ButtonWrapper>
          {
            <div className={styles.guest}>
              <ul className={styles.guest__list}>
                {
                  guestbookList.filter((_, count) => count < guestMoreCount)
                  .map((item, idx) => (
                  <li key={item.guestName + idx} className={styles.guest__item}>
                    <p className={styles.name}>{item.guestName}</p>
                    <p className={styles.content}>
                      {item.guestMessage}
                    </p>
                    <div className={styles.tool}>
                      <p>{item.guestDate}</p>
                      <Button styleType="invitation__guest_remove" onClick={() => handleOpen(idx)} />
                    </div>
                  </li>
                  ))
                }
              </ul>
              {
                guestbookList.length > guestMoreCount - 1 && guestMoreCount !== guestbookList.length ?
                <ButtonWrapper styleType="center">
                  <Button content="더보기" onClick={() => setGuestMoreCount(guestbookList.length)} styleType="invitation__gallery_view" />
                </ButtonWrapper>
                : null
              }
              
            </div>
          }
        </div>
      </div>
      {
        ReactDOM.createPortal(      
        <InvitationModalGuestbook 
          openvar={open} 
          clickidx={clickidx} 
          onClose={handleClose} 
        />, document.body)
      }
    </div>
  )
}

export default Guestbook;