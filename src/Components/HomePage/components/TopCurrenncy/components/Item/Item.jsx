import React from 'react'
import styles from '../Item/Item.module.css'


const Item = (props) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemContent}>
                <div className={styles.textWraper}>
                    {props.showCourse}
                </div>
                <div className={styles.line}></div>
            </div>
            <p className={styles.count}>
                {props.number}
            </p>
        </div>
    )
}
export default Item;
