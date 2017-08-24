import {StyleSheet, css} from 'aphrodite'
import {defaultStyles, theme} from './DefaultTheme'

/**
 * Created by t-zikunfan
 * Date: 9:27 2017/8/23
 */
const padding = theme.responsivePadding;
const paddingMobile = theme.responsivePaddingMobile;
const mediumSize = theme.fontSize.medium;
const bigSize = theme.fontSize.big;
const height = theme.height.fullWindowHeight;

const styles = StyleSheet.create({
    contentStyle: {
        width: '100%',
        height: height,
        '@media (min-width: 600px)': {
            width: '80%',
            padding: padding
        }
    },

    emptyContentStyle: {
        fontSize: bigSize,
        color: 'grey',
        margin: '15% 10% 0 10%',
        textAlign: 'center'
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
    },
    /* Bio Panel Page */
    bioContentPanelStyle: {
        padding: paddingMobile,
        '@media (min-width: 600px)': {
            padding: padding
        }
    },

    bioJobContentStyle: {
        fontSize: mediumSize,
        ':before': {
            content: "'·'",
            fontWeight: 'bolder',
            margin: '0 5px'
        }
    },
    /* Talks List Page */
    talksPanelStyle: {
        '@media (min-width: 600px)': {
            padding: padding
        }
    }
});

export const advocateInfoClasses = {
    content: css(styles.contentStyle),
    emptyContent: css(defaultStyles.flexRowCenter, styles.emptyContentStyle),

    generalInfoPanel: css(defaultStyles.flexColSpaceBetween, styles.generalInfoPanelStyle),
    socialMediaPanel: css(defaultStyles.flexRowCenter, styles.socialMediaPanelStyle),
    avatarPanel: css(defaultStyles.flexColCenter, styles.avatarPanelStyle),
    avatar: css(styles.avatarStyle),
    avatarTitlePanel: css(defaultStyles.flexColCenter, styles.avatarTitlePanelStyle),

    bioContentPanel: css(styles.bioContentPanelStyle),
    bioJobContent: css(styles.bioJobContentStyle),

    talksPanel: css(styles.talksPanelStyle)
};