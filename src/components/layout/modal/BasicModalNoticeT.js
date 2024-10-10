/* Import */
import * as React from 'react';
import { Link } from "react-router-dom";
/* Component */
import BasicModal from './BasicModal';
/* CSS Module */
// import styles from "../../../css/module/layout/modal/BasicModalHeader.module.scss";

const BasicModalNoticeT = ({ openvar, onClose }) => {
  return (
    <>
      <BasicModal 
        openvar={openvar} 
        className=""
        onClose={onClose} 
        notice={true} 
        noticeContent="탭 추가"
        ButtonWrapperUse={true}
        btnContent1="취소"
        btnContent2="탭 추가"
      >
        <input type="text" placeholder="사용할 탭의 이름을 입력해 주세요" />
      </BasicModal>
    </>
  );
}

export default BasicModalNoticeT;