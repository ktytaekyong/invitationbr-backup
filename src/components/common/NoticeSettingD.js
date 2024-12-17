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

// C: 공지사항 설정
const NoticeSettingD = () => {
  const { noticeDList, setNoticeDList } = useContext(SetContext);
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        {
          noticeDList.map((item, idx) => (
            <CommonItemWrapper key={`noticeD${idx}`}>
              <CommonItemContent title='제목'>
                <input
                  type="text" 
                  id={`${item.id}Title`} 
                  name="title" 
                  value={item.title}
                  maxLength={10}
                  onChange={(e)=>{DataChanger_ObjectArray(e, idx, setNoticeDList)}} 
                  placeholder="공지사항 제목을 작성해 주세요." 
                />
              </CommonItemContent>
    
              <CommonItemContent title='내용'>
                <TextEditor 
                  dataName="content"
                  textValue={item.content} 
                  onChange={(e)=>{DataChanger_ObjectArray(e, idx, setNoticeDList)}} 
                  maxLength={100}
                />
              </CommonItemContent>

              <CommonItemContent title='사진' multi={true}>
                <PhotoSelector 
                  id={`NoticeDPhotoList${idx}`}
                  limit={1}
                  listName={[noticeDList[idx]]} 
                  onChange={(e) => fileAddHandler_ObjectArray(e, idx, setNoticeDList)} 
                  deleteFunction={() => photoDeleter_ObjectArray(idx, setNoticeDList)}
                />
                <RadioList title="사진 위치">
                  <RadioItem 
                    name={`DPosition${idx}`} 
                    id={`topD${idx}`} 
                    content="본문 위쪽" 
                    radioidx={idx}
                    radioChecked={item.position === "top" ? item.position : null} 
                  />
                  <RadioItem 
                    name={`DPosition${idx}`} 
                    id={`bottomD${idx}`} 
                    content="본문 아래쪽" 
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

export default NoticeSettingD;
