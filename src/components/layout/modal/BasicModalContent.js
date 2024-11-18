/* CSS Module */
import styles from "../../../css/module/layout/modal/BasicModalContent.module.scss";

const BasicModalContent = ({ children }) => {
  return (
    <div className={styles.modal__content}>
      {children}
    </div>
  );
}

export default BasicModalContent;
