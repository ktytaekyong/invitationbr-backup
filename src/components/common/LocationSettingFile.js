/* Import */
import { useContext } from "react";
/* Component */
import Button from "../layout/Button.js";
/* CSS Module */
import styles from "../../css/module/common/LocationSettingFile.module.scss";
/* Context */
import { InfoContext } from "../../store/option-info-context.js";

const LocationSettingFile = () => {
  const { selectLocationFile, setSelectLocationFile } = useContext(InfoContext);
  const fileAddHandler = (e) => {
    const file = e.target.files[0];
    if(file) {
      const fileList = new FileReader();
      fileList.onload = (e) => {
        setSelectLocationFile([
          {
            fileName: file.name,
            src: e.target.result,
            alt: e.target.result,
          },
        ]);
      };
      fileList.readAsDataURL(file);
    }
  }
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