import {StyleSheet, css} from 'aphrodite'
import {defaultStyles} from './DefaultTheme'
/**
 * Created by t-zikunfan
 * Date: 9:27 2017/8/23
 */
const styles = StyleSheet.create({
    cardPanelStyle: {
        margin: '10px',
        maxWidth: '220px'
    },
    cardHeaderStyle: {
        borderRadius: '3px 3px 0 0'
    }

});
export const talkCardClasses = {
    cardPanel: css(styles.cardPanelStyle),
    subtitlePanel: css(defaultStyles.flexRowStart),
    cardHeader: css(styles.cardHeaderStyle, defaultStyles.colorTransAnimation)
};