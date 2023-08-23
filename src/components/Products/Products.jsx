import Container from "../../layout/Container";
import styles from "./Products.module.css";
import ProductsRow from "./ProductsRow";
function Products() {
  return (
    <Container className={styles.products}>
      <ProductsRow />
      <ProductsRow />
      <ProductsRow />
    </Container>
  );
}

export default Products;
