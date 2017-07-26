import React, {Component} from 'react'
import {DatePicker, TimePicker, TextField, SelectField, MenuItem} from 'material-ui'

export default class AdvocateMeetingInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeValue: 1
        }
    }

    render() {
        const {handleChange}= this.props;
        const form = (
            <div className="meeting-info-form">
                <TextField
                    id="meeting_title"
                    floatingLabelText="Title"
                    onChange={event => handleChange("name", event.target.value)}
                />            
                <DatePicker
                    hintText="Date"
                />
                <TimePicker
                    hintText="Time"
                    format="24hr"
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
                    <MenuItem value={1} primaryText="online" />
                    <MenuItem value={2} primaryText="offline" />
                </SelectField>  
            </div>);

        return (
            <div className="meeting-info">
                <div style={{marginLeft: '10%', marginRight: '10%', width: '100%'}}>
                    {form}
                </div>
            </div>
        );
    }
}