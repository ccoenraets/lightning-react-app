import React from 'react';
import DataGrid from '../components/DataGrid';

export default React.createClass({

    linkHandler(property) {
        window.location.hash = "#property/" + property.property_id;
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
            <DataGrid data={this.props.properties} keyField="propertyId" onSort={this.props.onSort} onAction={this.actionHandler}>
                <div header="Address" field="address" sortable={true} onLink={this.linkHandler}/>
                <div header="City" field="city" sortable={true}/>
                <div header="Bedrooms" field="bedrooms" textAlign="center"/>
                <div header="Bathrooms" field="bathrooms" textAlign="center"/>
                <div header="Price" field="price" sortable={true} textAlign="right" format="currency"/>
            </DataGrid>
        );
    }

});