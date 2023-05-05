import React, { useState } from 'react';
import Card from '../UI/Card.js'
import styles from '../UI/Card.module.css'
import DivForDelete from './DivForDelete.js';

const UsersList = (props) => {

    return (
        <Card>
            <ul className={styles.userUl}>
                {props.users.map(user => {
                    return (
                        <DivForDelete
                            key={user.id}
                            id={user.id}
                            onDelete={props.onDeleteItem}
                        >
                            {user.username} ({user.age} years old)
                        </DivForDelete>
                    )
                })}
            </ul>
        </Card>
    )
}

export default UsersList