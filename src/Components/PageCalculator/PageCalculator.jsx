import React from 'react'
import styles from '../PageCalculator/PageCalculator.module.css'
import { NavLink } from 'react-router-dom'
import GetDataForm from './components/GetDataForm/GetDataForm'
import Logo from '../common/Logo/Logo'


const PageCalculator = () => {
    return (
        <div className={styles.container}>
             <div className={styles.mainContainer}>
            <Logo />
            <div className={styles.currenncyCalculator}>
                <div className={styles.topCurrenncyCalculator}>
                    <h1>Конвертер валют</h1>
                </div>
                <div>
                    <GetDataForm />
                    <GetDataForm />
                </div>
            </div>
            <NavLink to='/'>
                <button className={styles.pageBack}>
                    <p className={styles.homePage}>Главная страница</p>
                </button>
            </NavLink>
        </div>
        </div>
    )
}

export default PageCalculator;
