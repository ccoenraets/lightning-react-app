import React from 'react';

import * as Icons from './components/Icons';

let ButtonIcon = Icons.ButtonIcon;

export default React.createClass({

    render() {

        console.log('header render');
        console.log(this.props.contacts);

        return (
            <div className="slds-page-header">
                <div className="slds-grid">
                    <div className="slds-col slds-has-flexi-truncate">
                        <p className="slds-text-heading--label">Contacts</p>
                        <div className="slds-grid">
                            <div className="slds-grid slds-type-focus slds-no-space">
                                <h1 className="slds-text-heading--medium slds-truncate" title="My Leads (truncates)">My Contacts</h1>
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
                                <button className="slds-button slds-button--icon-more" aria-haspopup="true">
                                    <ButtonIcon name="table"/>
                                    <span className="slds-assistive-text">Table</span>
                                    <ButtonIcon name="down" size="x-small"/>
                                </button>
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
                                <button className="slds-button slds-button--icon-more">
                                    <ButtonIcon name="sort"/>
                                    <span className="slds-assistive-text">Sort</span>
                                    <ButtonIcon name="down" size="x-small"/>
                                    <span className="slds-assistive-text">More</span>
                                </button>
                            </div>
                            <div className="slds-button-group" role="group">
                                <button className="slds-button slds-button--neutral slds-button--small" onClick={this.props.onNew}>New Contact</button>
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
                <p className="slds-text-body--small slds-page-header__detail">{this.props.contacts.length} contacts • Sorted by Name</p>
            </div>
     );
    }
});