import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getTalkDetailActionCreator, getDocsActionCreator} from '../redux/actions/TalkDetailAction'
import TalkDetailPresenter from '../presenters/TalkDetailPresenter'

/**
 * Created by t-zikunfan
 * Date: 9:47 2017/8/22
 */


//binding
function mapStateToProps(state) {
    return state.talkDetailReducer;
}

function mapDispatchToProps(dispatch) {
    return {
        initial: bindActionCreators(getTalkDetailActionCreator, dispatch),
        getDocs: bindActionCreators(getDocsActionCreator, dispatch)
    }
}

const TalkDetailContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TalkDetailPresenter);

export default TalkDetailContainer
