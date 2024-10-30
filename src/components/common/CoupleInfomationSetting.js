/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import CoupleInfomationSettingBasic from "./CoupleInfomationSettingBasic.js";
import CoupleInfomationSettingParents from "./CoupleInfomationSettingParents.js";
import SettingNotice from "../layout/SettingNotice.js"
import SettingNoticeContent from "../layout/SettingNoticeContent.js"
import Button from "../layout/Button.js"
import CheckItem from "./CheckItem.js";
/* CSS Module */
// const parents = ["아버지", "어머니"];
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const parents = [
  {
    itemName: "아버지",
    itemKey: "Dad"
  },
  {
    itemName: "어머니",
    itemKey: "Mom"
  }
];

const CoupleInfomation = () => {
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  const basicDataChangeHandler = (e, infoType) => {
    const { name, value } = e.target;
    setBasicInfoList(prev => ({
      ...prev,
      [infoType]: {
        ...prev[infoType],
        [name]: value
      }
    }))
  }
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>

        <CommonItemWrapper>
          <CommonItemContent title="신랑">
            <CoupleInfomationSettingBasic 
              couple="신랑" 
              coupleKey="M" 
              value={basicInfoList.groomInfo} 
              onChange={(e) => basicDataChangeHandler(e, "groomInfo")}
            />
          </CommonItemContent>
          {parents.map((parent, idx) => (
            <CommonItemContent title={parent.itemName} key={`${parent.itemName}${idx}`}>
              <CoupleInfomationSettingParents 
                itemKey={parent.itemKey} 
                pName={parent.itemName} 
                coupleKey="M"
                data={basicInfoList.groomParentInfo}
                onChange={(e) => basicDataChangeHandler(e, "groomParentInfo")}
              />
            </CommonItemContent>
          ))}
        </CommonItemWrapper>
      </CommonOptionContent>

      <CommonOptionContent>

        <CommonItemWrapper>
          <CommonItemContent title="신부">
            <CoupleInfomationSettingBasic 
              couple="신부" 
              coupleKey="F" 
              value={basicInfoList.brideInfo} 
              onChange={(e) => basicDataChangeHandler(e, "brideInfo")}
            />
          </CommonItemContent>
          {parents.map((parent, idx) => (
            <CommonItemContent title={parent.itemName} key={`${parent.itemName}${idx}`}>
              <CoupleInfomationSettingParents 
                itemKey={parent.itemKey} 
                pName={parent.itemName} 
                coupleKey="F"
                data={basicInfoList.brideParentInfo}
                onChange={(e) => basicDataChangeHandler(e, "brideParentInfo")}
              />
            </CommonItemContent>
          ))}
        </CommonItemWrapper>
      </CommonOptionContent>

      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="故人 표기" multi="check">
            <CheckItem name="deceasedFlower" id="deceasedFlower" disabled={false} labelImgSrc={false} content="국화꽃으로 표기" />
            <SettingNotice>
              <SettingNoticeContent>아버지, 어머니 정보는 미 입력 시 표기되지 않습니다.</SettingNoticeContent>
            </SettingNotice>
          </CommonItemContent>
        </CommonItemWrapper>

      </CommonOptionContent>
    </CommonOptionWrapper>
  )
}

export default CoupleInfomation;