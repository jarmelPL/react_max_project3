import React from 'react';
import styles from '../UI/Card.module.css'

const DivForDelete = (props) => {

    const deleteHandler = () => {
        props.onDelete(props.id)
    }

    return (
        <li onClick={deleteHandler} className={styles.userLi}>
            {props.children}
        </li>
    )
}


export default DivForDelete