/* Import */
import { useContext } from "react";
import { DataChanger_ObjectArray, fileAddHandler_ObjectArray, photoDeleter_ObjectArray } from "../../utils/helpers.js";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import PhotoSelector from "./PhotoSelector.js";
import TextEditor from "./TextEditor.js";
import RadioList from "./RadioList.js";
import RadioItem from "./RadioItem.js";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

// C: 하단 글귀 설정
const OutroSetting = () => {
  const { outroList, setOutroList } = useContext(SetContext);
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        {
          outroList.map((item, idx) => (
            <CommonItemWrapper key={item.content + idx}>
              <CommonItemContent title='내용' multi={true}>
                <TextEditor 
                  dataName="content"
                  textValue={item.content}
                  onChange={(e) => {DataChanger_ObjectArray(e, idx, setOutroList)}}
                  onClear={setOutroList}
                  maxLength={50}
                />
              </CommonItemContent>
              <CommonItemContent title='사진' multi={true}>
                <PhotoSelector 
                  id={`OutroPhoto${idx}`}
                  limit={1}
                  listName={outroList}
                  onChange={(e) => fileAddHandler_ObjectArray(e, idx, setOutroList)} 
                  deleteFunction={() => photoDeleter_ObjectArray(idx, setOutroList)} 
                />
                <RadioList title='사진 위치 (사진 첨부는 선택사항 입니다.)'>
                  <RadioItem 
                    name={`outroPosition`} 
                    id={`topOutro${idx}`} 
                    content='본문 위쪽' 
                    radioidx={idx}
                    radioChecked={item.position === "top" ? item.position : null} 
                  />
                  <RadioItem 
                    name={`outroPosition`} 
                    id={`bottomOutro${idx}`} 
                    content='본문 아래쪽'
                    radioidx={idx}
                    radioChecked={item.position === "bottom" ? item.position : null} 
                  />
                </RadioList>
              </CommonItemContent>
            </CommonItemWrapper>
          ))
        }

      </CommonOptionContent>
    </CommonOptionWrapper>
  );
};

export default OutroSetting;
