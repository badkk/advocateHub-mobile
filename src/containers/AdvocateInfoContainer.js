import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {initialActionCreator} from '../redux/actions/AdvocateInfoAction'
import AdvocateInfoPresenter from '../presenters/AdvocateInfoPresenter'
/**
 * Created by t-zikfan on 2017/7/13.
 * Advocate Home Page Info Container
 */

//binding
function mapStateToProps(state) {
    return state.advocateInfoReducer;
}

function mapDispatchToProps(dispatch) {
    return {
        initial: bindActionCreators(initialActionCreator, dispatch),
    }
}

const AdvocateInfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AdvocateInfoPresenter);

export default AdvocateInfoContainer