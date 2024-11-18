/* Component */
import Container from "../layout/Container";
import SettingList from "../common/SettingList";
/* CSS Module */
import styles from "../../css/module/page/Produce.module.scss";

const Produce = () => {
  return (
    <section className={styles.produce}>
      <Container>
        <SettingList />
      </Container>
    </section>
  )
}

export default Produce;