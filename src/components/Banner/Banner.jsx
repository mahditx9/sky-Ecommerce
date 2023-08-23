import Container from "../../layout/Container";
import styles from "./Banner.module.css";
import Timer from "./Timer";
function Banner() {
  return (
    <Container className={styles["offer-baner"]}>
      <div className={styles["offer-cover"]}>
        <img
          src="sport-shoe-illustration-blue-backdrop-generated-by-ai_prev_ui.png"
          alt="offer-banner"
        />
      </div>
      <div className={styles["offer-content__box"]}>
        <div className={styles["offer-content"]}>
          <h4 className={styles.title}>Deals Of The Mounts</h4>
          <h3>Buy 1 Ice Cream Tubs And Get 1 Free</h3>
          <span>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard
          </span>
          <Timer />
        </div>
      </div>
    </Container>
  );
}

export default Banner;
