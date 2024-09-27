/* Import */
import { useState, useEffect } from "react";
/* Component */
import Button from "../layout/Button.js"
/* CSS Module */
import styles from "../../css/module/common/LetterSettingContent.module.css";
/* Image */
import {ReactComponent as IconToolImgBold} from "../../img/icon/icon_letter_tool_bold.svg"
import {ReactComponent as IconImgItalic} from "../../img/icon/icon_letter_tool_italic.svg"
import {ReactComponent as IconImgUnderline} from "../../img/icon/icon_letter_tool_underline.svg"
import {ReactComponent as IconImgLeft} from "../../img/icon/icon_letter_tool_left.svg"
import {ReactComponent as IconImgRight} from "../../img/icon/icon_letter_tool_right.svg"
import {ReactComponent as IconImgCenter} from "../../img/icon/icon_letter_tool_center.svg"

const LetterSettingContent = () => {
  return (
    <div className={styles.letter__content_wrap}>
      <div className={styles.tool__list}>
        <ul className={styles.tool__list_deco}>
          <button>
            <IconToolImgBold />
          </button>
          <button>
            <IconImgItalic />
          </button>
          <button>
            <IconImgUnderline />
          </button>
        </ul>
        <ul className={styles.tool__list_align}>
          <button className={`${styles.active}`}>
            <IconImgLeft />
          </button>
          <button>
            <IconImgCenter />
          </button>
          <button>
            <IconImgRight />
          </button>
        </ul>
      </div>
      <textarea name="" id="" className={styles.letter__content}></textarea>
      <Button type="button" content="샘플 문구 보기" styleType="sample__view"></Button>
    </div>
  )
}

export default LetterSettingContent;