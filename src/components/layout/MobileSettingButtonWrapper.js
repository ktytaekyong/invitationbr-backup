/* Import */
import { useContext } from "react";
// Component
import Button from "./Button"
// CSS
import styles from "../../css/module/layout/MobileSettingButtonWrapper.module.scss"
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const MobileSettingButtonWrapper = ({ id, position }) => {
  const { settingList } = useContext(SetContext); 
  const buttonTitleChanger = (id) => {
    const content = settingList.find((item) => item.itemId === id);
    console.log(content);
    return content.itemTitle; 
  };
  return (
    <div className={`${styles.wrapper} ${position === "absolute" ? styles.absolute : styles.static}`}>
      <Button type="button" content={buttonTitleChanger(id)} styleType="mobile__setting" />
    </div>
  )
}

export default MobileSettingButtonWrapper