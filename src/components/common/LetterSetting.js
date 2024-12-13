/* Import */
import { useContext } from "react";
import { DataChanger_Object } from "../../utils/helpers.js";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import LetterSettingTitle from "./LetterSettingTitle.js";
import TextEditor from "./TextEditor.js";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

// C: 모시는 글 설정
const LetterSetting = () => {
  const { letterList, setLetterList } = useContext(SetContext);
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="제목">
            <LetterSettingTitle 
              value={letterList.title} 
              onChange={(e) => DataChanger_Object(e, setLetterList)} 
            />
          </CommonItemContent>
          <CommonItemContent title="내용" multi={true}>
            <TextEditor 
              type="letter" 
              dataName="content" 
              textValue={letterList.content} 
              onChange={(e) => DataChanger_Object(e, setLetterList)} 
            />
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>
    </CommonOptionWrapper>
  )
}

export default LetterSetting;