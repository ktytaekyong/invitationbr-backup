/* Import */
import { useEffect, useState } from "react";
/* Component */
import TabSelector from '../../common/TabSelector';
import BasicSelectModal from './BasicSelectModal';
import BasicModalContent from './BasicModalContent';
/* CSS Module */
import styles from "../../../css/module/layout/modal/BasicModalLetter.module.scss";

export default function BasicModalLetter({ openvar, onClose, isActiveTab, setActiveTabHandler }) {
  const [isDefaultActive, setIsDefaultActive] = useState(null);
  const [isParentsActive, setIsParentsActive] = useState(null);
  const [isReligionActive, setIsReligionActive] = useState(null);
  const setDefaultActiveHandler = (idx) => {
    setIsDefaultActive(idx);
    setIsParentsActive(null);
    setIsReligionActive(null);
  }
  const setParentsActiveHandler = (idx) => {
    setIsParentsActive(idx);
    setIsDefaultActive(null);
    setIsReligionActive(null);
  }
  const setReligionActiveHandler = (idx) => {
    setIsReligionActive(idx);
    setIsParentsActive(null);
    setIsDefaultActive(null);
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
      content: "오랫동안 마주 보며 다져온 사랑을 이제 한곳을 바라보며 걸어갈 수 있는 큰 사랑으로 키우고자 합니다. 두 사람이 사랑의 이름으로 지켜나갈 수 있게 축복해 주시면 감사하겠습니다.",
    },
    {
      id: "LetterSampleDafault2",
      content: "두 사람이 사랑과 믿음으로 아름다운 한 가정을 이루게 되었습니다. 바쁘시더라도 참석해 주셔서 저희의 앞날을 축복해 주시고 격려해 주시면 더 없는 기쁨이 되겠습니다.",
    },
    {
      id: "LetterSampleDafault3",
      content: "소중한 저희 두 사람의 만남이 결실을 맺어 혼인의 예를 갖추려 합니다. 늘 봄날처럼 밝고 행복하게 살도록 노력하겠습니다. 축복해 주시면 큰 기쁨이겠습니다.",
    },
    {
      id: "LetterSampleDafault4",
      content: "하늘로부터 받은 최고의 선물은 부모님이고, 자신이 선택한 최고의 보물은 부부 입니다. 이런 저희가 아름다운 가정을 이루고자 하니 부디 참석해 주셔서 기쁨의 자리를 축복으로 더욱 빛내주십시오.",
    },
  ];
  const letterSampleParentsList = [
    {
      id: "LetterSampleParents1",
      content: "오랫동안 마주 보며 다져온 사랑을 이제 한곳을 바라보며 걸어갈 수 있는 큰 사랑으로 키우고자 합니다. 두 사람이 사랑의 이름으로 지켜나갈 수 있게 축복해 주시면 감사하겠습니다.",
    },
    {
      id: "LetterSampleParents2",
      content: "두 사람이 사랑과 믿음으로 아름다운 한 가정을 이루게 되었습니다. 바쁘시더라도 참석해 주셔서 저희의 앞날을 축복해 주시고 격려해 주시면 더 없는 기쁨이 되겠습니다.",
    },
    {
      id: "LetterSampleParents3",
      content: "소중한 저희 두 사람의 만남이 결실을 맺어 혼인의 예를 갖추려 합니다. 늘 봄날처럼 밝고 행복하게 살도록 노력하겠습니다. 축복해 주시면 큰 기쁨이겠습니다.",
    },
  ];
  const letterSampleReligionList = [
    {
      id: "LetterSampleReligion3",
      content: "소중한 저희 두 사람의 만남이 결실을 맺어 혼인의 예를 갖추려 합니다. 늘 봄날처럼 밝고 행복하게 살도록 노력하겠습니다. 축복해 주시면 큰 기쁨이겠습니다.",
    },
    {
      id: "LetterSampleReligion1",
      content: "오랫동안 마주 보며 다져온 사랑을 이제 한곳을 바라보며 걸어갈 수 있는 큰 사랑으로 키우고자 합니다. 두 사람이 사랑의 이름으로 지켜나갈 수 있게 축복해 주시면 감사하겠습니다.",
    }
  ];

  useEffect(() => {
  }, [isActiveTab]);

  const renderContent = (index) => {
    switch (index) {
      case 0:
        return (
          <div className={`${styles.modal__letter_list}`}>
            {letterSampleDafaultList.map((item, idx) => (
              <div 
                key={`${item}${idx}`} 
                className={`${styles.modal__letter_item} ${isDefaultActive === idx ? styles["active"] : ""}`}
                onClick={() => setDefaultActiveHandler(idx)}
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
              onClick={() => setParentsActiveHandler(idx)}
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
                onClick={() => setReligionActiveHandler(idx)}
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
