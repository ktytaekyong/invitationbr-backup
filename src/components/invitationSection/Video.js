/* Import */
import { useContext } from "react";
/* Component */
import HeadLine from "../layout/HeadLine.js";
/* CSS Module */
import styles from "../../css/module/invitationSection/Video.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
import { RefContext } from "../../store/option-ref-context.js";
/* Image */
import sampleVideoImg from "../../img/video/video_photo.png"

const Video = () => {
  const { videoList } = useContext(SetContext);
  const { videoRef } = useContext(RefContext);

  const isValidYouTubeUrl = (url) => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    return youtubeRegex.test(url);
  };

  const renderVideoHandler = (src) => {
    if(src) {
      return <source src={src} type="video/mp4" />
    } else {
      return;
    }
  }
  return (
    <div ref={videoRef} id="Video" className={`${styles.video}`}>
      <div className={styles.video__wrap}>
        <HeadLine title="동영상" content="movie"></HeadLine>
        <div className={styles.video__content}>
          {
            videoList[0].src ? // 등록했을 때
            <video controls preload="auto">
              {renderVideoHandler(videoList[0].src)}
            </video>
            :
            null
          }
          {
            videoList[0].url ? 
            <iframe height="100%" src={videoList[0].url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            :
            null
          }
          {
            videoList[0].src === "" && videoList[0].url === "" ?
            <img src={sampleVideoImg} alt="" /> : null
          }
        </div>
      </div>
    </div>
  )
}

export default Video;