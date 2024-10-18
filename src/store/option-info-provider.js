/* Import */
import { useState } from "react";
import initList from "./option-list.json";
/* Context */
import { InfoContext } from "./option-info-context.js"

const InfoProvider = ({ children }) => {
  const [basicInfoList, setBasicInfoList] = useState(initList.basicInfoList);
  const [groomParentsInfoList, setGroomParentsInfoList] = useState(initList.basicParentsInfoList);
  const [brideParentsInfoList, setBrideParentsInfoList] = useState(initList.basicParentsInfoList);
  const [selectLocationFile, setSelectLocationFile] = useState(initList.selectLocationFile);
  return (
    <InfoContext.Provider
      value={{
        basicInfoList,
        setBasicInfoList,
        groomParentsInfoList,
        setGroomParentsInfoList,
        brideParentsInfoList,
        setBrideParentsInfoList,
        selectLocationFile,
        setSelectLocationFile
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export default InfoProvider;