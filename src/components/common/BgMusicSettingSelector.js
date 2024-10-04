/* Component */
import CommonItemContent from "./CommonItemContent.js";
import Button from "../layout/Button.js";
/* CSS Module */
import styles from "../../css/module/common/BgMusicSettingSelector.module.css";
/* Image */
import { ReactComponent as IconBgSelectImg } from "../../img/icon/icon_bg_select.svg";

const bgFreeList = [
  {
    bgauthor: "RUELLE",
    bgtitle: "I Get To Love You"
  },
  {
    bgauthor: "존 레전드",
    bgtitle: "All of me"
  },
  {
    bgauthor: "안녕바다",
    bgtitle: "별 빛이 내린다"
  },
  {
    bgauthor: "아델",
    bgtitle: "Make you feel my Make you feel my Make you feel my"
  },
  {
    bgauthor: "존 레전드",
    bgtitle: "All of me"
  },
  {
    bgauthor: "존 레전드",
    bgtitle: "All of me"
  },
]

const BgMusicSettingSelector = () => {
  const active = null;
  return (
    <div className={styles.bg__selector_wrap}>
      <ul className={styles.bg__selector}>
        {bgFreeList.map((item, idx) => (
          <li key={item.bgtitle + idx} 
            className={`${styles.bg__selector_item} ${styles.active} ${active ? styles.active : ""}`}>
            <IconBgSelectImg />
            <p className={styles.bg__selector_author}>{item.bgauthor}</p>
            <p className={styles.bg__selector_title}>{item.bgtitle}</p>
          </li>
        ))}
      </ul>
      <Button type="button" styleType="add" content={`더 보기 (${bgFreeList.length})`}></Button>
    </div>
  )
}

export default BgMusicSettingSelector;