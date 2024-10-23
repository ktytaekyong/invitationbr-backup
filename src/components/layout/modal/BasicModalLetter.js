/* Import */
import { useEffect, useState } from "react";
/* Component */
import TabSelector from '../../common/TabSelector';
import BasicSelectModal from './BasicSelectModal';
import BasicModalContent from './BasicModalContent';
/* CSS Module */
import styles from "../../../css/module/layout/modal/BasicModalLetter.module.scss";

export default function BasicModalLetter({ openvar, onClose, isActiveTab, setActiveTabHandler, setLetterList }) {
  const [isDefaultActive, setIsDefaultActive] = useState(null);
  const [isParentsActive, setIsParentsActive] = useState(null);
  const [isReligionActive, setIsReligionActive] = useState(null);
  const setDefaultActiveHandler = (idx, sample) => {
    setIsDefaultActive(idx);
    setIsParentsActive(null);
    setIsReligionActive(null);
    setLetterList((prev) => (
      {
        ...prev,
        content: sample
      }
    ));
  }
  const setParentsActiveHandler = (idx, sample) => {
    setIsParentsActive(idx);
    setIsDefaultActive(null);
    setIsReligionActive(null);
    setLetterList((prev) => (
      {
        ...prev,
        content: sample
      }
    ));
  }
  const setReligionActiveHandler = (idx, sample) => {
    setIsReligionActive(idx);
    setIsParentsActive(null);
    setIsDefaultActive(null);
    setLetterList((prev) => (
      {
        ...prev,
        content: sample
      }
    ));
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
      content: "두 사람이 사랑과 믿음으로\n아름다운 한 가정을 이루게 되었습니다.\n바쁘시더라도 참석해 주셔서\n저희의 앞날을 축복해 주시고 격려해 주시면\n더 없는 기쁨이 되겠습니다.",
    },
    {
      id: "LetterSampleDafault3",
      content: "소중한 저희 두 사람의 만남이\n결실을 맺어 혼인의 예를 갖추려 합니다.\n늘 봄날처럼 밝고\n행복하게 살도록 노력하겠습니다.\n축복해 주시면 큰 기쁨이겠습니다.",
    },
    {
      id: "LetterSampleDafault4",
      content: "하늘로부터 받은 최고의 선물은 부모님이고,\n자신이 선택한 최고의 보물은 부부 입니다.\n이런 저희가 아름다운 가정을 이루고자 하니\n부디 참석해 주셔서 기쁨의 자리를 축복으로\n더욱 빛내주십시오.",
    },
  ];
  const letterSampleParentsList = [
    {
      id: "LetterSampleParents1",
      content: "오랫동안 마주 보며 다져온 사랑을\n이제 한곳을 바라보며 걸어갈 수 있는\n큰 사랑으로 키우고자 합니다.\n두 사람이 사랑의 이름으로 지켜나갈 수 있게\n축복해 주시면 감사하겠습니다.",
    },
    {
      id: "LetterSampleParents2",
      content: "두 사람이 사랑과 믿음으로\n아름다운 한 가정을 이루게 되었습니다.\n바쁘시더라도 참석해 주셔서\n저희의 앞날을 축복해 주시고 격려해 주시면\n더 없는 기쁨이 되겠습니다.",
    },
    {
      id: "LetterSampleParents3",
      content: "소중한 저희 두 사람의 만남이\n결실을 맺어 혼인의 예를 갖추려 합니다.\n늘 봄날처럼 밝고\n행복하게 살도록 노력하겠습니다.\n축복해 주시면 큰 기쁨이겠습니다.",
    },
  ];
  const letterSampleReligionList = [
    {
      id: "LetterSampleReligion3",
      content: "소중한 저희 두 사람의 만남이\n결실을 맺어 혼인의 예를 갖추려 합니다.\n늘 봄날처럼 밝고\n행복하게 살도록 노력하겠습니다.\n축복해 주시면 큰 기쁨이겠습니다.",
    },
    {
      id: "LetterSampleReligion1",
      content: "오랫동안 마주 보며 다져온 사랑을\n이제 한곳을 바라보며 걸어갈 수 있는\n큰 사랑으로 키우고자 합니다.\n두 사람이 사랑의 이름으로 지켜나갈 수 있게\n축복해 주시면 감사하겠습니다.",
    }
  ];

  const renderContent = (index) => {
    switch (index) {
      case 0:
        return (
          <div className={`${styles.modal__letter_list}`}>
            {letterSampleDafaultList.map((item, idx) => (
              <div 
                key={`${item}${idx}`} 
                className={`${styles.modal__letter_item} ${isDefaultActive === idx ? styles["active"] : ""}`}
                onClick={() => setDefaultActiveHandler(idx, item.content)}
              >
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        );
      case 1:
        return (
          <div className={`${styles.modal__letter_list}`}>
            {letterSampleParentsList.map((item, idx) => (
              <div 
              key={`${item}${idx}`} 
              className={`${styles.modal__letter_item} ${isParentsActive === idx ? styles["active"] : ""}`}
              onClick={() => setParentsActiveHandler(idx, item.content)}
              >
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        );
      case 2:
        return (
          <div className={`${styles.modal__letter_list}`}>
            {letterSampleReligionList.map((item, idx) => (
              <div 
                key={`${item}${idx}`} 
                className={`${styles.modal__letter_item} ${isReligionActive === idx ? styles["active"] : ""}`}
                onClick={() => setReligionActiveHandler(idx, item.content)}
              >
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        );
      default:
        return;
    }
  };

  return (
    <BasicSelectModal 
      openvar={openvar} 
      className={styles.modal__letter} 
      onClose={onClose} 
      ButtonWrapperUse={false}
      title="샘플문구 선택"
    >
      <BasicModalContent>
        <TabSelector listName={letterSampleThemeList} onChange={setActiveTabHandler} />
        {renderContent(isActiveTab)}
      </BasicModalContent>
    </BasicSelectModal>
  );
}
