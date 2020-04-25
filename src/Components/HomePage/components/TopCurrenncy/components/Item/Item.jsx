import React from 'react'
import styles from '../Item/Item.module.css'


const Item = (props) => {
    const textUSD = <p>Доллар США, USD</p>;
    const textEUR = <p>Евро, EUR</p>;
    const textGBP = <p>Фунт стерлингов, GBP</p>;
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.itemContent}>
                    <div className={styles.textWraper}>
                        {textUSD}
                    </div>
                    <div className={styles.line}></div>
                </div>
                <p className={styles.count}>64.6423</p>
            </div>
            <div className={styles.item}>
                <div className={styles.itemContent}>
                    <div className={styles.textWraper}>
                        {textEUR}
                    </div>
                    <div className={styles.line}></div>
                </div>
                <p className={styles.count}>71.7077</p>
            </div>
            <div className={styles.item}>
                <div className={styles.itemContent}>
                    <div className={styles.textWraper}>
                        {textGBP}
                    </div>
                    <div className={styles.line}></div>
                </div>
                <p className={styles.count}>78.3982</p>
            </div>
        </div>
    )
}

export default Item;
