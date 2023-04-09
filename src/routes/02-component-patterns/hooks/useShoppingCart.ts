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
    console.log({ count });

    setshoppingCart((oldShoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }
      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };
  return { shoppingCart, onProductCountChange };
};
