import { Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import CategoriesPage from "./components/pages/CategoriesPage";
import AboutPage from "./components/pages/AboutPage";
import Layout from "./components/Layout";
import ProductsPage from "./components/pages/ProductsPage";


function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={ <MainPage/> }/>
          <Route path="/about" element={ <AboutPage/> }/>
          <Route path="/categories" element={ <CategoriesPage/> }/>
          <Route path="/categories/:category" element={ <ProductsPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
