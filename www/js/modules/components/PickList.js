import React from 'react';

import * as Icons from "./../Icons";

let Icon = Icons.Icon;
let ButtonIcon = Icons.ButtonIcon;

var ListItem = React.createClass({

    handleClick() {
        this.props.onSelected(this.props.data, this.props.label);
    },

    render() {
        return (
            <li className="slds-dropdown__item slds-has-icon--left" role="menuitem option" tabIndex="-1">
                <a tabIndex="-1" className="slds-truncate" onClick={this.handleClick}>{this.props.label}</a>
            </li>
        );
    }

});

var Dropdown = React.createClass({

    render() {
        let items = this.props.items.map((item) => <ListItem data={item[this.props.dataField]} label={item[this.props.labelField]} onSelected={this.props.onChange}/>);
        return (
            <div ref="dd" className="slds-dropdown slds-dropdown--left slds-dropdown--small slds-dropdown--menu">
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
            id: undefined,
            label: this.props.label || 'Select an option',
            opened: false
        };
    },

    handleFocus() {
        this.setState({opened: true});
    },

    handleBlur(id, label) {
        setTimeout(() => this.setState({opened: false}),100);
    },

    changeHandler(id, label) {
        this.setState({id: id, label: label, opened: false});
        this.props.onChange(id, label);
    },

    render() {
        return (
            <div aria-expanded="true" className="slds-picklist">
                <button className="slds-button slds-button--neutral slds-picklist__label" aria-haspopup="true" onFocus={this.handleFocus}  onBlur={this.handleBlur} >
                    <span className="slds-truncate">{this.state.label}</span>
                    <Icon name="down"/>
                </button>
                {this.state.opened ? <Dropdown onChange={this.changeHandler} dataField={this.props.dataField} labelField={this.props.labelField} items={this.props.items}/> : ''}
            </div>
        );
    }

});