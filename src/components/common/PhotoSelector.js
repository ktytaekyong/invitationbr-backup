/* Component */
import Button from "../layout/Button";
/* CSS Module */
import styles from "../../css/module/common/PhotoSelector.module.css";


const PhotoSelector = (props) => {
  const introDeleteHandler = (item) => {
    let list = [...props.listName];
    list = list.filter((e) => e !== item);
    props.deleteFunction(list);
  }
  return (
    <div className={styles.photo__selector}>
      <ul className={styles.option__list}>
        <li className={styles.option__item}>
          <input type="file" name="" id={`${props.id}File`} onChange={props.onChange} />
          <label htmlFor={`${props.id}File`}></label>
        </li>
        <span>{props.listName.src}</span>
        {/* {
          <li className={styles.photo__item} key={props.listName.alt} style={{backgroundImage: `url(${props.listName.src})`}}>
            <Button type="button" styleType="close" content="X" />
          </li>
        } */}
        {props.listName.map((item, idx) => (
          <li className={styles.option__item} key={item.alt + idx} style={{backgroundImage: `url(${item.src})`}}>
            <Button type="button" styleType="close" content="X" onClick={() => {introDeleteHandler(item)}} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PhotoSelector;