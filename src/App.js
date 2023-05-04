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

    const deleteUserFromList = (event) => {
      console.log(usersList)
      console.log(event.target.username)
      console.log(usersList.filter(item => {return item.username==='aa'}))
    }

  return (
    <div>
      <AddUser datas={addUserToList}/>
      <UsersList users={usersList} deleteLi={deleteUserFromList}/>
    </div>
  );
}

export default App;
