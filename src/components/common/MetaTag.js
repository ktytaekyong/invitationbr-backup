// Import
import { useContext } from "react";
import { Helmet } from "react-helmet";
/* Context */
import { SetContext } from "../../store/option-set-context.js";

const MetaTag = () => {
  const { selectOptionList, kakaoInfoList, setKakaoInfoList } = useContext(SetContext);
  return (
    <Helmet>
      <title>청첩장 만들기</title>
      {
        selectOptionList.zoomOption ? 
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        :
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      }
      <meta property="og:title" content={kakaoInfoList[0].title} />
      <meta property="og:description" content={kakaoInfoList[0].description} />
      <meta property="og:image" content={kakaoInfoList[0].src} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
    </Helmet>
  )
}

export default MetaTag;