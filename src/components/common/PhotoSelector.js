/* CSS Module */
import styles from "../../css/module/common/OptionSelector.module.css";

const PhotoSelector = (props) => {
  return (
    <div class={styles.photo__selector}>
      <ul class={styles.photo__list}>
        <li class={styles.photo__item}>
          <input type="file" name="" id="" />
        </li>
        {props.listTitle.map((item, idx) => (
          <li class={styles.photo__item} key={item.alt + idx}>
            <img src={item.src} alt={item.alt} />
          </li>
        ))}
      </ul>
      {/* {props.listTitle.map((item, index) => (
        <option value={item.value} key={item + index}>{item.name}</option>
      ))} */}
    </div>
  )
}

export default PhotoSelector;