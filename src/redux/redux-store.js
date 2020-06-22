import { createStore, combineReducers, applyMiddleware } from "redux";
import courseNumberReducer from '../reducers/reducer';
import setMoneyReducer from '../reducers/reducerTopCurrency';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
     pageCalculator: courseNumberReducer,
     pageMain: setMoneyReducer,
     form: formReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
console.log(store.getState().form)

window.store = store;
export default store;
