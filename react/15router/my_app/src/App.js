import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CategoriesPage from "./pages/CategoriesPage";
import Main from "./pages/Main";
import ProductDescrPage from "./pages/ProductDescrPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="categories" element={<CategoriesPage/>}/>
          <Route path="categories/:category" element={<ProductsPage/>}/>
          <Route path="products/:id" element={<ProductDescrPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}




export default App;
