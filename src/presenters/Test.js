import React, {Component} from 'react'
import {connect} from 'react-redux'
/**
 * Created by t-zikfan on 2017/7/12.
 * test react redux
 */
//presenter
class Test extends Component {
    render() {
        const {value, onIncreaseClick} = this.props;
        console.log(value);
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Add</button>
            </div>
        );
    }
}

//action
const increaseAction = {
  type: 'increase'
};
//reducer
export function counter(state = {count: 0}, action) {
    const count = state.count;
    switch(action.type) {
        case 'increase':
            return { count: count + 1 };
        default:
            return state
    }
}
//binding
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

export const TestContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Test);