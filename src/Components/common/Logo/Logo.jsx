import React from 'react'
import styles from '../Logo/Logo.module.css'
import logo from '../../../images/logo.png'
import { NavLink } from 'react-router-dom'

const Logo = (props) => {
    return (
        <NavLink to='/'>
            <div className={styles.header}>
                <img className={styles.logo} src={logo} />
                <h1>Курс валют</h1>
            </div>
        </NavLink>
    )
}

export default Logo;
