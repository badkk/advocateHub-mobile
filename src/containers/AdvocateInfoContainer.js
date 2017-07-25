import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {openBSAction, closeBSAction, followGhAction, followFbAction, followTtActionCreator, initialActionCreator} from '../redux/actions/AdvocateInfoAction'
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
        homePage: state.advocateInfoReducer.homePage,
        facebookHomePage: state.advocateInfoReducer.facebookHomePage,
        twitterName: state.advocateInfoReducer.twitterName,
        githubName: state.advocateInfoReducer.githubName,
        avatar: state.advocateInfoReducer.avatar,
        meetings: state.advocateInfoReducer.meetings,
        tags: state.advocateInfoReducer.tags
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleBtmSheetOpen: () => dispatch(openBSAction),
        handleBtmSheetClose: () => dispatch(closeBSAction),
        handleGhFollow: () => dispatch(followGhAction),
        handleFbFollow: () => dispatch(followFbAction),
        initial: bindActionCreators(initialActionCreator, dispatch),
        handleTtFollow: bindActionCreators(followTtActionCreator, dispatch),
    }
}

const AdvocateInfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AdvocateInfoPresenter);

export default AdvocateInfoContainer