/* Import */
import { useState } from "react";
import initList from "./option-list.json";
/* Context */
import { InfoContext } from "./option-info-context.js"

const InfoProvider = ({ children }) => {
  const [basicInfoList, setBasicInfoList] = useState(initList.basicInfoList);
  return (
    <InfoContext.Provider
      value={{
        basicInfoList,
        setBasicInfoList,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export default InfoProvider;