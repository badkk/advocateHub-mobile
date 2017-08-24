import {StyleSheet, css} from 'aphrodite'
import {defaultStyles} from './DefaultTheme'

/**
 * Created by t-zikunfan
 * Date: 17:44 2017/8/24
 */
const styles = StyleSheet.create({
    avatarPanelStyle: {
        width: '40px',
        fontSize: '12px',
        textAlign: 'center',
        color: 'grey',
        minWidth: '90px'
    },
    avatarContentStyle: {
        cursor: 'pointer'
    },
    avatarTitleStyle: {
        margin: 0,
        paddingTop: '5px',
        lineHeight: '22px',
        maxHeight: '44px'
    }
});
export const textAvatarClasses = {
    avatarPanel: css(defaultStyles.flexColCenter, styles.avatarPanelStyle),
    avatarContent: css(styles.avatarContentStyle),
    avatarTitle: css(styles.avatarTitleStyle)
};