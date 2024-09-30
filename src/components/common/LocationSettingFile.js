/* Import */
import { useEffect, useState, useContext } from "react";
/* Component */
import Button from "../layout/Button.js";
/* CSS Module */
import styles from "../../css/module/common/LocationSettingFile.module.css";

const LocationSettingFile = () => {
  const [locationFileList, setLocationFileList] = useState([]);
  const fileAddHandler = (e) => {
    const file = e.target.files[0];
    if(file) {
      const fileList = new FileReader();
      fileList.onload = (e) => {
        setLocationFileList([
          {
            fileName: file.name,
            src: e.target.result,
            alt: e.target.result,
          },
        ]);
      };
      fileList.readAsDataURL(file);
      console.log(file);
    }
    console.log(e.target.files);
  }
  const fileDeleteHandler = (item) => {
    let list = [...locationFileList];
    list = list.filter((e) => e !== item);
    setLocationFileList(list);
  }
  useEffect(() => {

  }, [locationFileList])
  return (
    <div className={styles.file__selector}>
      <div className={styles.file__wrap}>
        <div className={`${styles.file__name_wrap} ${locationFileList.length > 0 ? styles["add"] : null}`}>
          <p>
            {locationFileList.length > 0 ? locationFileList[0].fileName : "약도 첨부"}
          </p>
          <Button styleType="file__delete" onClick={() => {fileDeleteHandler(locationFileList[0])}}></Button>
        </div>
        {locationFileList.length > 0 ? null : <label htmlFor="LocationFile">파일</label>}
      </div>
      <input type="file" name="LocationFile" id="LocationFile" onChange={fileAddHandler} />
    </div>
  )
}

export default LocationSettingFile;