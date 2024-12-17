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
            !videoList.videoSrc && !videoList.videoUrl ?
            <img src={sampleVideoImg} alt="" /> : null
          }
          {
            videoList.videoSrc ?
            <video controls preload="auto">
              {renderVideoHandler(videoList.videoSrc)}
            </video>
            :
            null
          }
          {
            isValidYouTubeUrl(videoList.videoUrl) ? 
            <iframe height="100%" src={videoList.videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            :
            null
          }

        </div>
      </div>
    </div>
  )
}

export default Video;