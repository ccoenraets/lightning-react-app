import React from 'react';
import {Router} from 'react-router';

import * as propertyService from '../services/PropertyService';

import {RecordHeader, HeaderField} from '../components/PageHeader';

export default React.createClass({

    getInitialState() {
        return { property: {} };
    },

    componentDidMount() {
        propertyService.findById(this.props.params.propertyId).then(property => this.setState({property}));
    },

    saveHandler(property) {
        propertyService.updateItem(property).then(() => {
            console.log('property saved');
        });
    },

    editHandler() {
        window.location.hash = '#property/' + this.state.property.property_id + '/edit';
    },

    deleteHandler() {
        propertyService.deleteItem(this.state.property.property_id).then(() => {
            window.location.hash = '#';
        });
    },

    render() {
        //<RouteHandler property={this.state.property} saveHandler={this.saveHandler}/>
        return (
            <div>
                <RecordHeader type="Property" icon="account" title={this.state.property.address}
                              onEdit={this.editHandler}
                              onDelete={this.deleteHandler}
                              onClone={this.cloneHandler}>
                    <HeaderField label="City" value={this.state.property.city}/>
                    <HeaderField label="Type" value="Single Family"/>
                    <HeaderField label="Date Listed" value="Aug 1st 2015"/>
                    <HeaderField label="Asking Price" value={this.state.property.price} format="currency"/>
                </RecordHeader>
                {React.cloneElement(this.props.children, { property: this.state.property, saveHandler: this.saveHandler})}
            </div>
        );
    }
});