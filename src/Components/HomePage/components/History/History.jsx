import React from 'react'
import styles from '../History/History.module.css'
import { Link } from 'react-router-dom';


const History = (props) => {
    return (
        
            <div className={styles.history}>
                <div className={styles.historyHeader}>
                    <h1>История конвертации</h1>
                </div>
                <div className={styles.historyContent}>
                    <p className={styles.historyItem}>220 USD = 14221.3 RUB</p>
                    <p className={styles.historyItem}>123 RUB = 1.5689 GBP</p>
                    <p className={styles.historyItem}>52 EUR = 57.6836 USD</p>
                    <p className={styles.historyItem}>349 GBP = 381.563 EUR</p>
                </div>
                <Link to='/calculator'>
                    <button className={styles.button}>
                        <p className={styles.textButton}>Конвертор валют</p>
                    </button>
                </Link>
            </div>
        
    )
}
export default History;


