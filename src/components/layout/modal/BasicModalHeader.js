/* Import */
import * as React from 'react';
import { Link } from "react-router-dom";
/* Component */
import BasicModal from './BasicModal';
/* CSS Module */
import styles from "../../../css/module/layout/modal/BasicModalHeader.module.scss";

export default function BasicModalHeader({ openvar, onClose }) {
  return (
    <>
      <BasicModal 
        openvar={openvar} 
        className={styles.modal__header} 
        onClose={onClose} 
        notice={true} 
        noticeContent="저장 완료 되었습니다." 
        ButtonWrapperUse={true}
        btnContent1="닫기"
        btnContent2="청첩장 보기"
      >
        <p>저장한 내용은 <Link to="/">제작 관리</Link>에서<br />확인할 수 있습니다.</p>
      </BasicModal>
    </>
  );
}