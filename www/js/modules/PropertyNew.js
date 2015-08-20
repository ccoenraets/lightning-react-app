import React from 'react';

export default React.createClass({

    getInitialState() {
        let {property_id, address, city, state, zip, price} = this.props;
        return {property_id, address, city, state, zip, price};
    },

    addressChange(event) {
        this.setState({address: event.target.value});
    },

    cityChange(event) {
        this.setState({city: event.target.value});
    },

    stateChange(event) {
        this.setState({state: event.target.value});
    },

    zipChange(event) {
        this.setState({zip: event.target.value});
    },

    priceChange(event) {
        this.setState({price: event.target.value});
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
                                        <input className="slds-input" type="text" value={this.state.address} onChange={this.addressChange}/>
                                    </div>
                                </div>
                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">City</label>
                                    <div className="slds-form-element__control">
                                        <input className="slds-input" type="text" value={this.state.city} onChange={this.cityChange}/>
                                    </div>
                                </div>
                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">State</label>
                                    <div className="slds-form-element__control">
                                        <input className="slds-input" type="text" value={this.state.state} onChange={this.stateChange}/>
                                    </div>
                                </div>
                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">Zip</label>
                                    <div className="slds-form-element__control">
                                        <input className="slds-input" type="text" value={this.state.zip} onChange={this.zipChange}/>
                                    </div>
                                </div>
                                <div className="slds-form-element">
                                    <label className="slds-form-element__label" htmlFor="sample1">Asking Price</label>
                                    <div className="slds-form-element__control">
                                        <input className="slds-input" type="text" value={this.state.price} onChange={this.priceChange}/>
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