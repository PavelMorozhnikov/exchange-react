import React from 'react'
import styles from '../TopCurrenncy/TopCurrenncy.module.css'
import Item from './components/Item/Item'



const TopCurrenncy = (props) => {

    const topValutes = ['USD', 'EUR', 'GBP']
    const emptyValutes = Object.keys(props.money).length === 0;

    return (
        <div className={styles.topCurrenncy}>
            <h1 className={styles.topCurrenncyHeader}>Курс валют ЦБ РФ</h1>
            <div className={styles.container} >
                {!emptyValutes && topValutes
                    .map(el => (<Item
                        showCourse={props.money[el].Name}
                        key={props.money[el].ID}
                        number={props.money[el].Value}
                    />
                    ))

                }
            </div>
        </div>
    )


}

export default TopCurrenncy;
