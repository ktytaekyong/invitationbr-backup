/* Import */
import { useState, useEffect, useContext } from "react";
import ReactDOM from 'react-dom';
/* Component */
import InvitationModal from './InvitationModal';
/* CSS Module */
import styles from "../../../css/module/layout/modal/InvitationModalAttend.module.scss";
/* Image */
import iconModalHeader from "../../../img/icon/icon_attend_modal.png";
/* Context */
import { SetContext } from "../../../store/option-set-context.js";

const InvitationModalAttend = ({ openvar, onClose }) => {
  const { attendList } = useContext(SetContext);
  const [ guestType, setGuestType ] = useState("attendTypeGroom");
  const [ attendWhether, setAttendWhether ] = useState("attendWhetherYes");
  const [ attendName, setAttendName ] = useState("");
  const [ attendCount, setAttendCount ] = useState(0);
  const [ attendMeal, setAttendMeal ] = useState("attendMealYes");
  const [ attendBus, setAttendBus ] = useState("attendBusYes");
  const attendCheckHandler = () => {
    let guest = {
      guestType: guestType,
      attendWhether: attendWhether,
    };
    if(attendList.optionAttendName) {
      guest.attendName = attendName;
    }
    if(attendList.optionAttendCount) {
      guest.attendCount = attendCount;
    }
    if(attendList.optionAttendMeal) {
      guest.attendMeal = attendMeal;
    }
    if(attendList.optionAttendBus) {
      guest.attendBus = attendBus;
    }
    // setAttendGuestList(guest)
  }
  const renderBusNotice = () => {
    if(attendBus === "attendBusYes" && guestType === "attendTypeGroom") {
      return attendList.attendBusNoticeM;
    } else if(attendBus === "attendBusNo" && guestType === "attendTypeGroom") {
      return attendList.attendNoBusNoticeM;
    } else if(attendBus === "attendBusYes" && guestType === "attendTypeBride") {
      return attendList.attendBusNoticeF;
    } else if(attendBus === "attendBusNo" && guestType === "attendTypeBride") {
      return attendList.attendNoBusNoticeF;
    }
  }
  const handleAttendCountChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "" || (Number(inputValue) >= 0 && Number(inputValue) <= 99)) {
      setAttendCount(inputValue);
    } else {
      setAttendCount(99);
    }
  };
  useEffect(() => {
    if(attendList.optionAttendName === false) {
      setAttendName("");
    }
    if(attendList.optionAttendCount === false) {
      setAttendCount("");
    }
  }, [attendList.optionAttendName, attendList.optionAttendCount])
  useEffect(() => {
    if(openvar === false) {
      setGuestType("attendTypeGroom");
      setAttendWhether("attendWhetherYes");
      setAttendName("");
      setAttendCount("");
      setAttendMeal("attendMealYes");
      setAttendBus("attendBusYes");
    }
  }, [openvar])
  return (
    <>
      {
        ReactDOM.createPortal(
          <InvitationModal 
          openvar={openvar} 
          onClick={attendCheckHandler}
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
                    <input type="radio" name="attendType" id="attendTypeGroom" checked={guestType === "attendTypeGroom"} onChange={() => setGuestType("attendTypeGroom")} />
                    <label htmlFor="attendTypeGroom">신랑측</label>
                  </div>
                  <div className={styles.data__item}>
                    <input type="radio" name="attendType" id="attendTypeBride" checked={guestType === "attendTypeBride"} onChange={() => setGuestType("attendTypeBride")} />
                    <label htmlFor="attendTypeBride">신부측</label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.input__item}>
              <p className={styles.input__title}>참석여부</p>
              <div className={styles.input__data}>
                <div className={styles.data__wrap}>
                  <div className={styles.data__item}>
                    <input type="radio" name="attendWhether" id="attendWhetherYes" checked={attendWhether === "attendWhetherYes"} onChange={() => setAttendWhether("attendWhetherYes")} />
                    <label htmlFor="attendWhetherYes">가능</label>
                  </div>
                  <div className={styles.data__item}>
                    <input type="radio" name="attendWhether" id="attendWhetherNo" checked={attendWhether === "attendWhetherNo"} onChange={() => setAttendWhether("attendWhetherNo")} />
                    <label htmlFor="attendWhetherNo">불가</label>
                  </div>
                </div>
              </div>
            </div>
            {
              attendList.optionAttendName ? 
              <div className={styles.input__item}>
                <p className={styles.input__title}>성함</p>
                <div className={styles.input__data}>
                  <div className={styles.data__wrap}>
                    <input type="text" id="attendName" onChange={(e) => {setAttendName(e.target.value)}} placeholder="작성자 성함 입력" maxLength={7} />
                  </div>
                </div>
              </div> : null
            }
            {
              attendList.optionAttendCount ? 
              <div className={styles.input__item}>
                <p className={styles.input__title}>참석인원</p>
                <div className={styles.input__data}>
                  <div className={styles.data__wrap}>
                    <input type="number" id="attendCount" value={attendCount} onChange={handleAttendCountChange} placeholder="본인 외 참석 인원" />
                  </div>
                </div>
              </div> : null
            }
            {
              attendList.optionAttendMeal ?
              <>
                <div className={styles.input__item}>
                  <p className={styles.input__title}>식사여부</p>
                  <div className={styles.input__data}>
                    <div className={styles.data__wrap}>
                      <div className={styles.data__item}>
                        <input type="radio" name="attendMeal" id="attendMealYes" checked={attendMeal === "attendMealYes"} onChange={() => {setAttendMeal("attendMealYes")}} />
                        <label htmlFor="attendMealYes">식사함</label>
                      </div>
                      <div className={styles.data__item}>
                        <input type="radio" name="attendMeal" id="attendMealNo" checked={attendMeal === "attendMealNo"} onChange={() => {setAttendMeal("attendMealNo")}} />
                        <label htmlFor="attendMealNo">식사안함</label>
                      </div>
                    </div>
                  </div>
                </div>
              {
                attendList.attendMealNotice || attendList.attendNoMealNotice ? 
                  <div className={styles.input__item}>
                    <p className={styles.input__title}></p>
                      <div className={styles.input__data}>
                        <p className={styles.notice}>
                          {attendMeal === "attendMealYes" ? attendList.attendMealNotice : attendList.attendNoMealNotice}
                        </p>
                      </div>
                  </div>
                : null
              }
              </> : null
            }
            {
              attendList.optionAttendBus ?
              <>
                <div className={styles.input__item}>
                  <p className={styles.input__title}>버스 탑승 여부</p>
                  <div className={styles.input__data}>
                    <div className={styles.data__wrap}>
                      <div className={styles.data__item}>
                        <input type="radio" name="attendBus" id="attendBusYes" checked={attendBus === "attendBusYes"} onChange={() => {setAttendBus("attendBusYes")}}/>
                        <label htmlFor="attendBusYes">탑승함</label>
                      </div>
                      <div className={styles.data__item}>
                        <input type="radio" name="attendBus" id="attendBusNo" checked={attendBus === "attendBusNo"} onChange={() => {setAttendBus("attendBusNo")}}/>
                        <label htmlFor="attendBusNo">탑승안함</label>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className={styles.input__item}>
                  <p className={styles.input__title}></p>
                  <div className={styles.input__data}>
                    <p className={styles.notice}>
                      {
                        renderBusNotice()
                      }
                    </p>
                  </div>
                </div>
              </> : null
            }
  
            {/* <div className={`${styles.input__item} ${styles.title__top}`}>
              <p className={styles.input__title}>메시지 전달</p>
              <div className={styles.input__data}>
                <div className={styles.data__wrap}>
                  <textarea name="" id="" placeholder="신랑님에게 메시지를 남겨보세요."></textarea>
                  <p>0/50</p>
                </div>
              </div>
            </div> */}
          </div>
        </InvitationModal>
        , document.body)
      }

    </>
  );
}

export default InvitationModalAttend;