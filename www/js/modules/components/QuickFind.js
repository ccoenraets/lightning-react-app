import React from 'react';

import * as Icons from "./../Icons";

let Icon = Icons.Icon;
let ButtonIcon = Icons.ButtonIcon;
let InputIcon = Icons.InputIcon;

var ListItem = React.createClass({

    clickHandler(event) {
        this.props.onSelect(this.props.value, this.props.label);
        event.preventDefault();
    },

    render() {
        return (
            <li className="slds-dropdown__item slds-has-icon--left slds-dropdown__item has-icon--left" role="menuitem option" tabIndex="0">
                <a href="#" tabIndex="-1" className="slds-truncate" onClick={this.clickHandler}>{this.props.label}</a>
            </li>
        );
    }

});


var Dropdown = React.createClass({

    searchKeyChangeHandler(e) {
        this.props.onSearchKeyChange(e.target.value);
    },

    render() {

        var items = this.props.list.map((item) => {
                return <ListItem value={item[this.props.valueField]}
                                 label={item[this.props.labelField]}
                                 onSelect={this.props.onChange}/>
            }
        );
        return (
            <div className="slds-dropdown slds-dropdown--left slds-dropdown--small slds-dropdown--menu">
                <div className="slds-dropdown__header">
                    <div placeholder="Find in list..." className="slds-input-has-icon slds-input-has-icon--left slds-m-bottom--x-small">
                        <InputIcon name="search"/>
                        <label className="slds-assistive-text" for="input__filter">Search...</label>
                        <input id="input__filter" className="slds-input" type="text" placeholder="Search..." onChange={this.searchKeyChangeHandler}/>
                    </div>
                </div>
                <ul className="slds-dropdown__list" role="menu">
                    {items}
                </ul>
            </div>
        );
    }


});


export default React.createClass({

    getInitialState() {
        return {
            value: undefined,
            label: this.props.label || 'Select an option',
            active: false
        };
    },

    clickHandler() {
        this.setState({active: !this.state.active});
    },

    handleBlur(id, label) {
        console.log("picklistblur");
        //setTimeout(() => this.setState({active: false}));
    },

    changeHandler(value, label) {
        this.setState({value: value, label: label, active: false});
        this.props.onChange(value, label);
    },

    render() {
        return (
            <div aria-expanded="true" className="slds-picklist slds-picklist--quickfind">
                <button className="slds-button slds-button--neutral slds-picklist__label" aria-haspopup="true" onClick={this.clickHandler}>
                    <span className="slds-truncate">{this.state.label}</span>
                    <Icon name="down"/>
                </button>
                {this.state.active ? <Dropdown valueField={this.props.valueField} labelField={this.props.labelField} list={this.props.list} onSearchKeyChange={this.props.onSearchKeyChange} onChange={this.changeHandler}/> : ''}
            </div>
        );
    }

});