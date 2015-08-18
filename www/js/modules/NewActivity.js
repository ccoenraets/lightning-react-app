import React from 'react';

import DatePicker from './components/DatePicker';
import PickListActivity from './PickListActivity';
import ContactLookup from './ContactLookup';
import ContactQuickFind from './ContactQuickFind';
import * as Icons from './Icons';

let Icon = Icons.Icon;

export default React.createClass({

    getInitialState() {
        return {property_id: this.props.propertyId, price: this.props.price, contact_id: undefined, activity_type_id: undefined, activity_date: new Date(), comment: ""};
    },

    contactSelectionChange(data, label) {
        this.setState({contact_id: data});
    },

    activityTypeSelectionChange(data, label) {
        this.setState({activity_type_id: data});
    },

    activityDateChange(event) {
        this.setState({activity_date: event.target.value});
    },

    priceChange(event) {
        this.setState({price: event.target.value});
    },

    commentChange(event) {
        this.setState({comment: event.target.value});
    },

    onSave() {
        this.props.onSave(this.state);
    },

    render() {
        return (
            <div>
                <div aria-hidden="false" role="dialog" className="slds-modal slds-fade-in-open">
                    <div className="slds-modal__container">
                        <div className="slds-modal__header">
                            <h2 className="slds-text-heading--medium">New Activity</h2>
                            <button className="slds-button slds-modal__close">
                                <svg aria-hidden="true" className="slds-button__icon slds-button__icon--inverse slds-button__icon--large">
                                </svg>
                                <span className="slds-assistive-text">Close</span>
                            </button>
                        </div>
                        <div className="slds-modal__content">

                            <div className="slds-form--stacked">

                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">Contact</label>
                                    <div className="slds-form-element__control">
                                        <ContactQuickFind onChange={this.contactSelectionChange}/>
                                    </div>
                                </div>

                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">Type</label>
                                    <div className="slds-form-element__control">
                                        <PickListActivity onSelectionChange={this.activityTypeSelectionChange}/>
                                    </div>
                                </div>

                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">Date</label>
                                    <div className="slds-form-element__control">
                                        <DatePicker value={this.state.activity_date} onChange={this.activityDateChange}/>
                                    </div>
                                </div>

                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">Price</label>
                                    <div className="slds-form-element__control">
                                        <input className="slds-input" type="text" value={this.state.price} onChange={this.priceChange}/>
                                    </div>
                                </div>

                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample2">Comment</label>
                                    <div className="slds-form-element__control">
                                        <textarea id="description" className="slds-textarea" value={this.state.comment} onChange={this.commentChange}></textarea>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="slds-modal__footer">
                            <button className="slds-button slds-button--neutral" onClick={this.props.onCancel}>Cancel</button>
                            <button className="slds-button slds-button--neutral slds-button--brand" onClick={this.onSave}>Save</button>
                        </div>
                    </div>
                </div>
                <div className="slds-modal-backdrop slds-modal-backdrop--open"></div>
                <br/>
                <br/>
            </div>
        );
    }

});