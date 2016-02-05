import React from 'react';
import {Router} from 'react-router';

import * as contactService from '../services/ContactService';

import {RecordHeader, HeaderField} from '../components/PageHeader';

export default React.createClass({

    getInitialState() {
        return { contact: {} };
    },

    componentDidMount() {
        let contactId = this.props.params.contactId;
        contactService.findById(contactId).then(contact => this.setState({contact}));
    },

    saveHandler(contact) {
        contactService.updateItem(contact);
    },

    editHandler() {
        window.location.hash= '#contact/' + this.state.contact.contact_id + '/edit';
    },

    deleteHandler() {
        contactService.deleteItem(this.state.contact.contact_id).then(() => {
            window.location.hash = '#contacts';
        });
    },

    cloneHandler() {

    },

    render() {
        return (
            <div>
                <RecordHeader type="Contact" icon="lead" title={this.state.contact.first_name + ' ' + this.state.contact.last_name}
                              onEdit={this.editHandler}
                              onDelete={this.deleteHandler}
                              onClone={this.cloneHandler}>
                    <HeaderField label="Mobile Phone" value={this.state.contact.mobile_phone}/>
                    <HeaderField label="Home Phone" value={this.state.contact.home_phone}/>
                    <HeaderField label="Email" value={this.state.contact.email}/>
                </RecordHeader>
                {React.cloneElement(this.props.children, { contact: this.state.contact, saveHandler: this.saveHandler})}
            </div>
        );
    }
});