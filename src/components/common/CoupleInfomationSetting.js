/* Import */
import { useState, useEffect } from "react";
/* Component */
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import CoupleInfomationSettingBasic from "./CoupleInfomationSettingBasic.js";
import Button from "../layout/Button.js"
/* CSS Module */
import styles from "../../css/module/common/IntroPhotoSetting.module.css";
import CheckItem from "./CheckItem.js";

const CoupleInfomation = () => {
  const [photoList, setPhotoList] = useState([]);
  
  const [isActive, setIsActive] = useState(0);
  const [isActiveTab, setIsActiveTab] = useState(0);
  const setActiveHandler = (idx) => {
    setIsActive(idx);
  }
  const setActiveTabHandler = (idx) => {
    setIsActiveTab(idx);
  }

  return (
    <div className="content__wrapper">
      <ul className={styles.option__list}>
        <CommonItemWrapper>
          <CommonItemContent title="신랑 측">
            <CoupleInfomationSettingBasic couple="신랑" coupleKey="M"></CoupleInfomationSettingBasic>
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="신부 측">
            <CoupleInfomationSettingBasic couple="신부" coupleKey="F"></CoupleInfomationSettingBasic>
          </CommonItemContent>
        </CommonItemWrapper>

        <CommonItemWrapper>
          <CommonItemContent title="고인 표기">
            <CheckItem id="depF" content="국화꽃으로 표기" disabled={true} />
          </CommonItemContent>
        </CommonItemWrapper>
            
        <small>아버지, 어머지 정보는 미 입력 시 표기되지 않습니다.</small>
        {/* Notice로 */}
        {/* 국화꽃 표기 방법 생각 */}
        {/* 아마 context 하면 되지 않을까 */}
      </ul>
    </div>
  )
}

export default CoupleInfomation;