import React from 'react';
import Card from '../UI/Card.js'
import './AddUser.css'

const AddUser = () => {
    const addUserHandler = event => {
        event.preventDefault()
    }

    return (
        <Card>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username' >Username</label>
                <input id='username' />
                <label htmlFor='age'>Age</label>
                <input id='age' type='number' />
                <button type='submit'>Add User</button>
            </form>
        </Card>
    )
}

export default AddUser;