/* Import */
import { useState, useEffect } from "react";
/* Component */
import PhotoSelector from "./PhotoSelector.js";
import SettingNotice from "../layout/SettingNotice.js";
/* CSS Module */
import styles from "../../css/module/common/VideoSettingOption.module.css";

const VideoSettingOption = ({ active }) => {
  const [videoList, setVideoList] = useState([]);
  const fileAddHandler = (e) => {
    const file = e.target.files[0];
    if(file) {
      const fileList = new FileReader();
      fileList.onload = (e) => {
        setVideoList([
          {
            src: e.target.result,
            alt: e.target.result,
          },
        ]);
      };
      fileList.readAsDataURL(file);
    }
  }
  
  return (
    <div className={styles.video__wrap}>
      {
        active === false ?
        <div className={styles.video__youtube}>
          <div className={styles.input__wrap}>
            <label htmlFor="videoYoutubeUrl">유튜브 URL</label>
            <input type="text" id="videoYoutubeUrl" name="videoYoutubeUrl" className={styles.youtube__input} />
          </div>
          <div className="notice__wrapper">
            <SettingNotice>
              <span>※</span>
              <span>업로드한 영상의 URL 주소를 입력하세요.</span>
            </SettingNotice>
            <SettingNotice>
              <span>※</span>
              <span>유튜브 '퍼가기 허용'을 설정하면 재생할 수 있습니다.</span>
            </SettingNotice>
            <SettingNotice>
              <span>※</span>
              <span>유튜브 등록 시 공개범위를 '일부공개'로 설정하면 노출되지 않으니
              ‘전체 공개’로 설정해 주세요.</span>
            </SettingNotice>
          </div>
        </div>
        :
        <div className={styles.video__reg}>
          <PhotoSelector listName={videoList} onChange={fileAddHandler} deleteFunction={setVideoList}></PhotoSelector>
          <div className="notice__wrapper">
            <SettingNotice>
              <span>※</span>
              <span>파일확장자명은 mp3, mov, avi, mkv,
              용량 10mb 이하로 1개만 등록하실 수 있습니다.</span>
            </SettingNotice>
          </div>
        </div>
      }
    </div>
  )
}

export default VideoSettingOption;