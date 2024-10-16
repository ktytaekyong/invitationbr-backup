/* Import */
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
/* Component */
import InvitationModal from './InvitationModal';
/* CSS Module */
import styles from "../../../css/module/layout/modal/InvitationModalLetter.module.scss";
/* Image */
import iconModalHeader from "../../../img/icon/icon_call_modal.png";
import iconCallGroom from "../../../img/icon/icon_call_groom.png";
import iconMsgGroom from "../../../img/icon/icon_msg_groom.png";
import iconCallBride from "../../../img/icon/icon_call_bride.png";
import iconMsgBride from "../../../img/icon/icon_msg_bride.png";
/* Context */
import { InfoContext } from "../../../store/option-info-context.js";

const InvitationModalLetter = ({ openvar, onClose }) => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  return (
    <>
      <InvitationModal 
        openvar={openvar} 
        onClose={onClose} 
        ButtonWrapperUse={false}
        headSrc={iconModalHeader}
        headContent="연락하기"
      >
        <div className={styles.input__wrap}>
          <div className={`${styles.input__item} ${styles.groom}`}>
            <p className={styles.input__title}>신 랑</p>
            <div className={styles.input__data}>
              <div className={`${styles.data__wrap}`}>
                <div className={styles.data__item}>
                  <p>{basicInfoList.groomInfo.lastname + basicInfoList.groomInfo.firstname}</p>
                  <div className={styles.contact}>
                    <Link to="/">
                      <img src={iconCallGroom} alt="" />
                    </Link>
                    <Link to="/">
                      <img src={iconMsgGroom} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.input__item} ${styles.groom}`}>
            <p className={styles.input__title}>신랑 아버지</p>
            <div className={styles.input__data}>
              <div className={`${styles.data__wrap}`}>
                <div className={styles.data__item}>
                  <p>이길현</p>
                  <div className={styles.contact}>
                    <Link to="/">
                      <img src={iconCallGroom} alt="" />
                    </Link>
                    <Link to="/">
                      <img src={iconMsgGroom} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.input__item} ${styles.groom}`}>
            <p className={styles.input__title}>신랑 어머니</p>
            <div className={styles.input__data}>
              <div className={`${styles.data__wrap}`}>
                <div className={styles.data__item}>
                  <p>김윤희</p>
                  <div className={styles.contact}>
                    <Link to="/">
                      <img src={iconCallGroom} alt="" />
                    </Link>
                    <Link to="/">
                      <img src={iconMsgGroom} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.input__wrap}>
          <div className={`${styles.input__item} ${styles.bride}`}>
            <p className={styles.input__title}>신 부</p>
            <div className={styles.input__data}>
              <div className={`${styles.data__wrap}`}>
                <div className={styles.data__item}>
                  <p>{basicInfoList.groomInfo.lastname + basicInfoList.groomInfo.firstname}</p>
                  <div className={styles.contact}>
                    <Link to="/">
                      <img src={iconCallBride} alt="" />
                    </Link>
                    <Link to="/">
                      <img src={iconMsgBride} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.input__item} ${styles.bride}`}>
            <p className={styles.input__title}>신부 아버지</p>
            <div className={styles.input__data}>
              <div className={`${styles.data__wrap}`}>
                <div className={styles.data__item}>
                  <p>김영수</p>
                  <div className={styles.contact}>
                    <Link to="/">
                      <img src={iconCallBride} alt="" />
                    </Link>
                    <Link to="/">
                      <img src={iconMsgBride} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.input__item} ${styles.bride}`}>
            <p className={styles.input__title}>신부 어머니</p>
            <div className={styles.input__data}>
              <div className={`${styles.data__wrap}`}>
                <div className={styles.data__item}>
                  <p>이영은</p>
                  <div className={styles.contact}>
                    <Link to="/">
                      <img src={iconCallBride} alt="" />
                    </Link>
                    <Link to="/">
                      <img src={iconMsgBride} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InvitationModal>
    </>
  );
}

export default InvitationModalLetter;