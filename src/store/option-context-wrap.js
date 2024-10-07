/* Context */
import { BackgroundContext } from "./option-background-context.js";
import initList from "./option-list.json";
/* Context Component */
import TabProvider from "./option-tab-provider.js"
import InfoProvider from "./option-info-provider.js"
import SetProvider from "./option-set-provider.js"

const ContextWrap = ({ children }) => {
  return (
    <>
      <SetProvider>
        <InfoProvider>
          <TabProvider>
            <BackgroundContext.Provider value={{ backgroundList: initList.backgroundList }}>
              {children}
            </BackgroundContext.Provider>
          </TabProvider>
        </InfoProvider>
      </SetProvider>
    </>
  )
}

export default ContextWrap;