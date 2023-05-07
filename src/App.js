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

    const deleteUserFromList = (itemID) => {
      console.log(usersList)
      setUsersList(prevList => {
        const newList = prevList.filter(item => item.id != itemID)
        return newList
      })
    }

  return (
    <div>
      <AddUser datas={addUserToList}/>
      <UsersList users={usersList} onDeleteItem={deleteUserFromList}/>
    </div>
  );
}

export default App;
