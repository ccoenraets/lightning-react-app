import React from 'react';

import * as ContactService from './services/ContactService';

import ContactListHeader from './ContactListHeader';
import ContactList from './ContactList';
import NewContactWindow from './NewContactWindow';

export default React.createClass({

    getInitialState() {
        return {contacts: []};
    },

    componentDidMount() {
        ContactService.findAll().then(contacts => this.setState({contacts}));
    },

    newHandler() {
        this.setState({addingContact: true});
    },

    deleteHandler(data) {
        ContactService.deleteItem(data.contact_id).then(() => {
            ContactService.findAll(this.state.sort).then(contacts => this.setState({contacts}));
        });
    },

    editHandler(data) {
        window.location.hash = "#contact/" + data.contact_id + "/edit";
    },

    saveHandler(Contact) {
        ContactService.createItem(Contact).then(() => {
            ContactService.findAll().then(contacts => this.setState({addingContact: false, contacts}));
        });
    },

    cancelHandler() {
        this.setState({addingContact: false});
    },

    render() {
        return (
            <div>
                <ContactListHeader contacts={this.state.contacts} onNew={this.newHandler}/>
                <ContactList contacts={this.state.contacts} onDelete={this.deleteHandler} onEdit={this.editHandler}/>
                {this.state.addingContact ?  <NewContactWindow onSave={this.saveHandler} onCancel={this.cancelHandler}/> : ""}
            </div>
        );
    }
});