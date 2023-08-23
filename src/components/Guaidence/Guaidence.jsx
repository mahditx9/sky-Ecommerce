import Guaid from "./Guaid";
import styles from "./Guaidence.module.css";
const GUAIDENCE_DATA = [
  {
    id: 1,
    title: "Great Daily Deal",
    description: "When you sign up",
    src: "svg/buy.gif",
  },
  {
    id: 2,
    title: "Best Price & Offers",
    description: "Order $50 Or More",
    src: "svg/shoe.gif",
  },
  {
    id: 3,
    title: "Free Delivary",
    description: "24/7 amazing services",
    src: "svg/truck.gif",
  },
  {
    id: 4,
    title: "Wide Assortment",
    description: "Wide Assortment",
    src: "svg/black-friday.gif",
  },
  {
    id: 5,
    title: "Easy Returns",
    description: "Whithin 30 Days",
    src: "svg/black-friday.gif",
  },
];
function Guaidence() {
  return (
    <div className={styles.guaidence}>
      {GUAIDENCE_DATA.map((guaide) => (
        <Guaid
          key={guaide.id}
          title={guaide.title}
          description={guaide.description}
          src={guaide.src}
        />
      ))}
    </div>
  );
}

export default Guaidence;
