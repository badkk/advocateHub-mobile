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
    /* Introduction Page */
    introContentPanelStyle: {
        width: '80%',
        alignItems: 'flex-start',
        padding: padding,
        '@media (max-width: 600px)': {
            flexDirection: 'column',
            alignItems: 'center',
            padding: 0,
            width: '100%',
        }
    },
    introContentInnerPanelStyle: {
        width: '50%',
        '@media (max-width: 600px)': {
            width: '100%'
        }
    },
    iconTextPanelStyle: {
        minHeight: '35px',
        marginTop: '15px',
    },
    introSubContentPanelStyle: {
        width: 'auto',
        padding: '0 12px'
    },
    introTitlePanelStyle: {

    },
    /* Resource Page */
    resourceItemPanelStyle: {
        width: '90%',
        padding: paddingSmall,
        height: mediaHeight
    },

});
export const talkDetailClasses = {
    speakerPanel: css(styles.speakerPanelStyle),
    contentPanel: css(styles.contentPanelStyle),
    resourceItemPanel: css(styles.resourceItemPanelStyle),
    introContentPanel: css(defaultStyles.flexRowCenter, styles.introContentPanelStyle),
    introSubContentPanel: css(styles.introSubContentPanelStyle),
    introContentInnerPanel: css(styles.introContentInnerPanelStyle),
    introIconTextPanel: css(defaultStyles.flexRowStart, styles.iconTextPanelStyle),
    introTitlePanel: css(defaultStyles.flexRowSpaceBetween),
    introLikesPanel: css(defaultStyles.flexRowCenter)
};