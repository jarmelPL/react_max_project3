import React, { useState } from 'react';
import Card from '../UI/Card.js'
import styles from '../UI/Card.module.css'

const UsersList = (props) => {

    return (
        <Card>
            <ul className={styles.userUl}>
                {props.users.map(user => {
                    return (<li className={styles.userLi} key={user.id} onClick={props.deleteLi}>{user.username} ({user.age} years old)</li>)
                })}
            </ul>
        </Card>
    )
}

export default UsersList