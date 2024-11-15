/* Import */
import { useState } from "react";
import initList from "./option-list.json";
/* Context */
import { IntroContext } from "./option-intro-context.js"

const IntroProvider = ({ children }) => {
  const [selectIntroPhoto, setSelectIntroPhoto] = useState(initList.selectIntroPhoto);
  const [presetColors, setPresetColors] = useState(initList.presetColors);
  const [selectIntroColor, setSelectIntroColor] = useState(initList.selectIntroColor);
  const [prevIntroColor, setPrevIntroColor] = useState(initList.prevIntroColor);
  const [selectIntroWord, setSelectIntroWord] = useState(initList.selectIntroWord);
  const [introSample, setintroSample] = useState(initList.introSample);
  return (
    <IntroContext.Provider
      value={{
        selectIntroPhoto,
        setSelectIntroPhoto,
        presetColors,
        setPresetColors,
        selectIntroColor,
        setSelectIntroColor,
        prevIntroColor,
        setPrevIntroColor,
        selectIntroWord,
        setSelectIntroWord, 
        introSample,
        setintroSample, 
      }}
    >
      {children}
    </IntroContext.Provider>
  );
};

export default IntroProvider;