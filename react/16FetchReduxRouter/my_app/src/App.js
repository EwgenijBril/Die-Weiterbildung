import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import CategoriesPage from './pages/CategoriesPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<CategoriesPage/>}/>
          <Route path='cart' element={<CartPage/>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
