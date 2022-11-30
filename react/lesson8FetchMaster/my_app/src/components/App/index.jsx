import { getProducts } from '../../reqests/products'
import { getUsers } from '../../reqests/users';
import { useState, useEffect} from 'react'
import { Context } from '../../context'
import { Routes, Route } from 'react-router-dom';
import ProductsPage from '../../pages/ProductsPage';
import MainPage from '../../pages/MainPage';
import UserPage from '../../pages/UsersPage';



function App() {

  const [products, setProducts] = useState([])

  const [users, setUsers] = useState([])

  useEffect(() => {
    getProducts(setProducts)
    getUsers(setUsers)
  }, [])

  console.log(users)


  return (
    <div >
      <Context.Provider value={{products, users}}>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='users_page' element={<UserPage/>}/>
          <Route path='products_page' element={<ProductsPage/>}/>
        </Routes>
      </Context.Provider>
     
    </div>
  );
}

export default App;
