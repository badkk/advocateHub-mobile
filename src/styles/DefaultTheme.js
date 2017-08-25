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
const layout = {
    flexCol: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
};
export const defaultStyles = StyleSheet.create({
    colorTransAnimation: {
        animationName: [colorTransKeyframes],
        animationDuration: '120s',
        animationIterationCount: 'infinite'
    },
    /* flex layouts */
    flexColCenter: {
        ...layout.flexCol,
        justifyContent: 'center'
    },
    flexColStart: {
        ...layout.flexCol,
        justifyContent: 'flex-start'
    },
    flexColSpaceBetween: {
        ...layout.flexCol,
        justifyContent: 'space-between'
    },
    flexRowCenter: {
        ...layout.flexRow,
        justifyContent: 'center'
    },
    flexRowSpaceAround: {
        ...layout.flexRow,
        justifyContent: 'space-around'
    },
    flexRowSpaceBetween: {
        ...layout.flexRow,
        justifyContent: 'space-between'
    },
    flexRowEnd: {
        ...layout.flexRow,
        justifyContent: 'flex-end'
    },
    flexRowStart: {
        ...layout.flexRow,
        justifyContent: 'flex-start'
    },
    /* positions */
    stickyPos: {
        position: 'sticky',
        top: 0,
        zIndex: theme.zIndex.superTop
    }
});