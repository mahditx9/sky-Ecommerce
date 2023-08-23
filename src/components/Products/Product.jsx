import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Button from "../../UI/Button";
import styles from "./Product.module.css";
const boxItemVariants = {
  hidden: { y: "2000px", opacity: 0 },
  visible: {
    y: 0,
    transition: { duration: 0.3 },
    opacity: 1,
    staggerChildren: 0.2,
  },
};

function Product() {
  return (
    <motion.div
      variants={boxItemVariants}
      whileHover={{ scale: 1.02 }}
      className={styles.product}
    >
      <div className={styles["product-cover"]}>
        <img
          src="img/modern-multi-colored-abstract-sports-shoe-generated-by-ai.jpg"
          alt="product"
        />
        <div className={styles["product-content"]}>
          <h3>title</h3>
          <p className={styles.pricing}>
            <span>20$</span>35$<span></span>
          </p>
          <Button className={styles["add-product__btn"]}>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className={styles["shop-card-icon"]}
            ></FontAwesomeIcon>
            Add to Cards
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default Product;
