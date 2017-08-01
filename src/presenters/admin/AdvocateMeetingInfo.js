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
        const {handleChange}= this.props;
        const form = (
            <Paper zDepth={1} className="meeting-info-form">
                <h3>Publish a New Meeting</h3>
                <TextField
                    id="meeting_title"
                    floatingLabelText="Title"
                    onChange={event => handleChange("name", event.target.value)}
                />            
                <DatePicker
                    hintText="Date"
                    onChange={(event, date) => handleChange("date1", date)}
                />
                <TimePicker
                    hintText="Time"
                    onChange={(event, date) => handleChange("date2", date)}
                />
                <TextField
                    id="meeting_location"
                    floatingLabelText="Location"
                    onChange={event => handleChange("location", event.target.value)}
                />
                <TextField
                    id="meeting_description"
                    floatingLabelText="Description"
                    onChange={event => handleChange("description", event.target.value)}
                />
                 <SelectField
                    floatingLabelText="Type"
                    value={this.state.typeValue}
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