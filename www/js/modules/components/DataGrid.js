import React from 'react';

import * as Icons from "./Icons";

let ButtonIcon = Icons.ButtonIcon;

let ColumnHeader = React.createClass({

    sortHandler() {
        this.props.onSort(this.props.field);
    },

    render() {
        return (
            <th className={this.props.sortable ? "slds-is-sortable" : ""} scope="col">
                <span className="slds-truncate">{this.props.label}</span>
                {this.props.sortable ?
                    <button className="slds-button slds-button--icon-bare slds-button--icon-border-small" onClick={this.sortHandler}>
                        <ButtonIcon name="arrowdown" size="--small"/>
                        <span className="slds-assistive-text">Sort</span>
                    </button> : ""
                }
            </th>
        );
    }

});

let Column = React.createClass({

    linkHandler(event) {
        if (this.props.onLink) {
            this.props.onLink(this.props.data);
        }
        event.preventDefault();
    },

    render() {
        let value;
        if (this.props.onLink) {
            value = <a href="#" onClick={this.linkHandler}>{this.props.data[this.props.field]}</a>
        } else {
            value = this.props.data[this.props.field];
        }

        return (
            <td data-label={this.props.label}>
                <span className="slds-truncate">
                    {value}
                </span>
            </td>
        );
    }

});

let Row = React.createClass({

    render() {
        var columns = [];
        for (let i=0; i<this.props.columns.length; i++) {
            let column = this.props.columns[i];
            columns.push(<Column label={column.props.header} data={this.props.data} field={column.props.field} onLink={column.props.onLink}/>);
        }
        return (
            <tr className="slds-hint-parent">
                {columns}
            </tr>
        );
    }

});

export default React.createClass({

    sortHandler(field) {
        if (this.props.onSort) {
            this.props.onSort(field);
        }
    },

    render() {
        let headers = [];
        for (let i=0; i<this.props.children.length; i++) {
            let column = this.props.children[i];
            headers.push(<ColumnHeader field={column.props.field} label={column.props.header} sortable={column.props.sortable} onSort={this.sortHandler}/>);
        }
        var rows = this.props.data.map(item => <Row data={item} columns={this.props.children}/>)
        return (
            <table className="slds-table slds-table--bordered slds-max-medium-table--stacked-horizontal slds-no-row-hover">
                <thead>
                <tr className="slds-text-heading--label">
                    {headers}
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }

})