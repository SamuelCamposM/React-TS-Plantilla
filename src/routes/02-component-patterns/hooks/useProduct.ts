import { useState, useEffect, useRef } from "react";
import {
  InitialValues,
  Product,
  onChangeArgs,
} from "../interfaces/ProductsInterfaces";
interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setcounter] = useState<number>(initialValues?.count || value);
  console.log({ initialValues });
  const isMounted = useRef(false);
  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    newValue = Math.min(newValue, initialValues?.maxCount || newValue);
    setcounter(newValue);
    onChange && onChange({ count: newValue, product });
  };
  const reset = () => {
    setcounter(initialValues?.count || value);
  };
  useEffect(() => {
    if (!isMounted.current) return;
    setcounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    reset,
  };
};

export default useProduct;
