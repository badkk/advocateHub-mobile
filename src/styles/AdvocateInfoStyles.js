import {StyleSheet, css} from 'aphrodite'
import {defaultStyles, theme} from './DefaultTheme'

/**
 * Created by t-zikunfan
 * Date: 9:27 2017/8/23
 */

const padding = theme.responsivePadding;

const styles = StyleSheet.create({
    homePageContentSetStyle: {

    },
    homePageContentNotSetStyle: {

    },
    /* Personal Info Page */
    generalInfoPanelStyle: {
        height: '200px',
        '@media (min-width: 600px)': {
            height: '80px',
            padding: padding,
            flexDirection: 'row'
        }
    },
    socialMediaPanelStyle: {
        ':before': {
            content: "'Follow me at'"
        }
    },
    avatarPanelStyle: {
        '@media (min-width: 600px)': {
            flexDirection: 'row'
        }
    },
    avatarStyle: {
        margin: '16px'
    },
    avatarTitlePanelStyle: {
        marginLeft: '10px',
        '@media (min-width: 600px)': {
            alignItems: 'flex-start'
        }
    }
});
export const advocateInfoClasses = {
    generalInfoPanel: css(defaultStyles.flexColSpaceBetween, styles.generalInfoPanelStyle),
    socialMediaPanel: css(defaultStyles.flexRowCenter, styles.socialMediaPanelStyle),
    avatarPanel: css(defaultStyles.flexColCenter, styles.avatarPanelStyle),
    avatar: css(styles.avatarStyle),
    avatarTitlePanel: css(defaultStyles.flexColCenter, styles.avatarTitlePanelStyle)
};