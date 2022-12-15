import { useState, useEffect } from "react";
import { getProducts } from "./product";
import { Context } from "./context";
import ProductsContainer from "./components/ProductsContainer";
import AddProductForm from "./components/AddProductForm";


function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts(setProducts)
  }, []);

  const createNewProduct = product => setProducts(prev => [...prev, {
    ...product,
    id: Date.now()
  }]); 

  return (
    <div >
      <Context.Provider value={{products, createNewProduct}}>
        <AddProductForm/>
        <ProductsContainer/>
      </Context.Provider>
    
    </div>
  );
}

export default App;
