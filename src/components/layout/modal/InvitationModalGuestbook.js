/* Import */
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
/* Component */
import InvitationModal from './InvitationModal';
/* CSS Module */
import styles from "../../../css/module/layout/modal/InvitationModalGuestbook.module.scss";
/* Image */
import iconModalHeader from "../../../img/icon/icon_reg_modal.png";
/* Context */
import { SetContext } from "../../../store/option-set-context.js";

const InvitationModalGuestbook = ({ openvar, onClose, clickidx }) => {
  const { guestbookList, setGuestbookList } = useContext(SetContext);
  const [ tempPassword, setTempPassword ] = useState("");
  const removeGuestbookHandler = (removeidx, password) => {
    if(guestbookList[removeidx].guestPassword === password) {
      setGuestbookList(prev => 
        prev.filter((_, idx) => removeidx !== idx)
      );
    } else {
      alert("비밀번호가 다릅니다.");
      setTempPassword("");
    }
  }
  return (
    <>
      <InvitationModal 
        openvar={openvar} 
        onClose={onClose} 
        onClick={() => removeGuestbookHandler(clickidx, tempPassword)}
        ButtonWrapperUse={true}
        headSrc={iconModalHeader}
        headContent="메시지 삭제"
        btnContent="삭제하기"
      >
        <div className={styles.input__wrap}>
          <div className={`${styles.input__item} ${styles.title__top}`}>
            <div className={styles.input__data}>
              <div className={styles.data__wrap}>
                <p>등록한 메시지 삭제 시<br />
                비밀번호를 입력해 주세요.</p>
                <input type="password" name="delPassword" onChange={(e) => setTempPassword(e.target.value)} placeholder="비밀번호" />
              </div>
            </div>
          </div>
        </div>
      </InvitationModal>
    </>
  );
}

export default InvitationModalGuestbook;