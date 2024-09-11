/* Component */
import Button from "../layout/Button";
/* CSS Module */
import styles from "../../css/module/common/OptionSelector.module.css";


const PhotoSelector = (props) => {
  const introDeleteHandler = (item) => {
    let list = [...props.listTitle];
    list = list.filter((e) => e !== item);
    props.deleteFunction(list);
  }
  return (
    <div className={styles.photo__selector}>
      <ul className={styles.photo__list}>
        <li className={styles.photo__item}>
          <input type="file" name="" id="introFile" onChange={props.onChange} />
          <label htmlFor="introFile"></label>
        </li>
        <span>{props.listTitle.src}</span>
        {/* {
          <li className={styles.photo__item} key={props.listTitle.alt} style={{backgroundImage: `url(${props.listTitle.src})`}}>
            <Button type="button" styleType="close" content="X" />
          </li>
        } */}
        {props.listTitle.map((item, idx) => (
          <li className={styles.photo__item} key={item.alt + idx} style={{backgroundImage: `url(${item.src})`}}>
            <Button type="button" styleType="close" content="X" onClick={() => {introDeleteHandler(item)}} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PhotoSelector;