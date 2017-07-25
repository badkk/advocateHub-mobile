import React from 'react'
import {DatePicker, TimePicker, TextField} from 'material-ui'

export default function AdvocateMeetingInfo({userId}) {
    const form = (
        <div className="meeting-info-form">
            <TextField
                id="meeting_title"
                floatingLabelText="Title"
            />
            <DatePicker
                hintText="Date"
                autoOk="true"
            />
            <TimePicker
                hintText="Time"
                format="24hr"
                autoOk="true"
            />
            <TextField
                id="meeting_location"
                floatingLabelText="Location"
            />
            <TextField
                id="meeting_description"
                floatingLabelText="Description"
            />
        </div>);

    return (
        <div className="meeting-info">
            <div style={{marginLeft: '10%', marginRight: '10%', width: '100%'}}>
                {form}
            </div>
        </div>
    );
}