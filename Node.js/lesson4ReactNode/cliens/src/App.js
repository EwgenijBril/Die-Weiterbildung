import './App.css';
import { Routes, Route } from 'react-router-dom'
import AuthPage from './components/AuthPage';
import Nav from './components/Nav';
import ProductsPage from './components/ProductsPage';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
