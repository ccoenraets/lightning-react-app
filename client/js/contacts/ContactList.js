import React from 'react';

import DataGrid from '../components/DataGrid';

export default React.createClass({

    linkHandler(contact) {
        window.location.hash = "#contact/" + contact.contact_id;
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
            <DataGrid data={this.props.contacts} onSort={this.props.onSort} onAction={this.actionHandler}>
                <div header="First Name" field="first_name" sortable="true" onLink={this.linkHandler}/>
                <div header="Last Name" field="last_name" sortable="true" onLink={this.linkHandler}/>
                <div header="Mobile Phone" field="mobile_phone"/>
                <div header="Home Phone" field="home_phone"/>
                <div header="Email" field="email"/>
            </DataGrid>
        );
    }
});
