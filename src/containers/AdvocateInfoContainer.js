import {connect} from 'react-redux'
import {openBSAction, closeBSAction, followGhAction, followFbAction, followTtAction} from '../redux/actions/AdvocateInfoAction'
import AdvocateInfoPresenter from '../presenters/AdvocateInfoPresenter'
/**
 * Created by t-zikfan on 2017/7/13.
 * Advocate Home Page Info Container
 */

//binding
function mapStateToProps(state) {
    return {
        loading: state.advocateInfoReducer.loading,
        isOpen: state.advocateInfoReducer.isOpen,
        followedFb: state.advocateInfoReducer.followedFb,
        followedTt: state.advocateInfoReducer.followedTt,
        followedGh: state.advocateInfoReducer.followedGh,
        facebookHomePage: state.advocateInfoReducer.facebookHomePage
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleBtmSheetOpen: () => dispatch(openBSAction),
        handleBtmSheetClose: () => dispatch(closeBSAction),
        handleTtFollow: () => dispatch(followTtAction),
        handleGhFollow: () => dispatch(followGhAction),
        handleFbFollow: () => dispatch(followFbAction)
    }
}

const AdvocateInfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AdvocateInfoPresenter);

export default AdvocateInfoContainer