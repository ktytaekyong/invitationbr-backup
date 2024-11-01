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
  const tempParentHandler = () => {
    return (
      <>
        <p>
          {basicInfoList.groomParentInfo.dadDeceased ? deceasedIcon : null}{basicInfoList.groomParentInfo.dadName ? basicInfoList.groomParentInfo.dadName : "이길현"} · {basicInfoList.groomParentInfo.momDeceased ? deceasedIcon : null}{basicInfoList.groomParentInfo.momName ? basicInfoList.groomParentInfo.momName : "김윤희"}
          <span>의 {basicInfoList.groomInfo.relation}</span>
          {basicInfoList.groomInfo.firstname ? basicInfoList.groomInfo.firstname : "보람"}
        </p>
        <p>
          {basicInfoList.brideParentInfo.dadDeceased ? deceasedIcon : null}{basicInfoList.brideParentInfo.dadName ? basicInfoList.brideParentInfo.dadName : "김영수"} · {basicInfoList.brideParentInfo.momDeceased ? deceasedIcon : null}{basicInfoList.brideParentInfo.momName ? basicInfoList.brideParentInfo.momName : "이영은"}
          <span>의 {basicInfoList.brideInfo.relation}</span>
          {basicInfoList.brideInfo.firstname ? basicInfoList.brideInfo.firstname : "신우"}
        </p>
      </>
    )
  }
  useEffect(() => {
    selectOptionList.deceasedFlower ? 
    setDeceasedIcon(<img src={IconFlower} />) 
    : setDeceasedIcon("故");
  }, [selectOptionList.deceasedFlower])
  useEffect(() => {
    
  }, [])
  return (
    <div id="Letter" className={`${styles.letter}`}>
      <div className={styles.letter__wrap}>
        <HeadLine title={letterList.title ? letterList.title : "초대합니다"} content="invitation" />
        <div className={styles.letter__content}>
          <div className={styles.greet}>
            <p>
              {
                letterList.content ? 
                letterList.content 
                : "두 사람이 사랑으로 만나\n진실과 이해로써 하나를 이루려고 합니다.\n\n이 두 사람을 진심으로 아끼고 돌봐주신\n여러 어른과 친지분들을 모시고 서약을 맺고자 하오니\n오셔서 축복해 주시면 감사하겠습니다." 
              }
            </p>
          </div>
          <div className={styles.detail}>
            {
              tempParentHandler()
            }
            <p>
              {basicInfoList.groomParentInfo.dadDeceased ? deceasedIcon : null}{basicInfoList.groomParentInfo.dadName ? basicInfoList.groomParentInfo.dadName : "이길현"}{basicInfoList.groomParentInfo.dadName && basicInfoList.groomParentInfo.dadName ? " · " : ""}{basicInfoList.groomParentInfo.momDeceased ? deceasedIcon : null}{basicInfoList.groomParentInfo.momName ? basicInfoList.groomParentInfo.momName : "김윤희"}
              <span>의 {basicInfoList.groomInfo.relation}</span>
              {basicInfoList.groomInfo.firstname ? basicInfoList.groomInfo.firstname : "보람"}
            </p>
            <p>
              {basicInfoList.brideParentInfo.dadDeceased ? deceasedIcon : null}{basicInfoList.brideParentInfo.dadName ? basicInfoList.brideParentInfo.dadName : "김영수"}{basicInfoList.brideParentInfo.dadName && basicInfoList.brideParentInfo.dadName ? " · " : ""}{basicInfoList.brideParentInfo.momDeceased ? deceasedIcon : null}{basicInfoList.brideParentInfo.momName ? basicInfoList.brideParentInfo.momName : "이영은"}
              <span>의 {basicInfoList.brideInfo.relation}</span>
              {basicInfoList.brideInfo.firstname ? basicInfoList.brideInfo.firstname : "신우"}
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