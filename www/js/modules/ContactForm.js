import React from 'react';

export default React.createClass({

    getInitialState() {
        let {contact_id, first_name, last_name, mobile_phone, home_phone, email} = this.props;
        return {contact_id, first_name, last_name, mobile_phone, home_phone, email};
    },

    componentWillReceiveProps(props) {
        let {contact_id, first_name, last_name, mobile_phone, home_phone, email} = props;
        this.setState({contact_id, first_name, last_name, mobile_phone, home_phone, email});
    },

    firstNameChange(event) {
        this.setState({first_name: event.target.value});
    },

    lastNameChange(event) {
        this.setState({last_name: event.target.value});
    },

    mobilePhoneChange(event) {
        this.setState({mobile_phone: event.target.value});
    },

    homePhoneChange(event) {
        this.setState({home_phone: event.target.value});
    },

    emailChange(event) {
        this.setState({email: event.target.value});
    },

    save() {
        this.props.saveHandler(this.state);
    },

    render() {
        let smallInput = {
            width: "120px"
        };
        return (
            <div className="slds-form--stacked" style={{margin: "12px"}}>
                <div className="slds-form-element">
                    <label className="slds-form-element__label" htmlFor="sample1">First Name</label>
                    <div className="slds-form-element__control">
                        <input className="slds-input" type="text" value={this.state.first_name} onChange={this.firstNameChange}/>
                    </div>
                </div>
                <div className="slds-form-element">
                    <label className="slds-form-element__label" htmlFor="sample1">Last name</label>
                    <div className="slds-form-element__control">
                        <input className="slds-input" type="text" value={this.state.last_name} onChange={this.lastNameChange}/>
                    </div>
                </div>
                <div className="slds-form-element">
                    <label className="slds-form-element__label" htmlFor="sample1">Mobile Phone</label>
                    <div className="slds-form-element__control">
                        <input className="slds-input" type="text" value={this.state.mobile_phone} onChange={this.mobilePhoneChange}/>
                    </div>
                </div>
                <div className="slds-form-element">
                    <label className="slds-form-element__label" htmlFor="sample2">Home Phone</label>
                    <div className="slds-form-element__control">
                        <input className="slds-input" type="text" value={this.state.home_phone} onChange={this.homePhoneChange}/>
                    </div>
                </div>
                <div className="slds-form-element">
                    <label className="slds-form-element__label" htmlFor="sample1">Email</label>
                    <div className="slds-form-element__control">
                        <input className="slds-input" type="text" value={this.state.email} onChange={this.emailChange}/>
                    </div>
                </div>
                <div className="slds-form-element">
                    <button className="slds-button slds-button--brand" onClick={this.save}>Save</button>
                </div>
            </div>
        );
    }

});