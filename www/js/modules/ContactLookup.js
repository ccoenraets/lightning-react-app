import React from 'react';

import * as ContactService from './services/ContactService';

import Lookup from './components/Lookup';

export default React.createClass({

    getInitialState() {
        return {
            searchKey: undefined,
            items: []
        };
    },

    searchKeyChangeHandler(key) {
        ContactService.findByName(key).then(items => this.setState({searchKey: key, items: items}));
    },

    render() {
        return (
            <Lookup label="Select a contact"
                           searchKey={this.state.searchKey}
                           items={this.state.items}
                           dataField="contact_id"
                           labelField="name"
                           onSearchKeyChange={this.searchKeyChangeHandler}
                           onChange={this.props.onChange} />
        );
    }

});