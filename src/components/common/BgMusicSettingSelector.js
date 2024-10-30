/* Import */
import { useState, useEffect, useContext } from "react";
/* Component */
import CommonItemContent from "./CommonItemContent.js";
import Button from "../layout/Button.js";
/* CSS Module */
import styles from "../../css/module/common/BgMusicSettingSelector.module.scss";
/* Image */
import { ReactComponent as IconBgSelectImg } from "../../img/icon/icon_bg_select.svg";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const BgMusicSettingSelector = () => {
  const { selectBGM, setSelectBGM, bgFreeList, setBgFreeList } = useContext(SetContext);
  const [bgMoreCount, setBgMoreCount] = useState(6);
  const bgmChangeHandler = (e) => {
    const { id } = e.target;
    setSelectBGM(id);
  }
  useEffect(() => {
    setBgFreeList((prev) => (
      prev.map((item, idx) => ({
        ...item,
        "bgid": "bgid" + idx
      }))
    ))
  }, [])
  return (
    <div className={styles.bg__selector_wrap}>
      <ul className={styles.bg__selector}>
        {bgFreeList.filter((_, count) => count < bgMoreCount)
        .map((item, idx) => (
          <li key={item.bgtitle + idx} 
            id={item.bgid}
            className={`${styles.bg__selector_item} ${selectBGM === item.bgid ? styles["active"] : ""}`}
            onClick={bgmChangeHandler}
          >
            <IconBgSelectImg />
            <p className={styles.bg__selector_author}>
              {item.bgauthor}
              {/* {selectBGM === item.bgid ? item.bgauthor : null} */}
              </p>
            <p className={styles.bg__selector_title}>{item.bgtitle}</p>
          </li>
        ))}
      </ul>
      {
        bgFreeList.length > bgMoreCount - 1 && bgMoreCount !== bgFreeList.length ?
        <Button type="button" onClick={() => setBgMoreCount(bgFreeList.length)} styleType="add" content={`더 보기 (${bgFreeList.length - 6})`} />
        : null
      }
    </div>
  )
}

export default BgMusicSettingSelector;