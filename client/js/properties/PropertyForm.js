import React from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

export default React.createClass({

    mixins: [LinkedStateMixin],

    getInitialState() {
        let property = this.props.property;
        return {...property};
    },

    componentWillReceiveProps(props) {
        let property = props.property;
        this.setState({...property});
    },

    latitudeChange(event) {
        this.setState({location: {x: parseFloat(event.target.value), y: this.state.location.y}});
    },

    longitudeChange(event) {
        this.setState({location: {x: this.state.location.x, y: parseFloat(event.target.value)}});
    },

    save() {
        this.props.saveHandler(this.state);
    },

    render() {
        return (
            <div className="slds-form--stacked slds-grid slds-wrap slds-m-top--large">
                <div className="slds-col--padded slds-size--1-of-1 slds-medium-size--1-of-2">
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
                    <fieldset className="slds-form--compound slds-m-bottom--small">
                        <legend className="slds-form-element__label">Location</legend>
                        <div className="form-element__group">
                            <div className="slds-form-element__row">
                                <label className="slds-form-element__control slds-size--1-of-2">
                                    <small className="slds-form-element__helper">Latitude</small>
                                    <input className="slds-input" type="text" value={this.state.location ? this.state.location.x : ""} onChange={this.latitudeChange}/>
                                </label>
                                <label className="slds-form-element__control slds-size--1-of-2">
                                    <small className="slds-form-element__helper">Longitude</small>
                                    <input className="slds-input" type="text" value={this.state.location ? this.state.location.y : ""} onChange={this.longitudeChange}/>
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="slds-form--compound slds-m-bottom--small">
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
                <div className="slds-col--padded slds-size--1-of-1 slds-medium-size--1-of-2">
                    <div className="slds-form-element">
                        <label className="slds-form-element__label" htmlFor="sample1">Teaser</label>
                        <div className="slds-form-element__control">
                            <input className="slds-input" type="text" valueLink={this.linkState('teaser')}/>
                        </div>
                    </div>
                    <div className="slds-form-element">
                        <label className="slds-form-element__label" htmlFor="sample2">Description</label>
                        <div className="slds-form-element__control">
                            <textarea id="description" rows="6" className="slds-textarea" valueLink={this.linkState('description')}></textarea>
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