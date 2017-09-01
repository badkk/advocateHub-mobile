import {StyleSheet, css} from 'aphrodite'
import {defaultStyles} from './DefaultTheme'


/**
 * Created by t-zikunfan
 * Date: 9:25 2017/9/1
 */

const styles = StyleSheet.create({
    googleMapStyles: {
        width: '240px',
        height: '32px',
        textOverflow: 'ellipses',
        fontSize: '14px',
        marginTop: '10px',
        borderRadius: '3px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
        outline: 'none',
        boxSizing: 'border-box',
        MozBoxSizing: 'border-box',
        border: '1px solid transparent',
        padding: '0 12px',
        '@media (max-width: 600px)': {
            left: '10px',
            marginTop: '50px'
        }
    }
});
export const googleMapStyles = {
    searchInputClasses: css(styles.googleMapStyles),
};
