import React from 'react';

import {Icon, InputIcon} from "./Icons";

let LookupItem = React.createClass({

    clickHandler(event) {
        this.props.onSelect(this.props[valueField], this.props[labelField]);
        event.preventDefault();
    },

    render() {
        return (
            <li className="slds-lookup__item" role="presentation">
                <a href="#" role="option" onClick={this.clickHandler}>
                    <Icon name="user" size="small"/>
                    {this.props[this.props.labelField]}
                </a>
            </li>
        );

    }

});

let ListBox = React.createClass({

    getInitialState() {
        return ({items: [], opened: false});
    },

    componentWillReceiveProps(props) {
        if (props.items) {
            this.setState({items: props.items, opened: true});
        }
    },

    render() {
        let lookupItems = this.props.items.map(item => <LookupItem data={item} valueField={this.props.valueField} dataField={this.props.dataField} onSelect={this.props.onChange}/>);
        return (
            <div className="slds-lookup__menu" role="listbox">
                <ul className="slds-lookup__list" role="presentation">
                    {lookupItems}
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
            opened: false
        };
    },

    changeHandler(value, label) {
        this.setState({data: value, label: label, opened: false});
        this.props.onChange(value, label);
    },

    render() {
        return (
            <div className="slds-lookup__control slds-input-has-icon slds-input-has-icon--right">
                <InputIcon name="search"/>
                <input className="slds-input--bare" type="text" aria-label="lookup" label="Lookup Label" aria-haspopup="true" aria-autocomplete="list" role="combobox" onChange={this.props.onSearchKeyChange}/>
                <ListBox valueField={this.props.dataField} labelField={this.props.labelField} items={this.props.items} onChange={this.changeHandler}/>
            </div>
        );
    }


})