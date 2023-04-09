import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";

import { ProductCardHandlers } from "../interfaces/ProductsInterfaces";
import "../styles/custom-styles.css";
const product = products[0];
export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <ProductCard
        key={product.id}
        className="text-white bg-dark"
        product={product}
        initialValues={{
          count:6,
 
        }}
      >
        {({
          reset,
          count,
          increaseBy,
          maxCount,
          isMaxCountReached,
        }: ProductCardHandlers) => {
          return (
            <>
              <ProductImage
                className="custom-image"
                style={{
                  boxShadow: "10px 10px 10px rgb(0,0,0,0.2)",
                }}
              />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
              <button onClick={() => reset()}>RESET</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!!isMaxCountReached ? null : (
                <button onClick={() => increaseBy(2)}>+2</button>
              )}
              <span>
                {count} - {maxCount}
              </span>
            </>
          );
        }}
      </ProductCard>
    </div>
  );
};
