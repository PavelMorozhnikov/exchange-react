import React from 'react'
import PageCalculator from './PageCalculator'
import { connect } from 'react-redux';
import { getCurrency } from '../../reducers/reducer'


class PageCalculatorContainer extends React.Component {

    componentDidMount() {
        this.props.getCurrency()
    };

    addNumderFirst = (value) => {
        this.props.getCurrency(value)
    };
    addNumderSecond = (value) => {
        this.props.getCurrency(value)
    };

    onChangeCurrency = (event, name) => {
        const currency = event.target.value;
        this.props.getCurrency({
            [name]: currency
        })
    };

    render() {

        return <PageCalculator
            currencyFirst={this.props.currencyFirst}
            currencySecond={this.props.currencySecond}
            addNumderFirst={this.addNumderFirst}
            addNumderSecond={this.addNumderSecond}
            onChangeCurrency={this.onChangeCurrency}

        />
    }
};

const mapStateToProps = (state) => {
    return {
        currency: state.pageCalculator.currency,
        currencyFirst: state.pageCalculator.currencyFirst,
        currencySecond: state.pageCalculator.currencySecond,
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewNumber: (value) => {
//             dispatch(addNumderAC(value));
//         },

//         updateNewCurrencyFirst: (currencyFirst) => {
//             dispatch(addCurrencyAC(currencyFirst));
//         },
//         updateChangeCurrency: (value) => {
//             dispatch(addChangeCurrencyAC(value));
//         },
//     }
// }
export default connect(mapStateToProps, { getCurrency })(PageCalculatorContainer);
