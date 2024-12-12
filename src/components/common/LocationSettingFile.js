/* Import */
import { useContext } from "react";
import imageCompression from 'browser-image-compression';
/* Component */
import Button from "../layout/Button.js";
/* CSS Module */
import styles from "../../css/module/common/LocationSettingFile.module.scss";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const LocationSettingFile = () => {
  const { selectLocationFile, setSelectLocationFile } = useContext(InfoContext);
  const fileAddHandler = async (e) => {
    e.preventDefault();
    const file = e.target.files[0]; 
    const option = {
      maxSizeMB: 4,
      maxWidthOrHeight: 1200,
      initialQuality: 1,
    };
  
    if (file) {
      try {
        const compressedFile = await imageCompression(file, option); 
  
        const fileList = new FileReader();
        fileList.onload = (event) => {
          setSelectLocationFile([ 
            {
              fileName: file.name,
              src: event.target.result,
              alt: event.target.result,
            },
          ]);
        };
        fileList.readAsDataURL(compressedFile);
      } catch (error) {
        console.error('이미지 압축 중 오류 발생:', error);
      } finally {
        e.target.value = null; 
      }
    }
  };
  const fileDeleteHandler = (item) => {
    let list = [...selectLocationFile];
    list = list.filter((e) => e !== item);
    setSelectLocationFile(list);
  }
  return (
    <div className={styles.file__selector}>
      <div className={styles.file__wrap}>
        <div className={`${styles.file__name_wrap} ${selectLocationFile.length > 0 ? styles["add"] : null}`}>
          <p>
            {selectLocationFile.length > 0 ? selectLocationFile[0].fileName : "약도 첨부"}
          </p>
          {
            selectLocationFile.length > 0 ?
            <Button styleType="file__delete" onClick={() => {fileDeleteHandler(selectLocationFile[0])}} />
            : null
          }
        </div>
        {selectLocationFile.length > 0 ? null : <label htmlFor="LocationFile">파일</label>}
      </div>
      <input type="file" name="LocationFile" id="LocationFile" onChange={fileAddHandler} />
    </div>
  )
}

export default LocationSettingFile;