import { courseURL } from '../api/api'
const SET_MONEY = 'SET_MONEY';

let initialState = {
    money: [],
}

const setMoneyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MONEY: {
            return {
                ...state,
                money: { ...state.money, ...action.money }
            }
        }
        default:
            return state;
    }
};


export const setMoney = (money) => ({ type: SET_MONEY, money });

export const getCourse = () => {
    return (dispatch) => {
        courseURL().then(data => {
            dispatch(setMoney(data.Valute));
        })
    }
}

export default setMoneyReducer;
