/* Import */
import { useState } from "react";
import initList from "./option-list.json";
/* Context */
import { SetContext } from "./option-set-context.js"

const SetProvider = ({ children }) => {
  const [selectSettingList, setSelectSettingList] = useState(initList.selectSettingList);
  const [videoList, setVideoList] = useState(initList.videoList);
  const settingList = initList.settingList;

  return (
    <SetContext.Provider
      value={{
        settingList,
        selectSettingList,
        setSelectSettingList,
        videoList,
        setVideoList
      }}
    >
      {children}
    </SetContext.Provider>
  );
};

export default SetProvider;