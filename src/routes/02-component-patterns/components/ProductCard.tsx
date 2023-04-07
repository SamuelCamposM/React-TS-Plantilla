import styles from "../styles/styles.module.css";

import useProduct from "../hooks/useProduct";
import { createContext } from "react";

import {
  ProductCardProps,
  ProductContextProps,
} from "../interfaces/ProductsInterfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product: { id, title, img },
  product,
}: ProductCardProps) => {
  // const [counter, setcounter] = useState(0);
  // const increaseBy = (value: number) => {
  // setcounter((prev) => Math.max(prev + value, 0));
  // };
  const { counter, increaseBy } = useProduct();
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
