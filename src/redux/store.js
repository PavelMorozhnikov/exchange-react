import courseNumberReducer from '../reducers/reducer';

let store = {
  _state: {
    courseData: [
      { currency: 'Доллар США, USD', countNumber: '10' },
      { currency: 'Евро, EUR', countNumber: '10' },
      { currency: 'Фунт стерлингов, GBP', countNumber: '10' }
    ],
    countFirst: [],
    countSecond: [],
    currencyFirst: ['Доллар США, USD', 'Евро, EUR', 'Фунт стерлингов, GBP'],
    currencySecond: ['Евро, EUR', 'Доллар США, USD', 'Фунт стерлингов, GBP']
  },
  _callSubscriber() {
    console.log('State changed')
  },
  getState() {
    return this.store;
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.countFirst = courseNumberReducer(this._state.countFirst, action);
    // this._state.countSecond = courseNumberReducer(this._state.countSecond, action);
    this._callSubscriber(this._state);
  }
};



export default store;
window.store = store;

