import React from 'react';
import Router from 'react-router';

import PropertyRecordHeader from './PropertyRecordHeader';
import * as propertyService from './services/PropertyService';

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
            console.log(property);
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
                <PropertyRecordHeader {...this.state.property}/>
                <RouteHandler {...this.state.property} saveHandler={this.saveHandler}/>
            </div>
        );
    }
});