import styles from "../styles/styles.module.css";

import useProduct from "../hooks/useProduct";
import { createContext } from "react";

import {
  InitialValues,
  Product,
  ProductCardHandlers,
  ProductContextProps,
  onChangeArgs,
} from "../interfaces/ProductsInterfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  // const [counter, setcounter] = useState(0);
  // const increaseBy = (value: number) => {
  // setcounter((prev) => Math.max(prev + value, 0));
  // };
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          count: counter,
          isMaxCountReached: isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
