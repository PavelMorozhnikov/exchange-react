import React from 'react';
import styles from '../GetDataForm/GetDataForm.module.css'
// import {reduxForm} from 'redux-form'

const GetDataForm = (props) => {
    return (
        <div>
            <form className={`${styles.form} ${styles.aztec}`}>
                <input type="text" name="value" className={styles.form_input} placeholder="0" />
                <select className={styles.form_select}>
                    <option>Доллар США, USD</option>
                    <option>Российский рубль</option>
                    <option>Евро, EUR</option>
                    <option>Фунт стерлингов, GBP</option>
                </select>
            </form>
        </div>
    )
}


export default GetDataForm;
