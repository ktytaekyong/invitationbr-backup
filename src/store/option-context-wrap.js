/* Context */
import { BackgroundContext } from "./option-background-context.js";
import initList from "./option-list.json";
/* Context Component */
import TabProvider from "./option-tab-provider.js"
import InfoProvider from "./option-info-provider.js"
import IntroProvider from "./option-intro-provider.js"
import SetProvider from "./option-set-provider.js"
import LocationProvider from "./option-location-provider.js";
import GalleryProvider from "./option-gallery-provider.js";

const ContextWrap = ({ children }) => {
  return (
    <>
      <SetProvider>
        <InfoProvider>
          <IntroProvider>
            <TabProvider>
              <LocationProvider>
                <GalleryProvider>
                  <BackgroundContext.Provider value={{ backgroundList: initList.backgroundList }}>
                    {children}
                  </BackgroundContext.Provider>
                </GalleryProvider>
              </LocationProvider>
            </TabProvider>
          </IntroProvider>
        </InfoProvider>
      </SetProvider>
    </>
  )
}

export default ContextWrap;