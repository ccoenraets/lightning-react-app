import React from 'react';

import * as Dropdown from './components/Dropdown';
import * as Icons from './components/Icons';

let ButtonIcon = Icons.ButtonIcon;
let ButtonDropdown = Dropdown.ButtonDropdown;
let DropdownItem = Dropdown.DropdownItem;

export default React.createClass({

    render() {

        return (
            <div className="slds-page-header">
                <div className="slds-grid">
                    <div className="slds-col slds-has-flexi-truncate">
                        <p className="slds-text-heading--label">Properties:</p>
                        <div className="slds-grid">
                            <div className="slds-grid slds-type-focus slds-no-space">
                                <h1 className="slds-text-heading--medium slds-truncate" title="My Leads (truncates)">My Properties:</h1>
                                <button className="slds-button slds-button--icon-bare slds-shrink-none slds-align-middle slds-m-left--x-small">
                                    <ButtonIcon name="down"/>
                                    <span className="slds-assistive-text">View More</span>
                                </button>
                            </div>
                            <button className="slds-button slds-button--icon-more slds-shrink-none slds-m-left--large" aria-haspopup="true">
                                <ButtonIcon name="settings"/>
                                <span className="slds-assistive-text">Settings</span>
                                <ButtonIcon name="down" size="x-small"/>
                            </button>
                            <button className="slds-button slds-button--brand slds-button-space-left slds-m-right--medium slds-shrink-none slds-align-middle slds-hide" aria-hidden="true">Save</button>
                        </div>
                    </div>
                    <div className="slds-col slds-no-flex slds-align-bottom">
                        <div className="slds-grid">
                            <div className="slds-button-space-left">
                                <ButtonDropdown header="Display as" icon="table" onChange={this.props.onViewChange}>
                                    <DropdownItem value="table" label="Table" icon="table"/>
                                    <DropdownItem value="map" label="Map" icon="location"/>
                                    <DropdownItem value="split" label="Split" icon="layout"/>
                                </ButtonDropdown>
                            </div>
                            <div className="slds-button-group slds-button-space-left" role="group">
                                <button className="slds-button slds-button--icon-border">
                                    <ButtonIcon name="chart"/>
                                    <span className="slds-assistive-text">Chart</span>
                                </button>
                                <button className="slds-button slds-button--icon-border">
                                    <ButtonIcon name="filterList"/>
                                    <span className="slds-assistive-text">Filter List</span>
                                </button>
                                <ButtonDropdown header="Sort By" icon="sort" onChange={this.props.onSort}>
                                    <DropdownItem value="address" label="Address"/>
                                    <DropdownItem value="city" label="City"/>
                                    <DropdownItem value="price" label="Price"/>
                                </ButtonDropdown>
                            </div>
                            <div className="slds-button-group" role="group">
                                <button className="slds-button slds-button--neutral slds-button--small" onClick={this.props.onNew}>New Property</button>
                                <div className="slds-button--last">
                                    <button className="slds-button slds-button--icon-border-filled">
                                        <ButtonIcon name="down"/>
                                        <span className="slds-assistive-text">More Actions</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="slds-text-body--small slds-page-header__detail">{this.props.properties.length} properties • Sorted by Price</p>
            </div>
        );
    }

});