import { getProducts } from '../../reqests/products'
import { getUsers } from '../../reqests/users';
import { getToDos } from '../../reqests/todos';
import { useState, useEffect} from 'react'
import { Context } from '../../context'
import { Routes, Route } from 'react-router-dom';
import ProductsPage from '../../pages/ProductsPage';
import MainPage from '../../pages/MainPage';
import UserPage from '../../pages/UsersPage';
import ToDoPage from '../../pages/ToDoPage';



function App() {

  const [products, setProducts] = useState([])

  const [users, setUsers] = useState([])

  const [todos, setTodos] = useState([])

  useEffect(() => {
    getProducts(setProducts)
    getUsers(setUsers)
    getToDos(setTodos)
  }, [])

  const createNewProduct = product => setProducts(prev => [...prev, product])

  const createNewUser = user => setUsers(prev => [...prev, user])

  const createNewToDos = todo => setTodos(prev => [...prev, todo])

  return (
    <div >
      <Context.Provider value={{products, users, createNewProduct, createNewUser, todos, createNewToDos}}>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='users_page' element={<UserPage/>}/>
          <Route path='products_page' element={<ProductsPage/>}/>
          <Route path='/todos' element={<ToDoPage/>}/>
        </Routes>
      </Context.Provider>
     
    </div>
  );
}

export default App;
