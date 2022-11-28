import { getUsers } from '../../requests/users'
import { useState, useEffect } from 'react'
import { Context } from '../../context'
import UserContainer from '../UserContainer';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(setUsers);
  }, [])
  
  return (
    <div>
      <Context.Provider value={{users}}>
      <UserContainer/>
      </Context.Provider>
    </div>
  );
}

export default App;
