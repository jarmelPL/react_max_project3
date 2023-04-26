import React, { useState } from 'react';
import Card from '../UI/Card.js'
import './AddUser.css'
import Button from '../UI/Button.js'

const usersArray = []

const AddUser = () => {
    
    const addUserHandler = event => {
        event.preventDefault()

        if (enteredUsername!='' && enteredAge!='' && enteredAge>=1) {
            console.log(enteredUsername, enteredAge)
            setEnteredUsername('')
            setEnteredAge('')
        } else {
            return;
        }

        const usernameInfo = {
            username: enteredUsername,
            age: enteredAge
        }

        usersArray.push(usernameInfo)
        console.log(usersArray)
    }

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value)
    }
    const ageChangeHandler = event => {
        setEnteredAge(event.target.value)
    }

    return (
        <Card>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username' >Username</label>
                <input id='username' onChange={usernameChangeHandler} value={enteredUsername} />
                <label htmlFor='age'>Age</label>
                <input id='age' type='number' onChange={ageChangeHandler} value={enteredAge} />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;