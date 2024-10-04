/* Component */
import Button from "../layout/Button.js";
/* CSS Module */
import styles from "../../css/module/common/BgMusicSettingPlayer.module.css";
/* Image */
import bgmCoverImg from "../../img/bgm/bgm_cover.png";
import bgmCdImg from "../../img/bgm/bgm_cd.png";
import bgmPlayImg from "../../img/icon/icon_play.png";

const BgMusicSettingPlayer = () => {
  const active = null;
  return (
    <div className={styles.bg__Player_wrap}>
      <div className={styles.info__wrap}>
        <div className={styles.info}>
          <div className={styles.album}>
            <div className={styles.cover}>
              <img src={bgmCoverImg} alt="" />
              <div className={`${styles.cd} ${styles.active}`}>
                <img src={bgmCdImg} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.title__wrap}>
            <div className={styles.title}>I Get To Love You</div>
            <div className={styles.author}>RUELLE</div>
          </div>
        </div>
        <div className={styles.player}>
          <img src={bgmPlayImg} alt="" />
        </div>
      </div>
      <div className={styles.timeline__wrap}>
        <div className={styles.timeline}>
          <div className={styles.timeline__current}></div>
          <div className={styles.timeline__view}></div>
        </div>
        <div className={styles.time}>
          <span>0:19</span>
          <span>/</span>
          <span>3:21</span>
        </div>
      </div>
    </div>
  )
}

export default BgMusicSettingPlayer;