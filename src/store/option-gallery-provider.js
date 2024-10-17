/* Import */
import { useState } from "react";
import initList from "./option-list.json";
/* Context */
import { GalleryContext } from "./option-gallery-context.js"

const GalleryProvider = ({ children }) => {
  const [selectGalleryPhotoList, setSelectGalleryPhotoList] = useState(initList.selectGalleryPhotoList);
  return (
    <GalleryContext.Provider
      value={{
        selectGalleryPhotoList,
        setSelectGalleryPhotoList,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryProvider;