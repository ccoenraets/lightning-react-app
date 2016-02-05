import React from 'react';

import ActivityTypePickList from './ActivityTypePickList';
import PropertyQuickFind from './../properties/PropertyQuickFind';
import ContactQuickFind from './../contacts/ContactQuickFind';
import {Icon} from "../components/Icons";

import SLDSDateInput from '../slds/SLDSDateInput';

export default React.createClass({

    getInitialState() {
        return {property_id: this.props.propertyId, contact_id: this.props.contactId, price: this.props.price, activity_type_id: undefined, activity_date: new Date(), comment: ""};
    },

    propertyChange(data, label) {
        this.setState({property_id: data});
    },

    contactChange(data, label) {
        this.setState({contact_id: data});
    },

    activityTypeChange(value, label) {
        this.setState({activity_type_id: value});
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

                                {this.props.propertyId ? "" :
                                    <div className="slds-form-element">
                                        <label className="slds-form-element__label" htmlFor="sample1">Property</label>
                                        <div className="slds-form-element__control">
                                            <PropertyQuickFind onChange={this.propertyChange}/>
                                        </div>
                                    </div>
                                }

                                {this.props.contactId ? "" :
                                    <div className="slds-form-element">
                                        <label className="slds-form-element__label" htmlFor="sample1">Contact</label>

                                        <div className="slds-form-element__control">
                                            <ContactQuickFind onChange={this.contactChange}/>
                                        </div>
                                    </div>
                                }

                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">Type</label>
                                    <div className="slds-form-element__control">
                                        <ActivityTypePickList onChange={this.activityTypeChange}/>
                                    </div>
                                </div>

                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">Date</label>
                                    <div className="slds-form-element__control">
                                        <SLDSDateInput/>
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