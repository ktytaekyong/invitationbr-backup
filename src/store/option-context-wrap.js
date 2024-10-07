/* Context */
import { BackgroundContext } from "./option-background-context.js";
import initList from "./option-list.json";
/* Context Component */
import TabProvider from "./option-tab-provider.js"
import SetProvider from "./option-set-provider.js"

const ContextWrap = ({ children }) => {
  return (
    <>
      <SetProvider>
        <TabProvider>
          <BackgroundContext.Provider value={{ backgroundList: initList.backgroundList }}>
            {children}
          </BackgroundContext.Provider>
        </TabProvider>
      </SetProvider>
    </>
  )
}

export default ContextWrap;