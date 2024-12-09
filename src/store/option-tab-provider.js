/* Import */
import { useState } from "react";
import initList from "./option-list.json";
/* Context */
import { TabContext } from "./option-tab-context.js"

const TabProvider = ({ children }) => {
  const [selectTabList, setSelectTabList] = useState(initList.selectTabList);
  const basicTabList = initList.basicTabList;
  const [isTabActive, setIsTabActive] = useState(false);
  return (
    <TabContext.Provider
      value={{
        selectTabList,
        basicTabList,
        setSelectTabList,
        isTabActive,
        setIsTabActive
      }}
    >
      {children}
    </TabContext.Provider>
  );
};

export default TabProvider;