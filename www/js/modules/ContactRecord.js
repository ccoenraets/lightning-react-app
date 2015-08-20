import React from 'react';
import Router from 'react-router';

import ContactRecordHeader from './ContactRecordHeader';

import * as contactService from './services/ContactService';

let RouteHandler = Router.RouteHandler;

export default React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    getInitialState() {
        return {contact:{}};
    },

    componentDidMount() {
        let contactId = this.context.router.getCurrentParams().contactId;
        contactService.findById(contactId).then((contact) => {
            this.setState({contact});
        });
    },

    saveHandler(contact) {
        contactService.updateItem(contact).then(() => {
            console.log('contact saved');
        });
    },

    render() {
        return (
            <div>
                <ContactRecordHeader contact={this.state.contact}/>
                <RouteHandler contact={this.state.contact} saveHandler={this.saveHandler}/>
            </div>
        );
    }
});