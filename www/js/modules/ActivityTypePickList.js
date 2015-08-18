import React from 'react';

import PickList from "./components/PickList";

import * as ActivityTypeService from './services/ActivityTypeService';


export default React.createClass({

    getInitialState() {
        return {activityTypes: []};
    },

    componentDidMount() {
        ActivityTypeService.findAll().then(activityTypes => this.setState({activityTypes: activityTypes}));
    },

    render() {
        return (
            <PickList valueField="activity_type_id" labelField="name" label="Select an activity..." items={this.state.activityTypes} onChange={this.props.onChange}/>
        );
    }

});