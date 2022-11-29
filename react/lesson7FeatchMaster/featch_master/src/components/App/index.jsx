import { getUsers } from '../../requests/users'
import { getProducts } from '../../requests/products';
import { useState, useEffect } from 'react'
import { Context } from '../../context'
import NavMenu from '../NavMenu';
import { Routes, Route } from 'react-router-dom';
import UsersPage from '../../pages/UsersPage';
import ProductsPage from '../../pages/ProductsPage/idnex';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(setUsers);
  }, [])

  const [products, setProducts] = useState([]);

  useEffect(() =>  {
    getProducts(setProducts);
  }, [])
  
  return (
    <div>
      <Context.Provider value={{users, products}}>
      <NavMenu/>
      <Routes>
        <Route path='users_page' element={<UsersPage/>}/>
        <Route path='products_page' element={<ProductsPage/>}/>
      </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
