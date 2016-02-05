import React from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

export default React.createClass({

    mixins: [LinkedStateMixin],

    getInitialState() {
        let contact = this.props.contact;
        return {...contact};
    },

    componentWillReceiveProps(props) {
        let contact = props.contact;
        this.setState({...contact});
    },

    save() {
        this.props.saveHandler(this.state);
    },

    render() {
        return (
            <div className="slds-form--stacked slds-grid slds-wrap slds-m-top--large">
                <div className="slds-col--padded slds-size--1-of-1 slds-medium-size--1-of-2">
                    <div className="slds-form-element">
                        <label className="slds-form-element__label" htmlFor="sample1">First Name</label>
                        <div className="slds-form-element__control">
                            <input className="slds-input" type="text" valueLink={this.linkState('first_name')}/>
                        </div>
                    </div>
                    <div className="slds-form-element">
                        <label className="slds-form-element__label" htmlFor="sample1">Last name</label>
                        <div className="slds-form-element__control">
                            <input className="slds-input" type="text" valueLink={this.linkState('last_name')}/>
                        </div>
                    </div>
                    <fieldset className="slds-form--compound slds-m-top--medium slds-m-bottom--medium">
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
                </div>
                <div className="slds-col--padded slds-size--1-of-1 slds-medium-size--1-of-2">
                    <div className="slds-form-element">
                        <label className="slds-form-element__label" htmlFor="sample1">Occupation</label>
                        <div className="slds-form-element__control">
                            <input className="slds-input" type="text" valueLink={this.linkState('occupation')}/>
                        </div>
                    </div>
                    <div className="slds-form-element">
                        <label className="slds-form-element__label" htmlFor="sample1">Mobile Phone</label>
                        <div className="slds-form-element__control">
                            <input className="slds-input" type="text" valueLink={this.linkState('mobile_phone')}/>
                        </div>
                    </div>
                    <div className="slds-form-element">
                        <label className="slds-form-element__label" htmlFor="sample2">Home Phone</label>
                        <div className="slds-form-element__control">
                            <input className="slds-input" type="text" valueLink={this.linkState('home_phone')}/>
                        </div>
                    </div>
                    <div className="slds-form-element">
                        <label className="slds-form-element__label" htmlFor="sample1">Email</label>
                        <div className="slds-form-element__control">
                            <input className="slds-input" type="text" valueLink={this.linkState('email')}/>
                        </div>
                    </div>
                    <div className="slds-form-element">
                        <label className="slds-form-element__label" htmlFor="sample1">Picture URL</label>
                        <div className="slds-form-element__control">
                            <input className="slds-input" type="text" valueLink={this.linkState('pic')}/>
                        </div>
                    </div>
                </div>
                <div className="slds-col--padded slds-m-top--medium slds-size--1-of-1">
                    <button className="slds-button slds-button--brand" onClick={this.save}>Save</button>
                </div>
            </div>
        );
    }

});