/* Import */
import * as React from 'react';
import { Link } from "react-router-dom";
/* Component */
import InvitationModal from './InvitationModal';
/* CSS Module */
import styles from "../../../css/module/layout/modal/InvitationModalGuestbook.module.scss";
/* Image */
import iconModalHeader from "../../../img/icon/icon_reg_modal.png";

const InvitationModalGuestbook = ({ openvar, onClose }) => {
  return (
    <>
      <InvitationModal 
        openvar={openvar} 
        onClose={onClose} 
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
                <input type="password" placeholder="비밀번호" />
              </div>
            </div>
          </div>
        </div>
      </InvitationModal>
    </>
  );
}

export default InvitationModalGuestbook;