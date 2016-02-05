import React from 'react';

import {Icon, ButtonIcon} from "./Icons";

let ListItem = React.createClass({

    clickHandler() {
        this.props.onSelect(this.props.data, this.props.label);
    },

    render() {
        return (
            <li className="slds-dropdown__item slds-has-icon--left" role="menuitem option" tabIndex="-1">
                <a tabIndex="-1" className="slds-truncate" onMouseDown={this.clickHandler}>{this.props.label}</a>
            </li>
        );
    }

});

let Dropdown = React.createClass({

    render() {
        let items = this.props.items.map((item) => <ListItem data={item[this.props.valueField]} label={item[this.props.labelField]} onSelect={this.props.onChange}/>);
        return (
            <div className="slds-dropdown slds-dropdown--left slds-dropdown--small slds-dropdown--menu" style={{display: this.props.isOpen ? "inherit" : "none"}}>
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
            isOpen: false
        };
    },

    focusHandler() {
        this.setState({isOpen: true});
    },

    blurHandler(value, label) {
        this.setState({isOpen: false});
    },

    changeHandler(value, label) {
        this.setState({value: value, label: label, isOpen: false});
        this.props.onChange(value, label);
    },

    render() {
        return (
            <div aria-expanded="true" className="slds-picklist" onFocus={this.focusHandler}  onBlur={this.blurHandler}>
                <button className="slds-button slds-button--neutral slds-picklist__label" aria-haspopup="true">
                    <span className="slds-truncate">{this.state.label}</span>
                    <Icon category="utility" name="down"/>
                </button>
                <Dropdown onChange={this.changeHandler} valueField={this.props.valueField} labelField={this.props.labelField} items={this.props.items} isOpen={this.state.isOpen}/>
            </div>
        );
    }

});