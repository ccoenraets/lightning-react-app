import React from 'react';
import Router from 'react-router';

import * as propertyService from './services/PropertyService';

import PropertyRecordHeader from './PropertyRecordHeader';

let RouteHandler = Router.RouteHandler;

export default React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    getInitialState() {
        return {property:{}};
    },

    componentDidMount() {
        let propertyId = this.context.router.getCurrentParams().propertyId;
        propertyService.findById(propertyId).then((property) => {
            this.setState({property});
        });
    },

    saveHandler(property) {
        propertyService.updateItem(property).then(() => {
            console.log('property saved');
        });
    },

    render() {
        return (
            <div>
                <PropertyRecordHeader property={this.state.property}/>
                <RouteHandler property={this.state.property} saveHandler={this.saveHandler}/>
            </div>
        );
    }
});