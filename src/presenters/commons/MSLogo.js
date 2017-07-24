import React from 'react'
import {SvgIcon, IconButton} from 'material-ui'
/**
 * Created by t-zikunfan
 * Date: 11:02 2017/7/21
 */
export default function MSLogo(props) {
    const { logoEvent } = props;
    return (
        <IconButton onTouchTap={logoEvent}>
            <SvgIcon
                {...props}
                viewBox="0 0 64 64"
                className="icon"
                style={{height: props.size + 'px', width: props.size + 'px', marginLeft: 0}}
            >
                <path className="st0" d="M0 0h30v30H0z"/>
                <path className="st1" d="M34 0h30v30H34z"/>
                <path className="st2" d="M34 34h30v30H34z"/>
                <path className="st3" d="M0 34h30v30H0z"/>
            </SvgIcon>
        </IconButton>
    );
}