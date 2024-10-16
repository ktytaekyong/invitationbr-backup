/* Import */
import * as React from 'react';
import { Link } from "react-router-dom";
/* Component */
import InvitationModal from './InvitationModal';
/* CSS Module */
import styles from "../../../css/module/layout/modal/InvitationModalAttend.module.scss";
/* Image */
import iconModalHeader from "../../../img/icon/icon_attend_modal.png";

const InvitationModalAttend = ({ openvar, onClose }) => {
  return (
    <>
      <InvitationModal 
        openvar={openvar} 
        onClose={onClose} 
        ButtonWrapperUse={true}
        headSrc={iconModalHeader}
        headContent="참석 여부 전달하기"
        btnContent="참석 여부 전달하기"
      >
        <div className={styles.input__wrap}>
          <div className={styles.input__item}>
            <p className={styles.input__title}>구분</p>
            <div className={styles.input__data}>
              <div className={`${styles.data__wrap} ${styles.type}`}>
                <div className={styles.data__item}>
                  <input type="radio" name="AttendType" id="AttendTypeGroom" defaultChecked />
                  <label htmlFor="AttendTypeGroom">신랑측</label>
                </div>
                <div className={styles.data__item}>
                  <input type="radio" name="AttendType" id="AttendTypeBride" />
                  <label htmlFor="AttendTypeBride">신부측</label>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.input__item}>
            <p className={styles.input__title}>참석여부</p>
            <div className={styles.input__data}>
              <div className={styles.data__wrap}>
                <div className={styles.data__item}>
                  <input type="radio" name="AttendWhether" id="AttendWhetherYes" defaultChecked />
                  <label htmlFor="AttendWhetherYes">가능</label>
                </div>
                <div className={styles.data__item}>
                  <input type="radio" name="AttendWhether" id="AttendWhetherNo" />
                  <label htmlFor="AttendWhetherNo">불가</label>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.input__item}>
            <p className={styles.input__title}>성함</p>
            <div className={styles.input__data}>
              <div className={styles.data__wrap}>
                <input type="text" id="AttendName" placeholder="작성자 성함 입력" />
              </div>
            </div>
          </div>

          <div className={styles.input__item}>
            <p className={styles.input__title}>참석인원</p>
            <div className={styles.input__data}>
              <div className={styles.data__wrap}>
                <input type="text" id="AttendName" placeholder="본인 외 참석 인원" />
              </div>
            </div>
          </div>

          <div className={styles.input__item}>
            <p className={styles.input__title}>식사여부</p>
            <div className={styles.input__data}>
              <div className={styles.data__wrap}>
                <div className={styles.data__item}>
                  <input type="radio" name="AttendMeal" id="AttendMealYes" defaultChecked />
                  <label htmlFor="AttendMealYes">식사함</label>
                </div>
                <div className={styles.data__item}>
                  <input type="radio" name="AttendMeal" id="AttendMealNo" />
                  <label htmlFor="AttendMealNo">식사안함</label>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.input__item}>
            <p className={styles.input__title}></p>
            <div className={styles.input__data}>
              <p className={styles.notice}>스테이크와 한정식이 준비되어 있습니다.</p>
            </div>
          </div>

          <div className={styles.input__item}>
            <p className={styles.input__title}>버스 탑승 여부</p>
            <div className={styles.input__data}>
              <div className={styles.data__wrap}>
                <div className={styles.data__item}>
                  <input type="radio" name="AttendBus" id="AttendBusYes" defaultChecked />
                  <label htmlFor="AttendBusYes">탑승함</label>
                </div>
                <div className={styles.data__item}>
                  <input type="radio" name="AttendBus" id="AttendBusNo" />
                  <label htmlFor="AttendBusNo">탑승안함</label>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.input__item}>
            <p className={styles.input__title}></p>
            <div className={styles.input__data}>
              <p className={styles.notice}>2024년 10월 5일 토요일 오전 11시 강남역 1번 출구 맥도날드 앞</p>
            </div>
          </div>

          <div className={`${styles.input__item} ${styles.title__top}`}>
            <p className={styles.input__title}>메시지 전달</p>
            <div className={styles.input__data}>
              <div className={styles.data__wrap}>
                <textarea name="" id="" placeholder="신랑님에게 메시지를 남겨보세요."></textarea>
                <p>0/50</p>
              </div>
            </div>
          </div>
        </div>
      </InvitationModal>
    </>
  );
}

export default InvitationModalAttend;