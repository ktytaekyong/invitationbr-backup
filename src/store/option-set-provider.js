/* Import */
import { useState } from "react";
import initList from "./option-list.json";
/* Context */
import { SetContext } from "./option-set-context.js"

const SetProvider = ({ children }) => {
  const [selectSettingList, setSelectSettingList] = useState(initList.selectSettingList);
  const [accountInfoList, setAccountInfoList] = useState(initList.accountInfoList);
  const [videoList, setVideoList] = useState(initList.videoList);
  const [noticeTList, setNoticeTList] = useState(initList.noticeTList);
  const [selectNoticeT, setSelectNoticeT] = useState("noticeTab1");
  const settingList = initList.settingList;

  return (
    <SetContext.Provider
      value={{
        settingList,
        selectSettingList,
        setSelectSettingList,
        accountInfoList,
        setAccountInfoList,
        videoList,
        setVideoList,
        noticeTList,
        setNoticeTList,
        selectNoticeT,
        setSelectNoticeT, 
      }}
    >
      {children}
    </SetContext.Provider>
  );
};

export default SetProvider;