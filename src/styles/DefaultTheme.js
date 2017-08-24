import {cyan500} from 'material-ui/styles/colors'
import {StyleSheet} from 'aphrodite/no-important'

/**
 * Created by t-zikunfan
 * Date: 17:49 2017/8/22
 */
export const theme= {
    color: {
        primary: cyan500,
        grey: 'grey',
        dark: 'dimgrey',
        msRed: '#F05125',
        msBlue: '#32A0DA',
        msGreen: '#7FBB42',
        msYellow: '#FDB813'
    },
    zIndex: {
        superTop: 9999,
        top: 1030,
        middle: 500,
        btm: 20
    },
    deviceSize: {
        mobileMax: '600px'
    },
    height: {
        appBarHeight: '55px',
        fullWindowHeight: window.screen.height
    },
    responsivePadding: '0 10%',
    responsivePaddingS: '0 5%',
    responsivePaddingMobile: '0 16px',
    fontSize: {
        big: '22px',
        mediumX: '18px',
        medium: '15px',
        small: ''
    },

};

const colorTransKeyframes = {
    '0%': { backgroundColor:  theme.color.msBlue },
    '25%': { backgroundColor:  theme.color.msGreen },
    '50%': { backgroundColor:  theme.color.msYellow },
    '75%': { backgroundColor:  theme.color.msRed },
    '100%': { backgroundColor:  theme.color.msBlue }
};
export const defaultStyles = StyleSheet.create({
    colorTransAnimation: {
        animationName: [colorTransKeyframes],
        animationDuration: '120s',
        animationIterationCount: 'infinite'
    },
    /* flex layouts */
    flexColCenter: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flexColStart: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    flexColSpaceBetween: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    flexRowCenter: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flexRowSpaceAround: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    flexRowSpaceBetween: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    flexRowEnd: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    flexRowStart: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    /* positions */
    stickyPos: {
        position: 'sticky',
        top: 0,
        zIndex: theme.zIndex.superTop
    }
});