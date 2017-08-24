import {StyleSheet, css} from 'aphrodite'
import {defaultStyles, theme} from './DefaultTheme'

/**
 * Created by t-zikunfan
 * Date: 10:36 2017/8/24
 */
const padding = theme.responsivePadding;
const paddingSmall = theme.responsivePaddingS;
//resize the media screen to 16:9
const mediaHeight = theme.height.fullWindow * 0.9 * 9 / 16;

const styles = StyleSheet.create({
    speakerPanelStyle: {
        backgroundColor: 'white',
        '@media (min-width: 600px)': {
            padding: padding
        }
    },
    contentPanelStyle: {
        backgroundColor: 'white',
        '@media (min-width: 600px)': {
            padding: padding
        }
    },
    resourceItemPanelStyle: {
        width: '90%',
        padding: paddingSmall,
        height: mediaHeight
    }
});
export const talkDetailClasses = {
    speakerPanel: css(styles.speakerPanelStyle),
    contentPanel: css(styles.contentPanelStyle),
    resourceItemPanel: css(styles.resourceItemPanelStyle)
};