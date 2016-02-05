import React from 'react';

import QuickFind from '../components/QuickFind';

import * as contactService from '../services/ContactService';

export default React.createClass({

    getInitialState() {
        return {
            searchKey: undefined,
            list: []
        };
    },

    searchKeyChangeHandler(key) {
        contactService.findByName(key).then(list => this.setState({searchKey: key, list: list}));
    },

    render() {
        return (
            <QuickFind label="Select a contact..."
                       searchKey={this.state.searchKey}
                       valueField="contact_id"
                       labelField="name"
                       list={this.state.list}
                       onSearchKeyChange={this.searchKeyChangeHandler}
                       onChange={this.props.onChange}/>
        );
    }

});