import React from 'react'
import {CircularProgress} from 'material-ui'
/**
 * Created by t-zikunfan
 * Date: 18:16 2017/8/15
 */
export default function AdvocateAuthCallback({}) {
    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '40%', width: '100%'}}>
            <CircularProgress size={50}/>
        </div>
    );
}