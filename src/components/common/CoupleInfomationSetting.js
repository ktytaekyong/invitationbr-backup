/* Import */
import { useState, useContext } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import CoupleInfomationSettingBasic from "./CoupleInfomationSettingBasic.js";
import CoupleInfomationSettingParents from "./CoupleInfomationSettingParents.js";
import SettingNotice from "../layout/SettingNotice.js"
import SettingNoticeContent from "../layout/SettingNoticeContent.js"
import CheckItem from "./CheckItem.js";
import CoupleInfomationSettingMobileTab from "./CoupleInfomationSettingMobileTab.js";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";
import { SetContext } from "../../store/option-set-context.js";

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
  const { isMobile } = useContext(SetContext);
  const { basicInfoList, setBasicInfoList } = useContext(InfoContext);
  const [ mobileTabActive, setMobileTabActive ] = useState("M");
  const DataChanger_NestedObject = (e, infoType) => {
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
      {isMobile ? <CoupleInfomationSettingMobileTab mobileTabActive={mobileTabActive} onClick={setMobileTabActive} /> : null}
      {
        isMobile && mobileTabActive === "F" ?
        null :
        <CommonOptionContent style={isMobile ? {paddingBottom: 0, borderBottom: "none"} : null}>
          <CommonItemWrapper>
            <CommonItemContent title="신랑" multi={isMobile}>
              <CoupleInfomationSettingBasic 
                couple="신랑" 
                coupleKey="M" 
                value={basicInfoList.groomInfo} 
                onChange={(e) => DataChanger_NestedObject(e, "groomInfo")}
              />
            </CommonItemContent>
            {parents.map((parent, idx) => (
              <CommonItemContent title={parent.itemName} key={`${parent.itemName}${idx}`} multi={isMobile}>
                <CoupleInfomationSettingParents 
                  itemKey={parent.itemKey} 
                  pName={parent.itemName} 
                  coupleKey="M"
                  data={basicInfoList.groomParentInfo}
                  onChange={(e) => DataChanger_NestedObject(e, "groomParentInfo")}
                />
              </CommonItemContent>
            ))}
          </CommonItemWrapper>
        </CommonOptionContent>
      }
      {
        isMobile && mobileTabActive === "M" ?
        null :
        <CommonOptionContent style={isMobile ? {paddingBottom: 0, borderBottom: "none"} : null}>
          <CommonItemWrapper>
            <CommonItemContent title="신부" multi={isMobile}>
              <CoupleInfomationSettingBasic 
                couple="신부" 
                coupleKey="F" 
                value={basicInfoList.brideInfo} 
                onChange={(e) => DataChanger_NestedObject(e, "brideInfo")}
              />
            </CommonItemContent>
            {parents.map((parent, idx) => (
              <CommonItemContent title={parent.itemName} key={`${parent.itemName}${idx}`} multi={isMobile}>
                <CoupleInfomationSettingParents 
                  itemKey={parent.itemKey} 
                  pName={parent.itemName} 
                  coupleKey="F"
                  data={basicInfoList.brideParentInfo}
                  onChange={(e) => DataChanger_NestedObject(e, "brideParentInfo")}
                />
              </CommonItemContent>
            ))}
          </CommonItemWrapper>
        </CommonOptionContent>
      }

      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="故人 표기" multi={!isMobile ? "check" : ""}>
            <CheckItem 
              name="deceasedFlower" 
              id="deceasedFlower" 
              disabled={false} 
              labelImgSrc={false} 
              content="국화꽃으로 표기" 
            />
            {
              !isMobile ? 
              <SettingNotice>
                <SettingNoticeContent>아버지, 어머니 정보는 미 입력 시 표기되지 않습니다.</SettingNoticeContent>
              </SettingNotice> : null
            }
          </CommonItemContent>
        </CommonItemWrapper>

      </CommonOptionContent>
      {
        isMobile ? 
        <SettingNotice>
          <SettingNoticeContent>아버지, 어머니 정보는 미 입력 시 표기되지 않습니다.</SettingNoticeContent>
        </SettingNotice> : null
      }
    </CommonOptionWrapper>
  )
}

export default CoupleInfomation;