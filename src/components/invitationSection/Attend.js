/* Import */
import { useState, useEffect, useRef, useContext } from "react";
/* Component */
import NoticeTItem from "./NoticeTItem.js";
import HeadLine from "../layout/HeadLine.js";
import InvitationModalAttend from "../layout/modal/InvitationModalAttend.js";
import ButtonWrapper from "../layout/ButtonWrapper.js";
import Button from "../layout/Button.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Attend.module.scss";
/* Image */
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const Attend = ({ containerRef }) => {
  const { attendList, setAttendList, selectOptionList } = useContext(SetContext);
  const attendRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  // useEffect(() => {
  //   if(selectOptionList.optionAttendPopup === "optionAttendPopupOpen" && (window.location.href.includes("preview"))) {
  //     setOpen(true);
  //   }
  // }, [])
  // useEffect(() => {
  //   const rect = attendRef.current.getBoundingClientRect();
  //   containerRef.current.addEventListener("scroll", () => {
  //     console.log(attendRef.current.offsetHeight);
  //     console.log(rect.top);
  //     if(containerRef.current.scrollTop >= rect.top) {
  //       console.log(attendRef.current);
  //     }
  //     console.log("rect.top" + rect.top);
  //     console.log("window.scrollY" + window.scrollY);
  //     console.log(window.innerHeight);
  //     console.log(window.scrollY);
  //   })
  //   console.log(containerRef.current);
  // }, []);
  return (
    <div id="Attend" className={`${styles.attend}`} ref={attendRef}>
      <div className={styles.attend__wrap}>
        <HeadLine title={attendList.attendTitle ? attendList.attendTitle : "참석 의사 전달"} content="rsvp" />
        <div className={styles.attend__content}>
          <p>
            {
              attendList.attendContent ? attendList.attendContent : "한 분 한 분 정성껏 모실 수 있도록\n참석 의사 전달 부탁 드립니다."
            }
          </p>
          <ButtonWrapper styleType="center">
            <Button content={attendList.attendButtonTitle ? attendList.attendButtonTitle : "참석 의사 전달하기"} styleType="invitation__attend" onClick={handleOpen}></Button>
          </ButtonWrapper>
        </div>
      </div>
      <InvitationModalAttend openvar={open} onClose={handleClose} />
    </div>
  )
}

export default Attend;