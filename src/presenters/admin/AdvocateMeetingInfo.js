import React, {Component} from 'react'
import {DatePicker, TimePicker, TextField, SelectField, MenuItem, Paper} from 'material-ui'

export default class AdvocateMeetingInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeValue: "online"
        }
    }

    render() {
        const {handleChange, meeting, meetingFormButtonTxt}= this.props;
        const title = meetingFormButtonTxt + " a New Meeting";
        const form = (
            <Paper zDepth={1} className="meeting-info-form">
                <h3>{title}</h3>
                <TextField
                    id="meeting_title"
                    defaultValue={meeting['name']}
                    floatingLabelText="Title"
                    onChange={event => handleChange("name", event.target.value)}
                />            
                <DatePicker
                    hintText="Date"
                    defaultDate={'date' in meeting ? new Date(meeting['date']) : undefined}
                    onChange={(event, date) => handleChange("date1", date)}
                />
                <TimePicker
                    hintText="Time"
                    defaultTime={'date' in meeting ? new Date(meeting['date']) : null}
                    onChange={(event, date) => handleChange("date2", date)}
                />
                <TextField
                    id="meeting_location"
                    defaultValue={meeting['location']}
                    floatingLabelText="Location"
                    onChange={event => handleChange("location", event.target.value)}
                />
                <TextField
                    id="meeting_video_link"
                    defaultValue={meeting['videoLink']}
                    floatingLabelText="Youtube Link"
                    onChange={event => handleChange("videoLink", event.target.value)}
                />
                <div>
                    <TextField
                        id="meeting_ppt_link"
                        defaultValue={meeting['pptLink']}
                        floatingLabelText="PowerPoint Online Src"
                        onChange={event => handleChange("pptLink", event.target.value)}
                    />
                    <a
                        href="https://support.office.com/en-us/article/Embed-a-presentation-in-a-web-page-or-blog-19668a1d-2299-4af3-91e1-ae57af723a60?ui=en-US&rs=en-US&ad=US"
                        style={{marginLeft: '10px'}}
                    >
                        notes
                    </a>
                </div>
                <TextField
                    id="meeting_description"
                    defaultValue={meeting['description']}
                    floatingLabelText="Description"
                    onChange={event => handleChange("description", event.target.value)}
                />
                 <SelectField
                    floatingLabelText="Type"
                    value={this.state.typeValue}
                    defaultValue={meeting['type']}
                    onChange={(event, index, value) => {
                        this.setState({typeValue: value});
                        handleChange("type", value)}
                    }>
                    <MenuItem value="online" primaryText="online" />
                    <MenuItem value="offline" primaryText="offline" />
                </SelectField>  
            </Paper>);

        return (
            <div className="meeting-info">
                <div >
                    {form}
                </div>
            </div>
        );
    }
}