import React from "react";
import ReactDOM from "react-dom"
import Card from "./Card";
import Button from "./Button";
import styles from './ErrorModal.module.css'

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.closeError}></div>
}

const ModalOverlay = props => {
    return (
        <div className={styles.modal}>
        <Card>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.closeError}>Ok</Button>
            </footer>
        </Card>
        </div>
    )
}

const ErrorModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop closeError={props.closeError} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay 
                    title={props.title}
                    message={props.message}
                    closeError={props.closeError} />,
                    document.getElementById('overlay-root')
            )}
        </React.Fragment>
    )
}

export default ErrorModal