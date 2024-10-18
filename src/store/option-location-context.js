/* Import */
import { createContext } from "react";

export const LocationContext = createContext({
  trafficList: [],
  setTrafficList: () => {}, 
});