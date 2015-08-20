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
        ContactService.findAll().then(contacts => {
            console.log(contacts);
            this.setState({contacts:contacts});
        });
    },
    onNew() {
        this.setState({new: true});
    },
    onSave(Contact) {
        ContactService.createItem(Contact).then(() => {
            this.setState({new: false});
        });
    },
    onCancel() {
        this.setState({new: false});
    },
    render() {
        return (
            <div>
                <ContactListHeader contacts={this.state.contacts} onNew={this.onNew}/>
                <ContactList contacts={this.state.contacts}/>
                {this.state.new ?  <ContactNew onSave={this.onSave} onCancel={this.onCancel}/> : ""}
            </div>
        );
    }
});