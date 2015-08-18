import React from 'react';

import PickList from "./components/PickList";

import * as ActivityTypeService from './services/ActivityTypeService';


export default React.createClass({

    getInitialState() {
        return {activityTypes: []};
    },

    componentDidMount() {
        ActivityTypeService.findAll().then(activityTypes => {
            console.log(activityTypes);
            this.setState({activityTypes: activityTypes});
        });
    },

    render() {
        return (
            <PickList dataField="activity_type_id" labelField="name" label="Select an activity" items={this.state.activityTypes} onSelectionChange={this.props.onSelectionChange}/>
        );
    }

});