/* Import */
import { useState, useEffect } from "react";
/* Component */
import Button from "../layout/Button.js"
import BasicModalLetter from "../layout/modal/BasicModalLetter.js"
/* CSS Module */
import styles from "../../css/module/common/TextEditor.module.scss";
/* Image */
import {ReactComponent as IconToolImgBold} from "../../img/icon/icon_editor_tool_bold.svg"
import {ReactComponent as IconImgItalic} from "../../img/icon/icon_editor_tool_italic.svg"
import {ReactComponent as IconImgUnderline} from "../../img/icon/icon_editor_tool_underline.svg"
import {ReactComponent as IconImgLeft} from "../../img/icon/icon_editor_tool_left.svg"
import {ReactComponent as IconImgRight} from "../../img/icon/icon_editor_tool_right.svg"
import {ReactComponent as IconImgCenter} from "../../img/icon/icon_editor_tool_center.svg"

const TextEditor = ({ type }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className={`${styles.editor__content} ${type === "letter" ? styles["letter"] : null}`}>
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
        <textarea name="" id="" className={styles.editor__content_wrap} placeholder="내용을 입력하세요."></textarea>
        {
          type === "letter" ?
          <Button type="button" content="샘플 문구 보기" styleType="sample__view" onClick={handleOpen}></Button>
          : null
        }
      </div>
      {
        type === "letter" ?
        <BasicModalLetter openvar={open} onClose={handleClose}></BasicModalLetter>
        : null
      }
    </>
  )
}

export default TextEditor;