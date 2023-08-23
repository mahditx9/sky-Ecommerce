import { motion } from "framer-motion";
import Product from "./Product";
import ProductBanner from "./ProductBanner";
import styles from "./ProductsRow.module.css";
const rowVariants = {
  hidden: { y: "2000px", opacity: 0 },
  visible: {
    y: 0,
    transition: { duration: 0.5, when: "beforeChildren" },
    opacity: 1,
  },
};

function ProductsRow() {
  console.log(rowVariants);
  return (
    <motion.div
      className={styles.row}
      variants={rowVariants}
      initial="hidden"
      animate="visible"
    >
      <Product />
      <Product />
      <Product />
      <ProductBanner />
    </motion.div>
  );
}

export default ProductsRow;
