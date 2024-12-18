/* import */
import { useContext } from "react";
import { Link } from "react-router-dom";
/* CSS Module */
import styles from "../../css/module/sub/SubTitleTab.module.scss";
/* Context */
import { SetContext } from "../../store/option-set-context.js";
/* Image */

const SubTitleTab = ({ tabList }) => {
  const { isMobile } = useContext(SetContext);
  return (
    <div className={styles.sub__title_tap}>
      <div className={styles.sub__title_tap_wrap}>
        <ul>
          {tabList.map((item, idx) => (
            <li key={item.title + idx}>
              <Link to={item.link} className={styles.active}><span>{item.title}(0)</span></Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SubTitleTab;