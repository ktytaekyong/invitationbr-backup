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
  const { basicInfoList } = useContext(InfoContext);
  const [ isInitialRender, setIsInitialRender ] = useState(true);
  useEffect(() => {
    if (
      basicInfoList.groomParentInfo.dadName ||
      basicInfoList.groomParentInfo.momName ||
      basicInfoList.brideParentInfo.dadName ||
      basicInfoList.brideParentInfo.momName
    ) {
      setIsInitialRender(false);
    }
  }, [
    basicInfoList.groomParentInfo.dadName,
    basicInfoList.groomParentInfo.momName,
    basicInfoList.brideParentInfo.dadName,
    basicInfoList.brideParentInfo.momName,
  ]);
  const detailInitHandler = () => {
    return (
      <>
        <div className={styles.input__wrap}>
          <div className={`${styles.input__item} ${styles.groom}`}>
            <p className={styles.input__title}>신 랑</p>
            <div className={styles.input__data}>
              <div className={`${styles.data__wrap}`}>
                <div className={styles.data__item}>
                  <p>
                    {
                      basicInfoList.groomInfo.firstname ?
                      basicInfoList.groomInfo.lastname + basicInfoList.groomInfo.firstname
                      : "이보람"
                    }
                  </p>
                  <div className={styles.contact}>
                    <Link to={`tel:${basicInfoList.groomInfo.number}`}>
                      <img src={iconCallGroom} alt="" />
                    </Link>
                    <Link to={`sms:${basicInfoList.groomInfo.number}`}>
                      <img src={iconMsgGroom} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
            basicInfoList.groomParentInfo.dadDeceased ?
            null : 
            <div className={`${styles.input__item} ${styles.groom}`}>
              <p className={styles.input__title}>신랑 아버지</p>
              <div className={styles.input__data}>
                <div className={`${styles.data__wrap}`}>
                  <div className={styles.data__item}>
                    <p>이길현</p>
                    <div className={styles.contact}>
                      <Link to={`tel:${basicInfoList.groomParentInfo.dadNumber}`}>
                        <img src={iconCallGroom} alt="" />
                      </Link>
                      <Link to={`sms:${basicInfoList.groomParentInfo.dadNumber}`}>
                        <img src={iconMsgGroom} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
          
          {
            basicInfoList.groomParentInfo.momDeceased ?
            null :
            <div className={`${styles.input__item} ${styles.groom}`}>
              <p className={styles.input__title}>신랑 어머니</p>
              <div className={styles.input__data}>
                <div className={`${styles.data__wrap}`}>
                  <div className={styles.data__item}>
                    <p>김윤희</p>
                    <div className={styles.contact}>
                      <Link to={`tel:${basicInfoList.groomParentInfo.momNumber}`}>
                        <img src={iconCallGroom} alt="" />
                      </Link>
                      <Link to={`sms:${basicInfoList.groomParentInfo.momNumber}`}>
                        <img src={iconMsgGroom} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>

        <div className={styles.input__wrap}>
          <div className={`${styles.input__item} ${styles.bride}`}>
            <p className={styles.input__title}>신 부</p>
            <div className={styles.input__data}>
              <div className={`${styles.data__wrap}`}>
                <div className={styles.data__item}>
                  <p>
                    {
                      basicInfoList.brideInfo.firstname ?
                      basicInfoList.brideInfo.lastname + basicInfoList.brideInfo.firstname
                      : "김신우"
                    }
                  </p>
                  <div className={styles.contact}>
                    <Link to={`tel:${basicInfoList.brideInfo.number}`}>
                      <img src={iconCallBride} alt="" />
                    </Link>
                    <Link to={`sms:${basicInfoList.brideInfo.number}`}>
                      <img src={iconMsgBride} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {
            basicInfoList.brideParentInfo.dadDeceased ?
            null :
            <div className={`${styles.input__item} ${styles.bride}`}>
              <p className={styles.input__title}>신부 아버지</p>
              <div className={styles.input__data}>
                <div className={`${styles.data__wrap}`}>
                  <div className={styles.data__item}>
                    <p>김영수</p>
                    <div className={styles.contact}>
                      <Link to={`tel:${basicInfoList.brideParentInfo.dadNumber}`}>
                        <img src={iconCallBride} alt="" />
                      </Link>
                      <Link to={`sms:${basicInfoList.brideParentInfo.dadNumber}`}>
                        <img src={iconMsgBride} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }

          {
            basicInfoList.brideParentInfo.momDeceased ?
            null :
            <div className={`${styles.input__item} ${styles.bride}`}>
              <p className={styles.input__title}>신부 어머니</p>
              <div className={styles.input__data}>
                <div className={`${styles.data__wrap}`}>
                  <div className={styles.data__item}>
                    <p>이영은</p>
                    <div className={styles.contact}>
                      <Link to={`tel:${basicInfoList.brideParentInfo.momNumber}`}>
                        <img src={iconCallBride} alt="" />
                      </Link>
                      <Link to={`sms:${basicInfoList.brideParentInfo.momNumber}`}>
                        <img src={iconMsgBride} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </>
    )
  }
  return (
    <>
      <InvitationModal 
        openvar={openvar} 
        onClose={onClose} 
        ButtonWrapperUse={false}
        headSrc={iconModalHeader}
        headContent="연락하기"
      >
        {
          isInitialRender ?
          detailInitHandler() : 
          <>
            <div className={styles.input__wrap}>
              <div className={`${styles.input__item} ${styles.groom}`}>
                <p className={styles.input__title}>신 랑</p>
                <div className={styles.input__data}>
                  <div className={`${styles.data__wrap}`}>
                    <div className={styles.data__item}>
                      <p>
                        {
                          basicInfoList.groomInfo.firstname ?
                          basicInfoList.groomInfo.lastname + basicInfoList.groomInfo.firstname
                          : "이보람"
                        }
                      </p>
                      <div className={styles.contact}>
                        <Link to={`tel:${basicInfoList.groomInfo.number}`}>
                          <img src={iconCallGroom} alt="" />
                        </Link>
                        <Link to={`sms:${basicInfoList.groomInfo.number}`}>
                          <img src={iconMsgGroom} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              {basicInfoList.groomParentInfo.dadName && basicInfoList.groomParentInfo.dadDeceased === false ?
                <div className={`${styles.input__item} ${styles.groom}`}>
                  <p className={styles.input__title}>신랑 아버지</p>
                  <div className={styles.input__data}>
                    <div className={`${styles.data__wrap}`}>
                      <div className={styles.data__item}>
                        <p>{basicInfoList.groomParentInfo.dadName}</p>
                        <div className={styles.contact}>
                          <Link to={`tel:${basicInfoList.groomParentInfo.dadNumber}`}>
                            <img src={iconCallGroom} alt="" />
                          </Link>
                          <Link to={`sms:${basicInfoList.groomParentInfo.dadNumber}`}>
                            <img src={iconMsgGroom} alt="" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> : null
              }
    
            {basicInfoList.groomParentInfo.momName && basicInfoList.groomParentInfo.momDeceased === false ?
              <div className={`${styles.input__item} ${styles.groom}`}>
                <p className={styles.input__title}>신랑 어머니</p>
                <div className={styles.input__data}>
                  <div className={`${styles.data__wrap}`}>
                    <div className={styles.data__item}>
                      <p>{basicInfoList.groomParentInfo.momName}</p>
                      <div className={styles.contact}>
                        <Link to={`tel:${basicInfoList.groomParentInfo.momNumber}`}>
                          <img src={iconCallGroom} alt="" />
                        </Link>
                        <Link to={`sms:${basicInfoList.groomParentInfo.momNumber}`}>
                          <img src={iconMsgGroom} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div> : null
            }
            </div>
            <div className={styles.input__wrap}>
              <div className={`${styles.input__item} ${styles.bride}`}>
                <p className={styles.input__title}>신 부</p>
                <div className={styles.input__data}>
                  <div className={`${styles.data__wrap}`}>
                    <div className={styles.data__item}>
                      <p>
                        {
                          basicInfoList.brideInfo.firstname ?
                          basicInfoList.brideInfo.lastname + basicInfoList.brideInfo.firstname
                          : "김신우"
                        }
                      </p>
                      <div className={styles.contact}>
                        <Link to={`tel:${basicInfoList.brideInfo.number}`}>
                          <img src={iconCallBride} alt="" />
                        </Link>
                        <Link to={`sms:${basicInfoList.brideInfo.number}`}>
                          <img src={iconMsgBride} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              {basicInfoList.brideParentInfo.dadName && basicInfoList.brideParentInfo.dadDeceased === false ?
                <div className={`${styles.input__item} ${styles.bride}`}>
                  <p className={styles.input__title}>신부 아버지</p>
                  <div className={styles.input__data}>
                    <div className={`${styles.data__wrap}`}>
                      <div className={styles.data__item}>
                        <p>{basicInfoList.brideParentInfo.dadName}</p>
                        <div className={styles.contact}>
                          <Link to={`tel:${basicInfoList.brideParentInfo.dadNumber}`}>
                            <img src={iconCallBride} alt="" />
                          </Link>
                          <Link to={`sms:${basicInfoList.brideParentInfo.dadNumber}`}>
                            <img src={iconMsgBride} alt="" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> : null
              }
    
              {basicInfoList.brideParentInfo.momName && basicInfoList.brideParentInfo.momDeceased === false ?
                <div className={`${styles.input__item} ${styles.bride}`}>
                  <p className={styles.input__title}>신부 어머니</p>
                  <div className={styles.input__data}>
                    <div className={`${styles.data__wrap}`}>
                      <div className={styles.data__item}>
                        <p>{basicInfoList.brideParentInfo.momName}</p>
                        <div className={styles.contact}>
                          <Link to={`tel:${basicInfoList.brideParentInfo.momNumber}`}>
                            <img src={iconCallBride} alt="" />
                          </Link>
                          <Link to={`sms:${basicInfoList.brideParentInfo.momNumber}`}>
                            <img src={iconMsgBride} alt="" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> : null
              }
            </div>
          </>
        }


      </InvitationModal>
    </>
  );
}

export default InvitationModalLetter;