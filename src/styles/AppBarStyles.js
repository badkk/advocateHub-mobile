import {StyleSheet, css} from 'aphrodite'
import {theme, defaultStyles} from './DefaultTheme'
/**
 * Created by t-zikunfan
 * Date: 9:27 2017/8/23
 */
const fontSize = theme.fontSize;
const height = theme.height;

const styles = StyleSheet.create({
    barPanelStyles: {
        width: '100%',
    },
    barBaseContainerStyle: {
        backgroundColor: 'white',
        height: height.appBarHeight,
    },
    barContainerStyle: {
        '@media (min-width: 600px)': {
            justifyContent: 'center'
        }
    },
    backIconButtonStyle: {
        display: 'inline-block',
        '@media (min-width: 600px)': {
            display: 'none'
        }
    },
    logoPanelStyle: {
        marginLeft: '-50px'
    },
    logoTitleStyle: {
        fontSize: fontSize.mediumX,
    },
    barHrStyle: {
        margin: 0
    },
    adminBarStyle: {
        backgroundColor: 'black',
        color: 'white'
    },
    adminAvatarStyle: {
        cursor: 'pointer',
        margin: '0 20px 0 -80px'
    }
});
export const appBarClasses = {
    barPanel: css(defaultStyles.stickyPos, styles.barPanelStyles),
    barContainer: css(defaultStyles.flexRowSpaceBetween, styles.barContainerStyle, styles.barBaseContainerStyle),
    backIconButton: css(styles.backIconButtonStyle),
    logoPanel: css(styles.logoPanelStyle, defaultStyles.flexRowStart),
    logoTitle: css(styles.logoTitleStyle),
    barHr: css(styles.barHrStyle),
    adminBarStyle: css(defaultStyles.stickyPos, defaultStyles.flexRowSpaceBetween, styles.barBaseContainerStyle, styles.adminBarStyle),
    adminAvatar: css(styles.adminAvatarStyle)
};