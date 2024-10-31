/* Import */
import { useEffect, useState, useContext } from "react";
/* Component */
import TabSelector from '../../common/TabSelector';
import BasicSelectModal from './BasicSelectModal';
import BasicModalContent from './BasicModalContent';
/* CSS Module */
import styles from "../../../css/module/layout/modal/BasicModalLetter.module.scss";

const BasicModalLetterItem = ({ listName, onClick, activeItem }) => {
  return (
    <div className={`${styles.modal__letter_list}`}>
      {listName.map((item, idx) => (
        <div 
          key={`${item}${idx}`} 
          id={item.id}
          className={`${styles.modal__letter_item} ${activeItem === item.id ? styles["active"] : ""}`}
          onClick={onClick}
        >
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}
export default BasicModalLetterItem;
