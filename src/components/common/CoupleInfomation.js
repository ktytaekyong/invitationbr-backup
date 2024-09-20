/* Import */
import { useState, useEffect } from "react";
/* Component */
import OptionCommonItem from "./OptionCommonItem.js";
import OptionListWrapper from "./OptionListWrapper.js";
import PhotoSelector from "./PhotoSelector.js";
import IntroTextSelector from "./IntroTextSelector.js";
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
            <div className={styles.couple__info}>
              <input type="text" placeholder="신랑 이름"/>
              <input type="number" placeholder="전화 번호"/>
              <select name="" id="">
                <option value="">아들</option>
                <option value="">장남</option>
                <option value="">차남</option>
                <option value="">등</option>
              </select>
            </div>
            <div className={styles.couple__info}>
              <input type="text" placeholder="아버지 성함"/>
              <input type="number" placeholder="전화 번호"/>
              <div className={styles.check__wrapper}>
                <input type="checkbox" name="dep1" id="dep1" />
                <label htmlFor="dep1">故</label>
              </div>
            </div>
            <div className={styles.couple__info}>
              <input type="text" placeholder="어머니 성함"/>
              <input type="number" placeholder="전화 번호"/>
              <div className={styles.check__wrapper}>
                <input type="checkbox" name="dep2" id="dep2" />
                <label htmlFor="dep2">故</label>
              </div>
            </div>
            {/* <PhotoSelector listTitle={photoList} onChange={fileAddHandler} deleteFunction={setPhotoList} /> */}
          </OptionListWrapper>
        </OptionCommonItem>

        <OptionCommonItem>
          <OptionListWrapper title="신부 측">
            <div className={styles.couple__info}>
              <input type="text" placeholder="신부 이름"/>
              <input type="number" placeholder="전화 번호"/>
              <select name="" id="">
                <option value="">딸</option>
                <option value="">장녀</option>
                <option value="">차녀</option>
                <option value="">등</option>
              </select>
            </div>
            <div className={styles.couple__info}>
              <input type="text" placeholder="아버지 성함"/>
              <input type="number" placeholder="전화 번호"/>
              <div className={styles.check__wrapper}>
                <input type="checkbox" name="dep3" id="dep3" />
                <label htmlFor="dep3">故</label>
              </div>
            </div>
            <div className={styles.couple__info}>
              <input type="text" placeholder="어머니 성함"/>
              <input type="number" placeholder="전화 번호"/>
              <div className={styles.check__wrapper}>
                <input type="checkbox" name="dep4" id="dep4" />
                <label htmlFor="dep4">故</label>
              </div>
            </div>
            {/* <IntroTextSelector listTitle={photoList}></IntroTextSelector> */}
          </OptionListWrapper>
        </OptionCommonItem>

        <OptionCommonItem>
          <OptionListWrapper title="고인 표기">
            <div className={styles.check__wrapper}>
              <input type="checkbox" name="depF" id="depF" disabled />
              <label htmlFor="depF">국화꽃으로 표기</label>
            </div>
            {/* <IntroTextSelector listTitle={photoList}></IntroTextSelector> */}
          </OptionListWrapper>
        </OptionCommonItem>
            
        <small>아버지, 어머지 정보는 미 입력 시 표기되지 않습니다.</small>
        {/* Notice로 */}
      </ul>
    </div>
  )
}

export default CoupleInfomation;