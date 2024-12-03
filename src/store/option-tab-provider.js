/* Import */
import { useState } from "react";
import initList from "./option-list.json";
/* Context */
import { TabContext } from "./option-tab-context.js"

const TabProvider = ({ children }) => {
  const [selectTabList, setSelectTabList] = useState(initList.selectTabList);
  const basicTabList = initList.basicTabList;
  return (
    <TabContext.Provider
      value={{
        selectTabList,
        basicTabList,
        setSelectTabList
      }}
    >
      {children}
    </TabContext.Provider>
  );
};

export default TabProvider;