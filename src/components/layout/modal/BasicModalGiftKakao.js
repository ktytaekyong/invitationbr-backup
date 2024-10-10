/* Import */
import { useEffect, useState } from "react";
/* Component */
import BasicSelectModal from './BasicSelectModal';
import BasicModalContent from './BasicModalContent';
/* CSS Module */
import styles from "../../../css/module/layout/modal/BasicModalGiftKakao.module.scss";
/* Image */
import giftKakao1 from "../../../img/gift/gift_kakao_1.png";
import giftKakao2 from "../../../img/gift/gift_kakao_2.png";

const BasicModalGiftKakao = ({ openvar, onClose }) => {
  return (
    <BasicSelectModal 
      openvar={openvar} 
      className={styles.modal__kakao}
      onClose={onClose} 
      title="카톡 송금링크 복사 방법"
    >
      <ul className={styles.modal__gift_list}>
        <li className={styles.modal__gift_item}>
          <span>①</span>
          <div className={styles.modalc}>
            <p>카카오톡 내 프로필 화면으로 이동 후<br />
            상단 우측의 송금코드 버튼을 클릭합니다.</p>
            <img src={giftKakao1} alt="" />
          </div>
        </li>
        <li className={styles.modal__gift_item}>
          <span>②</span>
          <div className={styles.modal__wrapper}>
            <p>송금코드 화면 내 코드링크 아이콘을 터치 해<br />
            링크를 복사를 해줍니다.</p>
            <img src={giftKakao2} alt="" />
          </div>
        </li>
      </ul>
    </BasicSelectModal>
  );
}

export default BasicModalGiftKakao;