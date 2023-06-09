import React, { useState } from 'react';
import Card from '../UI/Card.js'
import './AddUser.css'
import Button from '../UI/Button.js'
import ErrorModal from '../UI/ErrorModal.js';


const AddUser = (props) => {

    
    const addUserHandler = event => {
        event.preventDefault()

        if (enteredUsername!='' && enteredAge!='' && enteredAge>=1) {
            // console.log(enteredUsername, enteredAge)
            setEnteredUsername('')
            setEnteredAge('')
        } else {
            setError({
                title: 'Invalid data',
                message: 'Please enter a valid name and age'
            })
            return;
        }

        const usernameInfo = {
            username: enteredUsername,
            age: enteredAge,
            id: Math.random().toString()
        }

        props.datas(usernameInfo)
    }

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState('')

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value)
    }
    const ageChangeHandler = event => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} closeError={errorHandler}/>}
            <Card>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username' >Username</label>
                    <input id='username' onChange={usernameChangeHandler}   value={enteredUsername} />
                    <label htmlFor='age'>Age</label>
                    <input id='age' type='number' onChange={ageChangeHandler}   value={enteredAge} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;