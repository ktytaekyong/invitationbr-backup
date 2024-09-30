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
            src: e.target.result,
            alt: e.target.result,
          },
        ]);
      };
      fileList.readAsDataURL(file);
    }
  }
  const fileDeleteHandler = (item) => {
    let list = [...locationFileList];
    list = list.filter((e) => e !== item);
    setLocationFileList(list);
  }
  return (
    <div className={styles.file__selector}>
      <div className={styles.file__wrap}>
        <p>
          {locationFileList ? "약도 첨부" : locationFileList[0]}
        </p>
        <label htmlFor="LocationFile">파일</label>
      </div>
      <input type="file" name="LocationFile" id="LocationFile" onChange={fileAddHandler} />
      {locationFileList.map((item, idx) => (
        <div className={styles.option__item} key={item.alt + idx} style={{backgroundImage: `url(${item.src})`}}>
          <Button type="button" styleType="close" onClick={() => {fileDeleteHandler(item)}} />
        </div>
      ))}
    </div>
  )
}

export default LocationSettingFile;