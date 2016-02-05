import React from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

export default React.createClass({

    mixins: [LinkedStateMixin],

    getInitialState() {
        let broker = this.props.broker;
        return {...broker};
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
                            <h2 className="slds-text-heading--medium">New Broker</h2>
                            <button className="slds-button slds-modal__close">
                                <svg aria-hidden="true" className="slds-button__icon slds-button__icon--inverse slds-button__icon--large">
                                </svg>
                                <span className="slds-assistive-text">Close</span>
                            </button>
                        </div>
                        <div className="slds-modal__content">

                            <div className="slds-form--stacked">
                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">First Name</label>
                                    <div className="slds-form-element__control">
                                        <input className="slds-input" type="text" valueLink={this.linkState('first_name')}/>
                                    </div>
                                </div>
                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">Last Name</label>
                                    <div className="slds-form-element__control">
                                        <input className="slds-input" type="text" valueLink={this.linkState('last_name')}/>
                                    </div>
                                </div>
                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">Cell Phone</label>
                                    <div className="slds-form-element__control">
                                        <input className="slds-input" type="text" valueLink={this.linkState('mobile_phone')}/>
                                    </div>
                                </div>
                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">Office Phone</label>
                                    <div className="slds-form-element__control">
                                        <input className="slds-input" type="text" valueLink={this.linkState('office_phone')}/>
                                    </div>
                                </div>
                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">Email</label>
                                    <div className="slds-form-element__control">
                                        <input className="slds-input" type="text" valueLink={this.linkState('email')}/>
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