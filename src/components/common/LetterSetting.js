/* Import */
import { useContext } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import LetterSettingTitle from "./LetterSettingTitle.js";
import TextEditor from "./TextEditor.js";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const LetterSetting = () => {
  const { letterList, setLetterList } = useContext(SetContext);
  const letterDataChangeHandler = (e) => {
    const { name, value } = e.target;
    setLetterList((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title="제목">
            <LetterSettingTitle value={letterList.title} onChange={letterDataChangeHandler} />
          </CommonItemContent>
          
          <CommonItemContent title="내용" multi={true}>
            <TextEditor type="letter" name="content" textValue={letterList.content} onChange={(e) => letterDataChangeHandler(e)} setLetterList={setLetterList} />
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>
    </CommonOptionWrapper>
  )
}

export default LetterSetting;