const OptionTabFixItem = (props) => {
  return (
    <li>
      <input type="checkbox" id={props.id} />
      <label htmlFor="tabOption1">{props.optionTitle}</label>
    </li>
  )
}

export default OptionTabFixItem;