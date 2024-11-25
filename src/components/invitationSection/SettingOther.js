/* Import */
import { useContext } from "react";
import { useLocation } from "react-router-dom";
/* Component */
import MobileSettingButtonWrapper from "../layout/MobileSettingButtonWrapper.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/SettingOther.module.scss";
/* Image */
import iconBg from "../../img/icon/icon_other_setting_bg.png";
import iconKakao from "../../img/icon/icon_other_setting_kakao.png";
import iconUrl from "../../img/icon/icon_other_setting_url.png";
import iconOrder from "../../img/icon/icon_other_setting_order.png";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const SettingOther = () => {
  const previewLocation = useLocation();
  const isTargetPage = previewLocation.pathname === "/Preview";
  const { isMobile, selectSettingList } = useContext(SetContext);
  return (
    <div className={styles.other}>
      <div className={styles.other__wrap}>
        {
          <div className={styles.other__item_wrap}>
            {!isTargetPage && isMobile ?
              <MobileSettingButtonWrapper id="settingBgMusic" position="absolute" top={10} /> 
              : null
            }
            {
              selectSettingList.includes("settingBgMusic") ?
              <div className={styles.other__item}>
                <img src={iconBg} alt="" />
                <p>배경 음악 설정</p>
                <p>모바일 청첩장 접속 시 나오는 배경음악을<br />
                설정할 수 있습니다.</p>
              </div>
              : null
            }
          </div>
        }
        {
          <div className={styles.other__item_wrap}>
            {!isTargetPage && isMobile ?
              <MobileSettingButtonWrapper id="settingThumbK" position="absolute" top={10} /> 
              : null
            }
            {
              selectSettingList.includes("settingThumbK") ?
              <div className={styles.other__item}>
                <img src={iconKakao} alt="" />
                <p>카톡 공유 설정</p>
                <p>청첩장 하단 [카카오톡 공유하기] 로 전달 시<br />
                보여지는 화면을 설정할 수 있습니다.</p>
              </div>
              : null
            }
          </div>
        }
        {
          <div className={styles.other__item_wrap}>
            {!isTargetPage && isMobile ?
              <MobileSettingButtonWrapper id="settingThumbU" position="absolute" top={10} /> 
              : null
            }
            {
              selectSettingList.includes("settingThumbU") ?
              <div className={styles.other__item}>
                <img src={iconUrl} alt="" />
                <p>URL 공유 설정</p>
                <p>청첩장 하단 [링크주소 복사하기] 로 전달 시<br />
                보여지는 화면을 설정할 수 있습니다.</p>
              </div>
              : null
            }   
          </div>
        }
        {
          <div className={styles.other__item_wrap}>
          {!isTargetPage && isMobile ?
            <MobileSettingButtonWrapper id="settingOrder" position="absolute" top={10} /> 
            : null
          }
          {
            selectSettingList.includes("settingOrder") ?
            <div className={styles.other__item}>
              <img src={iconOrder} alt="" />
              <p>메뉴 순서 변경</p>
              <p>모바일 청첩장에 메뉴 순서를 변경할 수 있습니다.<br />
              (고정항목 제외)</p>
            </div>
            : null
          }
          </div>
        }
      </div>
    </div>
  )
}

export default SettingOther;