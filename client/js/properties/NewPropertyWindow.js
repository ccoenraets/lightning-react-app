import React from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

export default React.createClass({

    mixins: [LinkedStateMixin],

    getInitialState() {
        return {};
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
                            <h2 className="slds-text-heading--medium">New Property</h2>
                            <button className="slds-button slds-modal__close">
                                <svg aria-hidden="true" className="slds-button__icon slds-button__icon--inverse slds-button__icon--large">
                                </svg>
                                <span className="slds-assistive-text">Close</span>
                            </button>
                        </div>
                        <div className="slds-modal__content">

                            <div className="slds-form--stacked">
                                <fieldset className="slds-form--compound slds-m-bottom--medium">
                                    <legend className="slds-form-element__label">Address</legend>
                                    <div className="form-element__group">
                                        <div className="slds-form-element__row">
                                            <label className="slds-form-element__control slds-size--1-of-1">
                                                <small className="slds-form-element__helper">Street</small>
                                                <input className="slds-input" type="text" valueLink={this.linkState('address')}/>
                                            </label>
                                        </div>
                                        <div className="slds-form-element__row">
                                            <label className="slds-form-element__control slds-size--2-of-4">
                                                <small className="slds-form-element__helper">City</small>
                                                <input className="slds-input" type="text" valueLink={this.linkState('city')}/>
                                            </label>
                                            <label className="slds-form-element__control slds-size--1-of-4">
                                                <small className="slds-form-element__helper">State</small>
                                                <input className="slds-input" type="text" valueLink={this.linkState('state')}/>
                                            </label>
                                            <label className="slds-form-element__control slds-size--1-of-4">
                                                <small className="slds-form-element__helper">ZIP Code</small>
                                                <input className="slds-input" type="text" valueLink={this.linkState('zip')}/>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="slds-form--compound slds-m-bottom--medium">
                                    <legend className="slds-form-element__label">Size</legend>
                                    <div className="form-element__group">
                                        <div className="slds-form-element__row">
                                            <label className="slds-form-element__control slds-size--1-of-3">
                                                <small className="slds-form-element__helper">Sqft</small>
                                                <input className="slds-input" type="text" valueLink={this.linkState('size')}/>
                                            </label>
                                            <label className="slds-form-element__control slds-size--1-of-3">
                                                <small className="slds-form-element__helper">Bedrooms</small>
                                                <input className="slds-input" type="text" valueLink={this.linkState('bedrooms')}/>
                                            </label>
                                            <label className="slds-form-element__control slds-size--1-of-3">
                                                <small className="slds-form-element__helper">Bathrooms</small>
                                                <input className="slds-input" type="text" valueLink={this.linkState('bathrooms')}/>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">Asking Price</label>
                                    <div className="slds-form-element__control">
                                        <input className="slds-input" type="text" valueLink={this.linkState('price')}/>
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
            </div>
        );
    }

});