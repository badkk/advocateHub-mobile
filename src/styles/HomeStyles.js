import {StyleSheet, css} from 'aphrodite'
import {theme, defaultStyles} from './DefaultTheme'
/**
 * Created by t-zikunfan
 * Date: 9:27 2017/8/23
 */
const color = theme.color;
const fontSize = theme.fontSize;
const padding = theme.responsivePadding;

const styles = StyleSheet.create({
    widthResponsive: {
        '@media (min-width: 600px)': {
            width: '90%'
        }
    },
    paddingResponsive: {
        '@media (min-width: 600px)': {
            padding: padding
        }
    },
    appPanelStyle: {
        width: '100%'
    },
    logoPanelStyle: {
        padding: '10px 0 10px 0'
    },
    logoTitleStyle: {
        fontSize: fontSize.big,
        margin: 0,
        color: 'white'
    },
    socialMediaPanelStyle: {
        width: '20%'
    },
    searchBarStyle: {
        width: '96%',
        margin: '10px 2% 10px 2%',
    },
    contentPanelStyle: {
        overflowX: 'hidden',
        overflowY: 'scroll',
        height: 'auto',

    },
    upperContentPanelStyle: {
        paddingTop: '5px',
        height: 'auto'
    },
    contentTitleStyle: {
        fontSize: fontSize.medium,
        margin: 0,
        color: color.grey,
        padding: '10px'
    },
    topAdvocatesPanelStyle: {
        overflowX: 'scroll',
        overflowY: 'hidden',
        padding: '20px 10px 0 10px',
        alignItems: 'flex-start'
    },
    upcomingTalksPanelStyle: {
        overflowY: 'hidden',
        overflowX: 'scroll'
    }

});
export const homeClasses = {
    appHeader: css(defaultStyles.colorTransAnimation, defaultStyles.flexColCenter, defaultStyles.stickyPos),
    appPanel: css(styles.widthResponsive, styles.appPanelStyle, defaultStyles.flexRowSpaceBetween),
    logoPanel: css(styles.logoPanelStyle, defaultStyles.flexRowCenter),
    logoTitle: css(styles.logoTitleStyle),
    socialMediaPanel: css(styles.socialMediaPanelStyle, defaultStyles.flexRowEnd),
    searchBar: css(styles.searchBarStyle, defaultStyles.flexRowCenter),
    contentPanel: css(styles.contentPanelStyle, styles.paddingResponsive),
    upperContentPanel: css(styles.upperContentPanelStyle),
    contentTitle: css(styles.contentTitleStyle),
    topAdvocatesPanel: css(defaultStyles.flexRowStart, styles.topAdvocatesPanelStyle),
    upcomingTalksPanel: css(styles.upcomingTalksPanelStyle, defaultStyles.flexRowStart)
};