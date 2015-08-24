import React from 'react';

import {Icon, ButtonIcon} from "./Icons";

export let DropdownItem = React.createClass({

    clickHandler(event) {
        event.preventDefault();
        this.props.onSelect(this.props.value, this.props.label);
    },

    render() {
        // slds-has-icon--left
        return (
            <li className="slds-dropdown__item" role="menuitem option" tabIndex="-1">
                <a href="#" tabIndex="-1" className="slds-truncate" onClick={this.clickHandler}>
                    {this.props.label}
                    {this.props.icon ?
                    <Icon category="utility" name={this.props.icon} size="small" position="right"/>
                    : ""}
                </a>
            </li>
        );
    }

});

let Dropdown = React.createClass({

    getDefaultProps() {
        return {position: "right"};
    },

    render() {
        let items = this.props.items.map((item) => React.cloneElement(item, {onSelect: this.props.onChange}));
        let className = "slds-dropdown slds-dropdown--menu";
        if (this.props.position) className = className + " slds-dropdown--" + this.props.position;
        if (this.props.size) className = className + " slds-dropdown--" + this.props.size;
        return (
            <div className={className}>
                {this.props.header ?
                <div className="slds-dropdown__header">
                    <span className="slds-text-heading--label">{this.props.header}</span>
                </div> : ""}
                <ul className="slds-dropdown__list" role="menu">
                    {items}
                </ul>
            </div>
        );
    }

});

export let ButtonDropdown = React.createClass({

    getDefaultProps() {
        return {
            valueField: "value",
            labelField: "label"
        };
    },

    getInitialState() {
        return {
            value: undefined,
            label: this.props.label || 'Select an option'
        };
    },

    changeHandler(value, label) {
        this.setState({value: value, label: label, opened: false});
        this.props.onChange(value, label);
    },

    render() {
        return (
            <div className="slds-dropdown-trigger" aria-haspopup="true">
                <button className="slds-button slds-button--icon-more" aria-haspopup="true">
                    <ButtonIcon name={this.props.icon}/>
                    <span className="slds-assistive-text">Settings</span>
                    <ButtonIcon name="down" size="x-small"/>
                </button>
                <Dropdown header={this.props.header}
                          valueField={this.props.valueField}
                          labelField={this.props.labelField}
                          items={this.props.children}
                          size="small"
                          onChange={this.changeHandler}/>
            </div>
        );
    }

});

export let ActionButton = React.createClass({

    changeHandler(value, label) {
        this.setState({value: value, label: label, opened: false});
        this.props.onChange(value, label);
    },

    render() {
        return (
            <div className="slds-dropdown-trigger" aria-haspopup="true">
                <button className="slds-button slds-button--icon-border-filled slds-button--icon-border-small">
                    <ButtonIcon name="down" size="small"/>
                    <span className="slds-assistive-text">Show More</span>
                </button>
                <Dropdown header={this.props.header}
                    valueField={this.props.valueField}
                    labelField={this.props.labelField}
                    items={this.props.children}
                    onChange={this.changeHandler}/>
            </div>
        );
    }

});


