import React from 'react'
import styles from '../TopCurrenncy/TopCurrenncy.module.css'
import Item from './components/Item/Item'

const TopCurrenncy = (props) => {
    return (
        <div className={styles.topCurrenncy}>
            <h1 className={styles.topCurrenncyHeader}>Курс валют ЦБ РФ</h1>
            <div >
                <Item />
            </div>
        </div>
    )
}

export default TopCurrenncy;
