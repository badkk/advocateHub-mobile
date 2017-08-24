import React from 'react'
import {SvgIcon, IconButton} from 'material-ui'
import {appBarClasses} from "../../styles/AppBarStyles";

/**
 * Created by t-zikunfan
 * Date: 11:02 2017/7/21
 */
export default function MSLogo({size, logoEvent}) {

    return (
        <IconButton onTouchTap={logoEvent} style={{padding: 0}}>
            <SvgIcon
                viewBox="0 0 64 64"
                className={appBarClasses.msLogo}
                style={{height: size + 'px', width: size + 'px'}}
            >
                <path className={appBarClasses.msLogoSvgSt0} d="M0 0h30v30H0z"/>
                <path className={appBarClasses.msLogoSvgSt1} d="M34 0h30v30H34z"/>
                <path className={appBarClasses.msLogoSvgSt2} d="M34 34h30v30H34z"/>
                <path className={appBarClasses.msLogoSvgSt3} d="M0 34h30v30H0z"/>
            </SvgIcon>
        </IconButton>
    );
}