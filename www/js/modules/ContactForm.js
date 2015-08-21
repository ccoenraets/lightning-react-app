import React from 'react/addons';

export default React.createClass({

    mixins: [React.addons.LinkedStateMixin],

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
        let smallInput = {
            width: "120px"
        };
        return (
            <div className="slds-form--stacked" style={{margin: "12px"}}>
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
                    <button className="slds-button slds-button--brand" onClick={this.save}>Save</button>
                </div>
            </div>
        );
    }

});