import React from 'react';

import {Icon, ButtonIcon} from "./Icons";

export let HeaderField = React.createClass({

    render() {
        return (
            <div className="slds-col--padded">
                <dl>
                    <dt>
                        <p className="slds-text-heading--label slds-truncate" title="City">{this.props.label}</p>
                    </dt>
                    <dd>
                        <p className="slds-text-body--regular slds-truncate" title={this.props.value}>{this.props.value}</p>
                    </dd>
                </dl>
            </div>
        );
    }

});

export let RecordHeader = React.createClass({

    getDefaultProps() {
        return {
            icon: "account"
        }
    },

    render() {
        return (
            <div className="slds-page-header">
                <div className="slds-grid">
                    <div className="slds-col slds-has-flexi-truncate">
                        <div className="slds-media">
                            <div className="slds-media__figure">
                                <Icon name={this.props.icon} size="large"/>
                            </div>
                            <div className="slds-media__body">
                                <p className="slds-text-heading--label">{this.props.type}</p>
                                <div className="slds-grid">
                                    <h1 className="slds-text-heading--medium slds-m-right--small slds-truncate slds-align-middle" title={this.props.title}>{this.props.title}</h1>
                                    <div className="slds-col slds-shrink-none">
                                        <button className="slds-button slds-button--neutral slds-not-selected" aria-live="assertive">
                                                <span className="slds-text-not-selected">
                                                    <ButtonIcon name="add" stateful={true} position="left"/>
                                                    Follow
                                                </span>
                                                <span className="slds-text-selected">
                                                    <ButtonIcon name="check" stateful={true} position="left"/>
                                                    Following
                                                </span>
                                                <span className="slds-text-selected-focus">
                                                    <ButtonIcon name="close" stateful={true} position="left"/>
                                                    Unfollow
                                                </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slds-col slds-no-flex slds-align-bottom">
                        <div className="slds-button-group" role="group">
                            <button className="slds-button slds-button--neutral" onClick={this.props.onEdit}>Edit</button>
                            <button className="slds-button slds-button--neutral" onClick={this.props.onDelete}>Delete</button>
                            <button className="slds-button slds-button--neutral" onClick={this.props.onClone}>Clone</button>
                            <div className="slds-button--last">
                                <button className="slds-button slds-button--icon-border-filled">
                                    <ButtonIcon name="down"/>
                                    <span className="slds-assistive-text">More</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slds-grid slds-page-header__detail-row">
                    {this.props.children}
                </div>
            </div>
        );
    }

});