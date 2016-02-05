import React from 'react';

import DataGrid from '../components/DataGrid';

export default React.createClass({

    linkHandler(broker) {
        window.location.hash = "#broker/" + broker.broker_id;
    },

    actionHandler(data, value, label) {
        if (label === "Delete") {
            this.props.onDelete(data);
        } else if (label === "Edit") {
            this.props.onEdit(data);
        }
    },

    render() {
        return (
            <DataGrid data={this.props.brokers} onSort={this.props.onSort} onAction={this.actionHandler}>
                <div header="First Name" field="first_name" sortable="true" onLink={this.linkHandler}/>
                <div header="Last Name" field="last_name" sortable="true" onLink={this.linkHandler}/>
                <div header="Mobile Phone" field="mobile_phone"/>
                <div header="Office Phone" field="office_phone"/>
                <div header="Email" field="email"/>
            </DataGrid>
        );
    }

});
