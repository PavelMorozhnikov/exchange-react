import React from 'react'
import styles from '../PageCalculator/PageCalculator.module.css'
import { Field } from 'redux-form'

const PageCalculatorSelect = (props) => {
    
    const {
        currencyOptions,
        onSubmit,
        addNumder,
        onChangeCurrency,
        handleSubmit
    } = props;

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={`${styles.form} ${styles.aztec}`}>
                    <Field
                        component={'input'}
                        name="countFirst"
                        type="number"
                        className={styles.form_input}
                    />
                    <Field
                        component={'select'}
                        name='currencyFirst'
                        className={styles.form_select}
                    >
                        {currencyOptions.map((el, index) => <option
                            value={el.CharCode}
                            key={index}>
                            {el.Name}</option>)}
                    </Field>
                </div>
            </form>
            <form onSubmit={props.handleSubmit}>
                <div className={`${styles.form} ${styles.aztec}`}>
                    <Field
                        component={'input'}
                        name="countSecond"
                        type="number"
                        className={styles.form_input}
                    />
                    <Field
                        component={'select'}
                        name='currencySecond'
                        className={styles.form_select}
                    >
                        {currencyOptions.map((el, index) => <option
                            value={el.CharCode}
                            key={index}>
                            {el.Name}</option>)}
                    </Field>
                </div>
            </form>
        </>
    )
};

export default PageCalculatorSelect;