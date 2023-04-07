import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <ProductCard className="text-white bg-dark" product={product}>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" title={"Hola mundo"} />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
        <ProductCard className="text-white bg-dark" product={product}>
          <ProductImage
            className="custom-image"
            style={{
              boxShadow: "10px 10px 10px rgb(0,0,0,0.2)",
            }}
            img={product.img}
          />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          product={product}
          style={{
            backgroundColor: "green",
          }}
        >
          <ProductImage
            style={{
              boxShadow: "10px 10px 10px rgb(0,0,0,0.2)",
            }}
          />
          <ProductTitle
            style={{
              fontWeight: "bolder",
            }}
          />
          <ProductButtons
            style={{
              backgroundColor: "green",
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
