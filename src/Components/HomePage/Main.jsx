import React from 'react'
import styles from './Main.module.css'
import TopCurrenncy from './components/TopCurrenncy/TopCurrenncy'
import History from './components/History/History'
import Logo from '../common/Logo/Logo'

const Main = (props) => {
    return (
        <div className={styles.main}>
            <Logo />
            <TopCurrenncy />
            <History />
        </div>
    )
}

export default Main;
