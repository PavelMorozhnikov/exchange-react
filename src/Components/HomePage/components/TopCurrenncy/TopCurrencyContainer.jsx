import React from 'react'
import { connect } from 'react-redux'
import TopCurrenncy from './TopCurrenncy'
import { getCourse } from '../../../../reducers/reducerTopCurrency'

class TopCurrencyContainer extends React.Component {
    
    componentDidMount() {
        this.props.getCourse();
    }
    render() {
        return <TopCurrenncy
            setMoney={this.props.setMoney}
            money={this.props.money} />
    }
}

const mapStateToProps = (state) => {
    return {
        money: state.pageMain.money
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setMoney: (money) => {
//             dispatch(setMoneyAC(money));
//         },
//     }
// }

export default connect(mapStateToProps, { getCourse })(TopCurrencyContainer)

