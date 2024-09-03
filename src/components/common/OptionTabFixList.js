/* Component */
import OptionTabFixItem from "../common/OptionTabFixItem";

const OptionTabFixList = () => {
  return (
    <ul className="option__list">
      <OptionTabFixItem id={`tabOption${1}`} optionTitle="모시는 글" />
      <OptionTabFixItem id={`tabOption${2}`} optionTitle="예식 일시" />
    </ul>
  )
}

export default OptionTabFixList;