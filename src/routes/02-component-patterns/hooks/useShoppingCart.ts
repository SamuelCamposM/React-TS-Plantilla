import { Product, ProductInCart } from "../interfaces/ProductsInterfaces";
import { useState } from "react";

export const useShoppingCart = () => {
  const [shoppingCart, setshoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});
  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setshoppingCart((oldShoppingCart) => {
      const productInCard: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };
      if (Math.max(productInCard.count + count, 0) > 0) {
        console.log(productInCard.count, count);

        productInCard.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCard,
        };
      }
      // Borrar el producto
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;
      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      //   return rest;
      // }
      // return {
      //   ...oldShoppingCart,
      //   [product.id]: { ...product, count },
      // };
    });
  };
  return { shoppingCart, onProductCountChange };
};
