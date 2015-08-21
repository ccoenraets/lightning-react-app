import React from 'react';

import * as ContactService from './services/ContactService';

import ContactListHeader from './ContactListHeader';
import ContactList from './ContactList';
import ContactNew from './ContactNew';

export default React.createClass({
    getInitialState() {
        return {contacts: []};
    },
    componentDidMount() {
        ContactService.findAll().then(contacts => this.setState({contacts:contacts}));
    },
    newHandler() {
        this.setState({addingContact: true});
    },
    saveHandler(Contact) {
        ContactService.createItem(Contact).then(() => {
            ContactService.findAll().then(contacts => this.setState({addingContact: false, contacts:contacts}));
        });
    },
    cancelHandler() {
        this.setState({addingContact: false});
    },
    render() {
        return (
            <div>
                <ContactListHeader contacts={this.state.contacts} onNew={this.newHandler}/>
                <ContactList contacts={this.state.contacts}/>
                {this.state.addingContact ?  <ContactNew onSave={this.saveHandler} onCancel={this.cancelHandler}/> : ""}
            </div>
        );
    }
});