import {StyleSheet, css} from 'aphrodite'
import {defaultStyles} from './DefaultTheme'
/**
 * Created by t-zikunfan
 * Date: 9:27 2017/8/23
 */

const styles = StyleSheet.create({
    createTalkPanelStyle: {
        padding: '20px',
        width: '90%',
        marginLeft: '5%'
    },
    infoCheckContentStyle: {
        width: '100%',
        '@media (min-width: 600px)': {
            width: '60%',
            padding: '0 20%'
        }
    },
    infoCheckFormStyle: {
        width: '100%'
    }

});
export const adminClasses = {
    twitterLoginPanel: css(defaultStyles.flexColCenter),
    adminHomePanel: css(defaultStyles.flexColCenter),
    createTalkPanel: css(defaultStyles.flexColCenter, styles.createTalkPanelStyle),
    infoCheckPanel: css(defaultStyles.flexColCenter),
    infoCheckContent: css(defaultStyles.flexColCenter, styles.infoCheckContentStyle),
    infoCheckForm: css(defaultStyles.flexColCenter, styles.infoCheckFormStyle)
};