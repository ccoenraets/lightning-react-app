import React from 'react/addons';

export default React.createClass({

    mixins: [React.addons.LinkedStateMixin],

    getInitialState() {
        let property = this.props.property;
        return {...property};
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
                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">Address</label>
                                    <div className="slds-form-element__control">
                                        <input className="slds-input" type="text" valueLink={this.linkState('address')}/>
                                    </div>
                                </div>
                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">City</label>
                                    <div className="slds-form-element__control">
                                        <input className="slds-input" type="text" valueLink={this.linkState('city')}/>
                                    </div>
                                </div>
                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">State</label>
                                    <div className="slds-form-element__control">
                                        <input className="slds-input" type="text" valueLink={this.linkState('state')}/>
                                    </div>
                                </div>
                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">Zip</label>
                                    <div className="slds-form-element__control">
                                        <input className="slds-input" type="text" valueLink={this.linkState('zip')}/>
                                    </div>
                                </div>
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