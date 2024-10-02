/* Import */
import { useState, useEffect } from "react";
/* Component */
/* CSS Module */

const RadioItem = ({ id, radioName, content, defaultChecked }) => {
  const [radioActive, setRadioActive] = useState(false);
  return (
    <div>
      <input type='radio' name={radioName} id={id} defaultChecked={defaultChecked} />
      <label htmlFor={id}>{content}</label>
    </div>
  );
};

export default RadioItem;
