/* Import */
import * as React from 'react';
import { Link } from "react-router-dom";
/* Component */
import InvitationModal from './InvitationModal';
/* CSS Module */
import styles from "../../../css/module/layout/modal/InvitationModalLocation.module.scss";
/* Image */
import iconModalHeader from "../../../img/icon/icon_map_modal.png";

const InvitationModalLocation = ({ openvar, onClose }) => {
  return (
    <>
      <InvitationModal 
        openvar={openvar} 
        onClose={onClose}
        ButtonWrapperUse={false}
        headSrc={iconModalHeader}
        headContent="오시는 길"
      >
        <div className={styles.input__wrap}>
          <div className={`${styles.input__item} ${styles.title__top}`}>
            <div className={styles.input__data}>
              <div className={styles.data__wrap}>
                <div className={styles.img__wrap}>
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </InvitationModal>
    </>
  );
}

export default InvitationModalLocation;