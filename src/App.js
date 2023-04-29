import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
    const [usersList, setUsersList] = useState([])

    const addUserToList = item => {
      setUsersList(prevItem => {
        return [...prevItem, item]
      })
    }

  return (
    <div>
      <AddUser datas={addUserToList}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
