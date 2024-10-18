/* Import */
import { useState } from "react";
import initList from "./option-list.json";
/* Context */
import { LocationContext } from "./option-location-context.js"

const LocationProvider = ({ children }) => {
  const [trafficList, setTrafficList] = useState(initList.trafficList);
  return (
    <LocationContext.Provider
      value={{
        trafficList,
        setTrafficList,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;