import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {initialAdvocatesCreators, initialTalksCreators} from '../redux/actions/HomeAction'
import HomePresenter from '../presenters/HomePresenter'

/**
 * Created by t-zikunfan
 * Date: 15:47 2017/8/21
 */


//binding
function mapStateToProps(state) {
    return state.homeReduce;
}

function mapDispatchToProps(dispatch) {
    return {
        initAdvos: bindActionCreators(initialAdvocatesCreators, dispatch),
        initTalks: bindActionCreators(initialTalksCreators, dispatch)
    }
}

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePresenter);

export default HomeContainer
