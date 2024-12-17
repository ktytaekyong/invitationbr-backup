/* Import */
import { useContext } from "react";
import { DataChanger_ObjectArray, fileAddHandler_ObjectArray, photoDeleter_ObjectArray } from "../../utils/helpers.js";
/* Component */
import PhotoSelector from "./PhotoSelector.js";
import SettingNotice from "../layout/SettingNotice.js";
import SettingNoticeContent from "../layout/SettingNoticeContent.js";
/* CSS Module */
import styles from "../../css/module/common/VideoSettingOption.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

// C: 동영상 설정 - 유튜브 등록, 직접 등록
const VideoSettingOption = () => {
  const { videoList, setVideoList, selectOptionList } = useContext(SetContext);
  const fileAddHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileList = new FileReader();
      fileList.onload = (e) => {
        setVideoList(() => ({
          url: "",
          src: e.target.result, 
        }));
      };
      fileList.readAsDataURL(file);
    }
  };

  // 유튜브 URL 핸들러
  const youtubeUrlHandler = (e) => {
    setVideoList(() => ({
      url: e.target.value,
      src: "",
    }));
  };
  
  return (
    <div className={styles.video__wrap}>
      {
        videoList.map((item, idx) => (
          selectOptionList.videoType === "videoYoutubeOption" ?
          <div className={styles.video__youtube} key={"videoYoutubeOption" + item + idx}>
            <div className={styles.input__wrap}>
              <label htmlFor="videoYoutubeUrl">유튜브 URL</label>
              <input type="text" id="url" name="url" value={item.url} onChange={youtubeUrlHandler} className={styles.youtube__input} />
            </div>
            <SettingNotice>
              <SettingNoticeContent>업로드한 영상의 URL 주소를 입력하세요.</SettingNoticeContent>
              <SettingNoticeContent>유튜브 '퍼가기 허용'을 설정하면 재생할 수 있습니다.</SettingNoticeContent>
              <SettingNoticeContent>유튜브 등록 시 공개범위를 '일부공개'로 설정하면 노출되지 않으니 ‘전체 공개’로 설정해 주세요.</SettingNoticeContent>
            </SettingNotice>
          </div>
          : null
        ))
      }
      {
        videoList.map((item, idx) => (
          selectOptionList.videoType === "videoRegOption" ?
          <div className={styles.video__reg} key={"videoRegOption" + item + idx}>
            <PhotoSelector 
              id={`VideoRegList${idx}`}
              type="video" 
              limit={1}
              listName={videoList}
              onChange={(e) => fileAddHandler_ObjectArray(e, idx, setVideoList)} 
            />
            <SettingNotice>
              <SettingNoticeContent>파일확장자명은 mp3, mov, avi, mkv, 용량 10mb 이하로 1개만 등록하실 수 있습니다.</SettingNoticeContent>
            </SettingNotice>
          </div>
          : null
        ))
      }
    </div>
  )
}

export default VideoSettingOption;