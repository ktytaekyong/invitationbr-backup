/* Import */
import { useState, useContext } from "react";
/* Component */
import TabSelector from '../../common/TabSelector';
import BasicSelectModal from './BasicSelectModal';
import BasicModalContent from './BasicModalContent';
import BasicModalLetterItem from './BasicModalLetterItem';
/* CSS Module */
import styles from "../../../css/module/layout/modal/BasicModalLetter.module.scss";
/* Context */
import { SetContext } from "../../../store/option-set-context.js";

const BasicModalLetter = ({ openvar, onClose }) => {
  const { letterList, setLetterList } = useContext(SetContext);
  const [ activeTab, setActiveTab ] = useState(0);
  const [ activeItem, setActiveItem ] = useState(null);
  const [ sample, setSample ] = useState(letterList.content);
  const letterChangeHandler = (e) => {
    const { id } = e.target;
    setActiveItem(id);
    let sampleContent = sample;
    if (id.includes("SampleDafault")) {
      letterSampleDafaultList.forEach((item) => {
        if (item.id === id) {
          sampleContent = item.content;
        }
      });
    } else if (id.includes("SampleParents")) {
      letterSampleParentsList.forEach((item) => {
        if (item.id === id) {
          sampleContent = item.content;
        }
      });
    } else if (id.includes("SampleReligion")) {
      letterSampleReligionList.forEach((item) => {
        if (item.id === id) {
          sampleContent = item.content;
        }
      });
    }
    setSample(sampleContent);
    setLetterList((prev) => ({
      ...prev,
      content: sampleContent,
    }));
  }
  const letterSampleThemeList = [
    {
      title: "일반",
      id: "LetterSampleDafault",
    },
    {
      title: "혼주",
      id: "LetterSampleParents",
    },
    {
      title: "종교",
      id: "LetterSampleReligion",
    },
  ]; 
  const letterSampleDafaultList = [
    {
      id: "LetterSampleDafault1",
      content: "오랫동안 마주 보며 다져온 사랑을\n이제 한곳을 바라보며 걸어갈 수 있는\n큰 사랑으로 키우고자 합니다.\n두 사람이 사랑의 이름으로 지켜나갈 수 있게\n축복해 주시면 감사하겠습니다.",
    },
    {
      id: "LetterSampleDafault2",
      content: "두 사람이 사랑과 믿음으로\n아름다운 한 가정을 이루게 되었습니다.\n바쁘시더라도 참석해 주셔서\n저희의 앞날을 축복해 주시고\n격려해 주시면 더 없는 기쁨이 되겠습니다.",
    },
    {
      id: "LetterSampleDafault3",
      content: "소중한 저희 두 사람의 만남이\n결실을 맺어 혼인의 예를 갖추려 합니다.\n늘 봄날처럼 밝고\n행복하게 살도록 노력하겠습니다.\n축복해 주시면 큰 기쁨이겠습니다.",
    },
    {
      id: "LetterSampleDafault4",
      content: "하늘로부터 받은 최고의 선물은 부모님이고,\n자신이 선택한 최고의 보물은 부부 입니다.\n이런 저희가 아름다운 가정을 이루고자 하니\n부디 참석해 주셔서 기쁨의 자리를 축복으로\n더욱 빛내주십시오.",
    },
    {
      id: "LetterSampleDafault5",
      content: "오래 전 인연이 저희를 연인으로 만들었고,\n지금 그 인연으로 하나가 됩니다.\n아직은 많이 부족하지만\n늘 그 인연을 생각하며 서로 아껴주고\n사랑하며 살겠습니다.\n오셔서 지켜봐 주시고 축하해 주십시오.",
    },
    {
      id: "LetterSampleDafault6",
      content: "사랑이란 이름 앞에 둘이 하나가 되는\n인연을 맺고자 합니다.\n화사하게 수놓은 청명한 햇살처럼\n서로 아끼며 밝고 건강하게 살겠습니다.\n부디 참석하시어 축복의 말씀을 들려주십시오.",
    },
  ];
  const letterSampleParentsList = [
    {
      id: "LetterSampleParents1",
      content: "평생 함께 있을 것 같던 자녀가\n아름다운 인연을 만나 사랑을 하고\n이제 평생의 동반자로 출발하려 합니다.\n첫걸음을 내딛는 이들의 출발을\n귀한 걸음 하시어\n사랑으로 함께 축복해 주시면\n더없는 기쁨으로 간직하겠습니다.",
    },
    {
      id: "LetterSampleParents2",
      content: "딸을 얻는 기쁨, 아들을 얻는 행복으로\n청첩의 인사를 드립니다.\n바쁘시고 어려운 시간이지만 \n한 쌍의 원앙이 되어 \n날개를 펴는 이들의 앞날을 \n축복과 격려해 주시고 \n소중한 덕담을 나누어 주시기를 소망합니다.",
    },
    {
      id: "LetterSampleParents3",
      content: "아들과 딸이 한 가정을 이루고자\n혼인의 예를 올리게 되었습니다.\n귀한 걸음 하시어\n두 집안의 경사를 축하해 주시고\n첫걸음을 내딛는 이들의 출발을\n함께 축복하고 격려해 주시면\n더 없는 기쁨으로 간직하겠습니다.",
    },
    {
      id: "LetterSampleParents4",
      content: "저희 아들과 딸이 사랑과 믿음으로\n평생을 함께 할 동반자가 되려 합니다.\n더욱 단단한 사랑의 결실을 위하여\n인내와 배려로 함께하기로 한 이 두 사람을 위해\n귀한 걸음 하시어 축복과 격려의 말씀으로\n함께해 주시면 감사하겠습니다.",
    },
    {
      id: "LetterSampleParents5",
      content: "사랑이 묻어나는 계절입니다.\n여기 곱고 예쁜 두 사람이 사랑을 맺어\n인생의 반려자가 되려 합니다.\n새 인생을 시작하는 이 자리에 오셔서\n축복해 주시면 감사하겠습니다.",
    },
  ];
  const letterSampleReligionList = [
    {
      id: "LetterSampleReligion1",
      content: "하나님의 은혜로 여러 어른들과 가족, 친지들을 모시고\n결혼 예배를 올리게 되었습니다.\n이제 저희 두 사람 하나님이 짝지어 주시어\n거룩한 조상이 되기를 힘쓰겠습니다.\n주님의 뜻대로\n하나님만 섬기는 가정, 믿음의 가정이 될 수 있도록\n오셔서 축복해 주시면 감사하겠습니다.",
    },
    {
      id: "LetterSampleReligion2",
      content: "하나님의 은혜 속에 사랑과 신뢰의 저희 두 사람은\n여러분들을 모시고 화촉을\n밝히게 되었습니다.\n부디 함께 하셔서 기쁨을 나누어주시고\n참석하지 못하시더라도 저희 앞날을\n위해 기도를 부탁드립니다.",
    },
    {
      id: "LetterSampleReligion3",
      content: "주님의 크신 은혜와 여러분의 사랑 가운데,\n한마음 한뜻으로\n새로운 삶의 길을 떠나고자 하오니,\n부디 오셔서 저희 두 사람의 하나 됨을\n따뜻한 마음으로\n격려해 주시기 바랍니다.",
    },
    {
      id: "LetterSampleReligion4",
      content: "하나님의 사랑으로 만난\n두 사람이 이제 새로운 가정을\n이루는 아름다운 약속을 하려 합니다.\n언제나 아름답고 주위에 사랑을\n나누는 행복한 가정을 이루도록\n오셔서 축복해 주시고 지켜봐 주십시오.",
    }
  ];
  return (
  <BasicSelectModal   
    openvar={openvar} 
    className={styles.modal__letter} 
    onClose={onClose} 
    ButtonWrapperUse={false}
    title="샘플문구 선택"
  >
    <BasicModalContent>
      <TabSelector 
        listName={letterSampleThemeList} 
        id="letterSampleSelector"
        type="sample"
        onClick={setActiveTab}
        activeTab={activeTab}
      />
        {
          activeTab === 0 ? 
          <BasicModalLetterItem 
            listName={letterSampleDafaultList}
            activeItem={activeItem}
            onClick={(e) => letterChangeHandler(e)}
          />
          : null
        }
        {
          activeTab === 1 ? 
          <BasicModalLetterItem 
            listName={letterSampleParentsList}
            activeItem={activeItem}
            onClick={(e) => letterChangeHandler(e)}
          />
          : null
        }
        {
          activeTab === 2 ? 
          <BasicModalLetterItem 
            listName={letterSampleReligionList}
            activeItem={activeItem}
            onClick={(e) => letterChangeHandler(e)}
          />
          : null
        }
        
      </BasicModalContent>
    </BasicSelectModal>
  );
}
export default BasicModalLetter;