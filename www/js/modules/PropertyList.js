import React from 'react';
import DataGrid from './components/DataGrid';

export default React.createClass({

    sortHandler(label) {
        this.props.onSort(label);
    },

    linkHandler(property) {
        window.location.hash = "#property/" + property.property_id;
    },

    render() {
        return (
            <DataGrid data={this.props.properties} onSort={this.sortHandler}>
                <div header="Address" field="address" sortable={true} onLink={this.linkHandler}/>
                <div header="City" field="city" sortable={true}/>
                <div header="Bedrooms" field="bedrooms" textAlign="center"/>
                <div header="Bathrooms" field="bathrooms" textAlign="center"/>
                <div header="Price" field="price" sortable={true} textAlign="right" format="currency"/>
            </DataGrid>
        );
    }

});