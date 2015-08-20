import React from 'react';

export default React.createClass({

    getInitialState() {
        let {property_id, address, city, state, zip, pic, teaser, description, size, bathrooms, bedrooms, price} = this.props;
        return {property_id, address, city, state, zip, pic, teaser, description, size, bathrooms, bedrooms, price};
    },

    componentWillReceiveProps(props) {
        let {property_id, address, city, state, zip, description, size, bathrooms, bedrooms, price} = props;
        this.setState({property_id, address, city, state, zip, pic, teaser, description, size, bathrooms, bedrooms, price});
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

    picChange(event) {
        this.setState({pic: event.target.value});
    },

    zipChange(event) {
        this.setState({zip: event.target.value});
    },

    teaserChange(event) {
        this.setState({teaser: event.target.value});
    },

    descriptionChange(event) {
        this.setState({description: event.target.value});
    },

    priceChange(event) {
        this.setState({price: event.target.value});
    },

    sizeChange(event) {
        this.setState({size: event.target.value});
    },

    bathroomsChange(event) {
        this.setState({bathrooms: event.target.value});
    },

    bedroomsChange(event) {
        this.setState({bedrooms: event.target.value});
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
                        <label className="slds-form-element__label" htmlFor="sample1">Picture URL</label>
                        <div className="slds-form-element__control">
                            <input className="slds-input" type="text" value={this.state.pic} onChange={this.picChange}/>
                        </div>
                    </div>
                    <div className="slds-form-element">
                        <label className="slds-form-element__label" htmlFor="sample1">Teaser</label>
                        <div className="slds-form-element__control">
                            <input className="slds-input" type="text" value={this.state.teaser} onChange={this.teaserChange}/>
                        </div>
                    </div>
                    <div className="slds-form-element">
                        <label className="slds-form-element__label" htmlFor="sample2">Description</label>
                        <div className="slds-form-element__control">
                            <textarea id="description" rows="10" className="slds-textarea" value={this.state.description} onChange={this.descriptionChange}></textarea>
                        </div>
                    </div>
                </div>
                <div className="slds-col--padded slds-size--1-of-1 slds-medium-size--1-of-2">
                    <div className="slds-form-element" style={smallInput}>
                        <label className="slds-form-element__label" htmlFor="sample1">Sqft</label>
                        <div className="slds-form-element__control">
                            <input className="slds-input" type="text" value={this.state.size} onChange={this.sizeChange}/>
                        </div>
                    </div>
                    <div className="slds-form-element" style={smallInput}>
                        <label className="slds-form-element__label" htmlFor="sample1">Bedrooms</label>
                        <div className="slds-form-element__control">
                            <input className="slds-input" type="text" value={this.state.bedrooms} onChange={this.bedroomsChange}/>
                        </div>
                    </div>
                    <div className="slds-form-element" style={smallInput}>
                        <label className="slds-form-element__label" htmlFor="sample1">Bathrooms</label>
                        <div className="slds-form-element__control">
                            <input className="slds-input" type="text" value={this.state.bathrooms} onChange={this.bathroomsChange}/>
                        </div>
                    </div>
                    <div className="slds-form-element" style={smallInput}>
                        <label className="slds-form-element__label" htmlFor="sample1">Price</label>
                        <div className="slds-form-element__control">
                            <input className="slds-input" type="text" value={this.state.price} onChange={this.priceChange}/>
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