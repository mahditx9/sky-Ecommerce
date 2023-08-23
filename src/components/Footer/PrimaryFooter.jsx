import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaypal,
  faCcVisa,
  faGooglePay,
  faAlipay,
  faApplePay,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./PrimaryFooter.module.css";
function PrimaryFooter() {
  return (
    <div className={styles.col}>
      <div className={styles["logo-box"]}>
        <img src="svg/c1b7f519-1845-4687-8ae1-139ac68ea233-7.svg" alt="" />
      </div>
      <p>
        lorem ipsum dollor asjkdhhasjdhkjashj askjdlj asljdiiod fopkthpor
        xxmcvnnjs ajuyqw
      </p>
      <div className={styles["payments-box"]}>
        <h4>Payment Accepted</h4>
        <div className={styles.payments}>
          <FontAwesomeIcon
            className={styles["payment-icon"]}
            icon={faPaypal}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className={styles["payment-icon"]}
            icon={faGooglePay}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className={styles["payment-icon"]}
            icon={faAlipay}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className={styles["payment-icon"]}
            icon={faApplePay}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className={styles["payment-icon"]}
            icon={faCcVisa}
          ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
}

export default PrimaryFooter;
