import { useState, createContext } from "react";
import shopdata from "../shopdata.json";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(shopdata);
  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
