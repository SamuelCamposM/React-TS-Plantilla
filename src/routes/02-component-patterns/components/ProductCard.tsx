import styles from "../styles/styles.module.css";

import useProduct from "../hooks/useProduct";
import { ReactElement, createContext } from "react";

import { Product, ProductContextProps } from "../interfaces/ProductsInterfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}
export const ProductCard = ({ children, product, className, style }: Props) => {
  console.log({ className });

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
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};
