import React from 'react';

import * as Icons from "./Icons";

let Icon = Icons.Icon;
let ButtonIcon = Icons.ButtonIcon;

let ListItem = React.createClass({

    handleClick(event) {
        this.props.onSelected(this.props.value, this.props.label);
        event.preventDefault();
    },

    render() {
        return (
            <li className="slds-dropdown__item slds-has-icon--left" role="menuitem option" tabIndex="-1">
                <a href="#" tabIndex="-1" className="slds-truncate" onClick={this.handleClick}>
                    {this.props.label}
                    <Icon type="utility" name="table" size="small" position="right"/>
                </a>
            </li>
        );
    }

});

let Dropdown = React.createClass({

    render() {
        let items = this.props.items.map((item) => <ListItem value={item[this.props.valueField]} label={item[this.props.labelField]} onSelected={this.props.onChange}/>);
        return (
            <div className="slds-dropdown slds-dropdown--right slds-dropdown--small slds-dropdown--menu">
                <div className="slds-dropdown__header">
                    <span className="slds-text-heading--label">{this.props.header}</span>
                </div>
                <ul className="slds-dropdown__list" role="menu">
                    {items}
                </ul>
            </div>
        );
    }

});

export default React.createClass({

    getDefaultProps: function () {
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
                          items={this.props.items}
                          valueField={this.props.valueField}
                          labelField={this.props.labelField}
                          onChange={this.changeHandler}/>
            </div>
        );
    }

});