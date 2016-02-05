import React from 'react';

import * as propertyService from '../services/PropertyService';

import QuickFind from '../components/QuickFind';

export default React.createClass({

    getInitialState() {
        return {
            searchKey: undefined,
            list: []
        };
    },

    searchKeyChangeHandler(key) {
        propertyService.findByName(key).then(list => this.setState({searchKey: key, list: list}));
    },

    render() {
        return (
            <QuickFind label="Select a property..."
                       searchKey={this.state.searchKey}
                       valueField="property_id"
                       labelField="address"
                       list={this.state.list}
                       onSearchKeyChange={this.searchKeyChangeHandler}
                       onChange={this.props.onChange}/>
        );
    }

});