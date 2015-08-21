import React from 'react/addons';

export default React.createClass({

    mixins: [React.addons.LinkedStateMixin],

    getInitialState() {
        let property = this.props.property;
        return {...property};
    },

    componentWillReceiveProps(props) {
        let property = props.property;
        this.setState({...property});
    },

    save() {
        this.props.saveHandler(this.state);
    },

    render() {
        let smallInput = {
            width: "120px"
        };
        return (
            <div className="slds-form--stacked slds-grid slds-wrap slds-m-top--large">
                <div className="slds-col--padded slds-size--1-of-1 slds-medium-size--1-of-2">
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
                        <label className="slds-form-element__label" htmlFor="sample1">Picture URL</label>
                        <div className="slds-form-element__control">
                            <input className="slds-input" type="text" valueLink={this.linkState('pic')}/>
                        </div>
                    </div>
                    <div className="slds-form-element">
                        <label className="slds-form-element__label" htmlFor="sample1">Teaser</label>
                        <div className="slds-form-element__control">
                            <input className="slds-input" type="text" valueLink={this.linkState('teaser')}/>
                        </div>
                    </div>
                    <div className="slds-form-element">
                        <label className="slds-form-element__label" htmlFor="sample2">Description</label>
                        <div className="slds-form-element__control">
                            <textarea id="description" rows="10" className="slds-textarea" valueLink={this.linkState('description')}></textarea>
                        </div>
                    </div>
                </div>
                <div className="slds-col--padded slds-size--1-of-1 slds-medium-size--1-of-2">
                    <div className="slds-form-element" style={smallInput}>
                        <label className="slds-form-element__label" htmlFor="sample1">Sqft</label>
                        <div className="slds-form-element__control">
                            <input className="slds-input" type="text" valueLink={this.linkState('size')}/>
                        </div>
                    </div>
                    <div className="slds-form-element" style={smallInput}>
                        <label className="slds-form-element__label" htmlFor="sample1">Bedrooms</label>
                        <div className="slds-form-element__control">
                            <input className="slds-input" type="text" valueLink={this.linkState('bedrooms')}/>
                        </div>
                    </div>
                    <div className="slds-form-element" style={smallInput}>
                        <label className="slds-form-element__label" htmlFor="sample1">Bathrooms</label>
                        <div className="slds-form-element__control">
                            <input className="slds-input" type="text" valueLink={this.linkState('bathrooms')}/>
                        </div>
                    </div>
                    <div className="slds-form-element" style={smallInput}>
                        <label className="slds-form-element__label" htmlFor="sample1">Price</label>
                        <div className="slds-form-element__control">
                            <input className="slds-input" type="text" valueLink={this.linkState('price')}/>
                        </div>
                    </div>
                </div>
                <div className="slds-col--padded slds-size--1-of-1">
                    <button className="slds-button slds-button--brand" onClick={this.save}>Save</button>
                </div>
            </div>
        );
    }

});