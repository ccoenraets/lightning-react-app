import React from 'react';

import * as ActivityTypeService from './services/ActivityTypeService';

import PickList from "./components/PickList";

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