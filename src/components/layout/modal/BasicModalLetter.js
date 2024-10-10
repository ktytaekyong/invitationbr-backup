/* Import */
import * as React from 'react';
import { Link } from "react-router-dom";
/* Component */
import BasicModal from './BasicModal';
/* CSS Module */
import styles from "../../../css/module/layout/modal/BasicModalLetter.module.scss";

export default function BasicModalLetter({ openvar, onClose }) {
  return (
    <>
      <BasicModal 
        openvar={openvar} 
        className={styles.modal__letter} 
        onClose={onClose} 
        ButtonWrapperUse={false}
        HeaderUse={true}
        title="샘플문구 선택"
      >
      </BasicModal>
    </>
  );
}
