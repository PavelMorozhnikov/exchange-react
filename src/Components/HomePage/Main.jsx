import React from 'react'
import styles from './Main.module.css'
import TopCurrencyContainer from './components/TopCurrenncy/TopCurrencyContainer'
import History from './components/History/History'
import Logo from '../common/Logo/Logo'


const Main = (props) => {
        return (
            <div className={styles.main}>
                <Logo/>
                <TopCurrencyContainer/>
                <History />
            </div>
        )
}
export default Main;
