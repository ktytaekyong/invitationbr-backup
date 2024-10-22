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
import { SetContext } from "../../store/option-set-context.js";

const Intro = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  const { letterList, setLetterList } = useContext(SetContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={`${styles.letter} ${styles.style_theme_1}`}>
      <div className={styles.letter__wrap}>
        <HeadLine title={letterList.title} content="invitation"></HeadLine>
        <div className={styles.letter__content}>
          <div className={styles.greet}>
            <p>
              {letterList.content}
            </p>
          </div>
          <div className={styles.detail}>
            <p>
              {basicInfoList.groomParentInfo.dadDeceased ? "故" : null}{basicInfoList.groomParentInfo.dadName} · {basicInfoList.groomParentInfo.momDeceased ? "故" : null}{basicInfoList.groomParentInfo.momName}
              <span>의 {basicInfoList.groomInfo.relation}</span>
              {basicInfoList.groomInfo.firstname}
            </p>
            <p>
              {basicInfoList.brideParentInfo.dadDeceased ? "故" : null}{basicInfoList.brideParentInfo.dadName} · {basicInfoList.brideParentInfo.momDeceased ? "故" : null}{basicInfoList.brideParentInfo.momName}
              <span>의 {basicInfoList.brideInfo.relation}</span>
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