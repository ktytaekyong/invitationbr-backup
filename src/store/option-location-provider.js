/* Import */
import { useState } from "react";
import initList from "./option-list.json";
/* Context */
import { IntroContext } from "./option-intro-context.js"

const IntroProvider = ({ children }) => {
  const [selectIntroPhoto, setSelectIntroPhoto] = useState(initList.selectIntroPhoto);
  return (
    <IntroContext.Provider
      value={{
        selectIntroPhoto,
        setSelectIntroPhoto,
      }}
    >
      {children}
    </IntroContext.Provider>
  );
};

export default IntroProvider;