import { courseURL } from '../api/api'

const ADD_NUMBER_FIRST = 'ADD_NUMBER_FIRST';
const ADD_NUMBER_SECOND = 'ADD_NUMBER_SECOND';
const ADD_CURRENCY = 'ADD_CURRENCY';
const CURRENCY_FIRST = 'CURRENCY_FIRST';
const CURRENCY_SECOND = 'CURRENCY_SECOND';

let initialState = {
        currency: [],
        currencyFirst: [],
        currencySecond: [],
}

const courseNumberReducer = (state = initialState, action) => {
        switch (action.type) {
        case ADD_NUMBER_FIRST:
            return {
                ...state,
                countFirst: action.countFirst
            }
        case ADD_NUMBER_SECOND:
            return {
                ...state,
                countSecond: action.countSecond
            }
        case ADD_CURRENCY:
            return {
                ...state,
                currency: action.currency
            }
        case CURRENCY_FIRST:
            return {
                ...state,
                currencyFirst: [ ...Object.values(action.currencyFirst)]
            }
        case CURRENCY_SECOND:
            return {
                ...state,
                currencySecond: [ ...Object.values(action.currencySecond)]
            }
        default:
            return state;
    }
};


export const addNumderFirstAC = (countFirst) => ({ type: ADD_NUMBER_FIRST, countFirst });
export const addNumderSecondAC = (countSecond) => ({ type: ADD_NUMBER_SECOND, countSecond });
export const addCurrencyFirstAC = (currencyFirst) => ({ type: CURRENCY_FIRST, currencyFirst });
export const addCurrencySecondAC = (currencySecond) => ({ type: CURRENCY_SECOND, currencySecond });
export const addChangeCurrencyAC = (currency) => ({ type: ADD_CURRENCY, currency });

export const getCurrency = (value) => {
    return (dispatch) => {
        courseURL()
            .then(data => {
                dispatch(addNumderFirstAC(value));
                dispatch(addNumderSecondAC(value));
                dispatch(addChangeCurrencyAC(value));
                dispatch(addCurrencyFirstAC(data.Valute));
                dispatch(addCurrencySecondAC(data.Valute));
            })
    }
}

export default courseNumberReducer;
