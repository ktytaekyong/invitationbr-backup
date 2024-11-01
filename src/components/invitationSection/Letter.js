/* Import */
import { useState, useEffect, useContext, Component } from "react";
/* Component */
import InvitationModalLetter from "../layout/modal/InvitationModalLetter.js";
import ButtonWrapper from "../layout/ButtonWrapper.js";
import Button from "../layout/Button.js";
import HeadLine from "../layout/HeadLine.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Letter.module.scss";
/* Image */
import IconFlower  from "../../img/icon/icon_deceased_flower.png";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";
import { SetContext } from "../../store/option-set-context.js";

const Intro = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  const { letterList, setLetterList, selectOptionList } = useContext(SetContext);
  const [ deceasedIcon, setDeceasedIcon ] = useState("故");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    selectOptionList.deceasedFlower ? 
    setDeceasedIcon(<img src={IconFlower} />) 
    : setDeceasedIcon("故");
  }, [selectOptionList.deceasedFlower])
  return (
    <div id="Letter" className={`${styles.letter}`}>
      <div className={styles.letter__wrap}>
        <HeadLine title={letterList.title} content="invitation" />
        <div className={styles.letter__content}>
          <div className={styles.greet}>
            <p>
              {letterList.content}
            </p>
          </div>
          <div className={styles.detail}>
            <p>
              {basicInfoList.groomParentInfo.dadDeceased ? deceasedIcon : null}{basicInfoList.groomParentInfo.dadName} · {basicInfoList.groomParentInfo.momDeceased ? deceasedIcon : null}{basicInfoList.groomParentInfo.momName}
              <span>의 {basicInfoList.groomInfo.relation}</span>
              {basicInfoList.groomInfo.firstname}
            </p>
            <p>
              {basicInfoList.brideParentInfo.dadDeceased ? deceasedIcon : null}{basicInfoList.brideParentInfo.dadName} · {basicInfoList.brideParentInfo.momDeceased ? deceasedIcon : null}{basicInfoList.brideParentInfo.momName}
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