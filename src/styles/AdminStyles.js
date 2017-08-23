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
    }
});
export const adminClasses = {
    twitterLoginPanel: css(defaultStyles.flexColCenter),
    adminHomePanel: css(defaultStyles.flexColCenter),
    createTalkPanel: css(defaultStyles.flexColCenter, styles.createTalkPanelStyle)
};