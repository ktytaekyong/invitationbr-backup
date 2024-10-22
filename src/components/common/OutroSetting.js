/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import CommonOptionWrapper from "./CommonOptionWrapper.js";
import CommonOptionContent from "./CommonOptionContent.js";
import CommonItemWrapper from "./CommonItemWrapper.js";
import CommonItemContent from "./CommonItemContent.js";
import PhotoSelector from "./PhotoSelector.js";
import TextEditor from "./TextEditor.js";
import RadioList from "./RadioList.js";
import RadioItem from "./RadioItem.js";
/* CSS Module */
// import styles from "../../css/module/common/NoticeSettingT.module.css";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const OutroSetting = () => {
  const [radioActive, setRadioActive] = useState(false);
  const { outroList, setOutroList } = useContext(SetContext);
  const [outroImgList, setOutroImgList] = useState([]);
  const fileAddHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileList = new FileReader();
      fileList.onload = (e) => {
        setOutroList((prev) => ({
          ...prev,
          src: e.target.result
        }))
      };
      fileList.readAsDataURL(file);
    }
    console.log(outroList);
  };
  const photoDeleteHandler = () => {
    setOutroList((prev) => ({
      ...prev,
      src: ""
    }));
  }
  const outroDataChangeHandler = (e) => {
    const { name, value } = e.target;
    setOutroList((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <CommonOptionWrapper>
      <CommonOptionContent>
        <CommonItemWrapper>
          <CommonItemContent title='내용' multi={true}>
            <TextEditor 
              name="content" 
              textValue={outroList.content} 
              onChange={(e)=>{outroDataChangeHandler(e)}}
            />
          </CommonItemContent>

          <CommonItemContent title='사진' multi={true}>
            <PhotoSelector 
              id='OutroPhoto'
              listName={[outroList]} 
              onChange={fileAddHandler} 
              deleteFunction={setOutroList} 
              hasSrc={true} 
              hasSrcFunction={() => photoDeleteHandler(0)}
            />
            <RadioList title='사진 위치 (사진 첨부는 선택사항 입니다.)'>
              <RadioItem radioName='noticePhotoDPosition' id='noticePhotoIntro' content='본문 위쪽' defaultChecked={true}></RadioItem>
              <RadioItem radioName='noticePhotoDPosition' id='noticePhotoAll' content='본문 아래쪽'></RadioItem>
            </RadioList>
          </CommonItemContent>
        </CommonItemWrapper>
      </CommonOptionContent>
    </CommonOptionWrapper>
  );
};

export default OutroSetting;
