/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import InvitationModalLetter from "../layout/modal/InvitationModalLetter.js";
import ButtonWrapper from "../layout/ButtonWrapper.js";
import Button from "../layout/Button.js";
import HeadLine from "../layout/HeadLine.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Letter.module.scss";
/* Image */
// import introRing from "../../img/intro/intro_theme_1_ring.png";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const Intro = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={`${styles.letter} ${styles.style_theme_1}`}>
      <div className={styles.letter__wrap}>
        <HeadLine title="초대합니다" content="invitation"></HeadLine>
        <div className={styles.letter__content}>
          <div className={styles.greet}>
            <p>
              두 사람이 사랑으로 만나<br />
              진실과 이해로써 하나를 이루려고 합니다.
            </p>
            <p>
              이 두 사람을 진심으로 아끼고 돌봐주신<br />
              여러 어른과 친지분들을 모시고 서약을 맺고자 하오니<br />
              오셔서 축복해 주시면 감사하겠습니다.
            </p>
          </div>
          <div className={styles.detail}>
            <p>
              {/* {故 ? 故 : null} */}이길현 · {/* {故 ? 故 : null} */}김윤희
              <span>의 차남</span>
              {basicInfoList.groomInfo.firstname}
            </p>
            <p>
              {/* {故 ? 故 : null} */}김영수 · {/* {故 ? 故 : null} */}이영은
              <span>의 장녀</span>
              {basicInfoList.brideInfo.firstname}
            </p>
          </div>
          <ButtonWrapper styleType="center">
            <Button content="연락하기" styleType="invitation__call" onClick={handleOpen}></Button>
          </ButtonWrapper>
        </div>
      </div>
      <InvitationModalLetter openvar={open} onClose={handleClose}></InvitationModalLetter>
    </div>
  )
}

export default Intro;