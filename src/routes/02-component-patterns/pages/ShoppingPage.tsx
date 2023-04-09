import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { ProductInCart } from "../interfaces/ProductsInterfaces";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {
   
  const {  shoppingCart, onProductCountChange } = useShoppingCart();
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
        {/* <ProductCard className="text-white bg-dark" product={product}>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" title={"Hola mundo"} />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard> */}
        {products.map((producto) => (
          <ProductCard
            key={producto.id}
            className="text-white bg-dark"
            product={producto}
            onChange={(evento) => onProductCountChange(evento)}
            value={shoppingCart[producto.id]?.count || 0}
          >
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: "10px 10px 10px rgb(0,0,0,0.2)",
              }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.values(shoppingCart).map((producto: ProductInCart) => (
          <ProductCard
            className="text-white bg-dark"
            style={{ width: "100px" }}
            product={producto}
            key={producto.id}
            onChange={(evento) => onProductCountChange(evento)}
            value={producto.count}
          >
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: "10px 10px 10px rgb(0,0,0,0.2)",
              }}
            />

            <ProductButtons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
