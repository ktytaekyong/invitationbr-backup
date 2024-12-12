/* Import */
import { useEffect, useContext } from "react";
/* Component */
import Button from "../layout/Button";
/* CSS Module */
import styles from "../../css/module/common/PhotoSelector.module.scss";
/* Image */
import photoAddImg from "../../img/photoSelector/photo_selector_add.png"
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const PhotoSelector = (props) => {
  const { videoList, setVideoList } = useContext(SetContext);
  const videoDeleteHandler = () => {
    setVideoList(() => (
      {
        videoUrl: "",
        videoSrc: "",
      }
    ))
  }
  return (
    <div id={props.id} className={`${styles.photo__selector} ${props.id === "galleryPhotoList" ? styles["gallery"] : ""}`}>
      <ul className={styles.option__list}>
        <li className={styles.option__item} style={{backgroundImage: `url(${photoAddImg})`}}>
          <input type="file" name="src" id={`${props.id}File`} multiple={props.limit > 1 ? true : false}  onChange={props.onChange} />
          <label htmlFor={`${props.id}File`}></label>
        </li>
        {
          props.type !== "video" ?
          props.listName.filter((_, idx) => idx < props.limit)
          .map((item, idx) => (
            item.src && props.id !== "galleryPhotoList" ?
            <li className={styles.option__item} key={item.alt + idx} style={{backgroundImage: `url(${item.src})`}}>
              <Button type="button" styleType="close" onClick={() => props.deleteFunction([])} />
            </li>
            : 
            <li className={styles.option__item} key={item.alt + idx} style={{backgroundImage: `url(${item.src})`}}>
              <Button 
                type="button" 
                styleType="close" 
                onClick={() => props.deleteFunction((prevList) => prevList.filter((_, removeIdx) => idx !== removeIdx))} 
              />
            </li>
          ))
          : null
        }
        {
          props.type === "video" && videoList.videoSrc !== ""?
          <li className={styles.option__item} key={videoList.videoSrc}>
            <video src={videoList.videoSrc} type="video/mp4" preload="auto"></video>
            <Button type="button" styleType="close" onClick={() => {videoDeleteHandler(videoList.videoSrc)}} />
          </li>
          : null
        }
      </ul>
    </div>
  )
}

export default PhotoSelector;