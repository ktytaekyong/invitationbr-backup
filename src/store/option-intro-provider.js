/* Import */
import { useState } from "react";
import initList from "./option-list.json";
/* Context */
import { IntroContext } from "./option-intro-context.js"

const IntroProvider = ({ children }) => {
  const [selectIntroPhoto, setSelectIntroPhoto] = useState(initList.selectIntroPhoto);
  const [presetColors, setPresetColors] = useState(initList.presetColors);
  const [selectIntroColor, setSelectIntroColor] = useState(initList.selectIntroColor);
  return (
    <IntroContext.Provider
      value={{
        selectIntroPhoto,
        setSelectIntroPhoto,
        presetColors,
        setPresetColors,
        selectIntroColor,
        setSelectIntroColor,
      }}
    >
      {children}
    </IntroContext.Provider>
  );
};

export default IntroProvider;