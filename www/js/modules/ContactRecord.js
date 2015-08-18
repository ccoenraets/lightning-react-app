import React from 'react';
import Router from 'react-router';

import ContactRecordHeader from './ContactRecordHeader';

import * as contactService from './services/ContactService';

var RouteHandler = Router.RouteHandler;

export default React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    getInitialState() {
        return {contact:{}};
    },

    componentDidMount() {
        var contactId = this.context.router.getCurrentParams().contactId;
        contactService.findById(contactId).then((contact) => {
            console.log(contact);
            this.setState({contact});
        });
    },

    saveHandler(contact) {
        contactService.updateItem(contact).then(() => {
            console.log('contact saved');
        });
    },

    render() {
        console.log("ContactRecord render");
        return (
            <div>
                <ContactRecordHeader {...this.state.contact}/>
                <RouteHandler {...this.state.contact} saveHandler={this.saveHandler}/>
            </div>
        );
    }
});