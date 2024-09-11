/* Context */
import { TabContext } from "./option-tab-context.js";
import { BackgroundContext } from "./option-background-context.js";
import initList from "./option-list.json";

const ContextWrap = ({ children }) => {
  return (
    <>
      <TabContext.Provider value={{ 
        tabList: initList.tabList,
        basicTabList: initList.basicTabList,
        }}>
        <BackgroundContext.Provider value={{ backgroundList: initList.backgroundList }}>
          {children}
        </BackgroundContext.Provider>
      </TabContext.Provider>
    </>
  )
}

export default ContextWrap;