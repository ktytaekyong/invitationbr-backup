/* Import */
import { useState } from "react";
import initList from "./option-list.json";
/* Context */
import { SetContext } from "./option-set-context.js"

const SetProvider = ({ children }) => {
  const [settingOrderList, setSettingOrderList] = useState(initList.settingOrderList);
  const [kakaoInfoList, setKakaoInfoList] = useState(initList.kakaoInfoList);
  const [urlInfoList, setUrlInfoList] = useState(initList.urlInfoList);
  const [selectSettingList, setSelectSettingList] = useState(initList.selectSettingList);
  const [accountInfoList, setAccountInfoList] = useState(initList.accountInfoList);
  const [videoList, setVideoList] = useState(initList.videoList);
  const [noticeTList, setNoticeTList] = useState(initList.noticeTList);
  const [noticeDList, setNoticeDList] = useState(initList.noticeDList);
  const [letterList, setLetterList] = useState(initList.letterList);
  const [outroList, setOutroList] = useState(initList.outroList);
  const [selectNoticeT, setSelectNoticeT] = useState(0);
  const [guestbookList, setGuestbookList] = useState(initList.guestbookList);
  const [selectOptionList, setSelectOptionList] = useState(initList.selectOptionList);
  const settingList = initList.settingList;

  return (
    <SetContext.Provider
      value={{
        kakaoInfoList,
        setKakaoInfoList, 
        urlInfoList,
        setUrlInfoList, 
        settingList,
        settingOrderList,
        setSettingOrderList,
        selectSettingList,
        setSelectSettingList,
        accountInfoList,
        setAccountInfoList,
        videoList,
        setVideoList,
        noticeTList,
        setNoticeTList,
        noticeDList,
        setNoticeDList,
        selectNoticeT,
        setSelectNoticeT,
        outroList,
        setOutroList,
        letterList,
        setLetterList,
        guestbookList,
        setGuestbookList,
        selectOptionList,
        setSelectOptionList
      }}
    >
      {children}
    </SetContext.Provider>
  );
};

export default SetProvider;