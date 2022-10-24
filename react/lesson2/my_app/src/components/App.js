import User from "./User";
import { users } from '../data/users'
import { products } from "../data/products";
import Product from "./Product";

export default function App() {
  
  return (
    <div >
      {/* <User firstname='Oleg' lastname='Petrov' age='35'/>
      <User firstname='Olga' lastname='Ivanova' age='30'/>
      <User firstname='Igor' lastname='Muller' age='24'/> */}

      {/* {
        users.map(el => <User firstname={el.firstname} lastname={el.lastname} age={el.age}/>)
      } */}

      <h2>Users:</h2>

      {
        users.map(el => <User {...el} key={el.id}/>)
      }

      <h2>Products:</h2>

      {
        products.map(el => <Product {...el} key={el.id}/>)
      }
      
    </div>
  );
}


