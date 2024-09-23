/* Import */
import { useState, useEffect } from "react";
/* Component */
import OptionCommonItem from "./OptionCommonItem.js";
import OptionListWrapper from "./OptionListWrapper.js";
import CoupleInfomationSelector from "./CoupleInfomationSelector.js";
import Button from "../layout/Button.js"
/* CSS Module */
import styles from "../../css/module/common/OptionIntroPhotoList.module.css";

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
        <OptionCommonItem>
          <OptionListWrapper title="신랑 측">
            <CoupleInfomationSelector couple="신랑" coupleKey="M"></CoupleInfomationSelector>
          </OptionListWrapper>
        </OptionCommonItem>

        <OptionCommonItem>
          <OptionListWrapper title="신부 측">
            <CoupleInfomationSelector couple="신부" coupleKey="F"></CoupleInfomationSelector>
          </OptionListWrapper>
        </OptionCommonItem>

        <OptionCommonItem>
          <OptionListWrapper title="고인 표기">
            <div className={styles.check__wrapper}>
              <input type="checkbox" name="depF" id="depF" disabled />
              <label htmlFor="depF">국화꽃으로 표기</label>
            </div>
          </OptionListWrapper>
        </OptionCommonItem>
            
        <small>아버지, 어머지 정보는 미 입력 시 표기되지 않습니다.</small>
        {/* Notice로 */}
        {/* 국화꽃 표기 방법 생각 */}
      </ul>
    </div>
  )
}

export default CoupleInfomation;