/* Context */
import { BackgroundContext } from "./option-background-context.js";
import initList from "./option-list.json";
/* Context Component */
import TabProvider from "./option-tab-provider.js"

const ContextWrap = ({ children }) => {
  return (
    <>
      <TabProvider>
        <BackgroundContext.Provider value={{ backgroundList: initList.backgroundList }}>
          {children}
        </BackgroundContext.Provider>
      </TabProvider>
    </>
  )
}

export default ContextWrap;