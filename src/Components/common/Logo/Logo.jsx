import React from 'react'
import styles from '../Logo/Logo.module.css'
import logo from '../../../images/logo.png'

const Logo = (props) => {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src={logo} />
            <h1>Курс валют</h1>
        </div>
    )
}

export default Logo;
