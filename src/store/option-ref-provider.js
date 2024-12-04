/* Import */
import { useRef, useEffect } from "react";
/* Context */
import { RefContext } from "./option-ref-context.js"

const RefProvider = ({ children }) => {
  const letterRef = useRef(null);
  return (
    <RefContext.Provider
      value={{
        letterRef,
        // openSettingTab,
        // setOpenSettingTab
      }}
    >
      {children}
    </RefContext.Provider>
  );
};

export default RefProvider;