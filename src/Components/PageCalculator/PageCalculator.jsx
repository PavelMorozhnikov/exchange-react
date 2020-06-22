import React from 'react'
import styles from '../PageCalculator/PageCalculator.module.css'
import Logo from '../common/Logo/Logo'
import PageCalculatorSelect from './PageCalculatorSelect'
import { reduxForm } from 'redux-form'

const PageCalculator = (props) => {

    const { currencyFirst, currencySecond, addNumderSecond, addNumderFirst } = props;


    const onSubmit = (formData) => {

        if(!formData.countFirst){
            addNumderSecond(formData.countSecond)
        } else {
            addNumderFirst(formData.countFirst)
        }
    }
    

    return (
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <Logo />
                <div className={styles.currenncyCalculator}>
                    <div className={styles.topCurrenncyCalculator}>
                        <h1>Конвертер валют</h1>
                    </div>
                    <div>
                        <PageCalculatorForm 
                        onSubmit={onSubmit} 
                        currencyOptions={currencyFirst} />
                    </div>
                </div>
            </div>
        </div>
    )

};

const PageCalculatorForm = reduxForm({ form: 'PageCalculatorForm' })(PageCalculatorSelect)
export default PageCalculator;
