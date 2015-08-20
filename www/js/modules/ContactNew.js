import React from 'react';

export default React.createClass({

    getInitialState() {
        let {contact_id, first_name, last_name, mobile_phone, home_phone, email} = this.props;
        return {contact_id, first_name, last_name, mobile_phone, home_phone, email};
    },

    firstNameChange(event) {
        this.setState({first_name: event.target.value});
    },

    lastNameChange(event) {
        this.setState({last_name: event.target.value});
    },

    cellPhoneChange(event) {
        this.setState({mobile_phone: event.target.value});
    },

    housePhoneChange(event) {
        this.setState({home_phone: event.target.value});
    },

    emailChange(event) {
        this.setState({email: event.target.value});
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
                            <h2 className="slds-text-heading--medium">New Contact</h2>
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
                                        <input className="slds-input" type="text" value={this.state.first_name} onChange={this.firstNameChange}/>
                                    </div>
                                </div>
                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">Last Name</label>
                                    <div className="slds-form-element__control">
                                        <input className="slds-input" type="text" value={this.state.last_name} onChange={this.lastNameChange}/>
                                    </div>
                                </div>
                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">Cell Phone</label>
                                    <div className="slds-form-element__control">
                                        <input className="slds-input" type="text" value={this.state.mobile_phone} onChange={this.cellPhpneChange}/>
                                    </div>
                                </div>
                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">House Phone</label>
                                    <div className="slds-form-element__control">
                                        <input className="slds-input" type="text" value={this.state.house_phone} onChange={this.housePhoneChange}/>
                                    </div>
                                </div>
                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">Email</label>
                                    <div className="slds-form-element__control">
                                        <input className="slds-input" type="text" value={this.state.email} onChange={this.emailChange}/>
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