import React from 'react';

import * as Icons from "./Icons";

let Icon = Icons.Icon;
let ButtonIcon = Icons.ButtonIcon;

export default React.createClass({

    render() {
        return (
            <div className="slds-page-header">
                <div className="slds-grid">
                    <div className="slds-col slds-has-flexi-truncate">
                        <div className="slds-media media--rec-home">
                            <div className="slds-media__figure">
                                <Icon name="user" size="large"/>
                            </div>
                            <div className="slds-media__body">
                                <p className="slds-text-heading--label">Contact</p>
                                <div className="slds-grid">
                                    <h1 className="slds-text-heading--medium slds-media--rec-home__title slds-truncate slds-align-middle" title="Record Title">{this.props.first_name} {this.props.last_name}</h1>
                                    <div className="slds-col slds-shrink-none slds-align-bottom">
                                        <button className="slds-button slds-button--neutral slds-not-selected" aria-live="assertive">
                <span className="slds-text-not-selected">
                  <ButtonIcon name="add" stateful="true" position="left"/>Follow</span>
                <span className="slds-text-selected">
                  <ButtonIcon name="add" stateful="true" position="check"/>Following</span>
                <span className="slds-text-selected-focus">
                  <ButtonIcon name="add" stateful="true" position="close"/>Unfollow</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slds-col slds-no-flex slds-align-bottom">
                        <div className="slds-button-group" role="group">
                            <a className="slds-button slds-button--neutral" href={'#contact/' + this.props.contact_id + '/edit'}>Edit</a>
                            <button className="slds-button slds-button--neutral">Delete</button>
                            <button className="slds-button slds-button--neutral">Clone</button>
                            <div className="slds-button--last">
                                <button className="slds-button slds-button--icon-border-filled">
                                    <ButtonIcon name="down"/>
                                    <span className="slds-assistive-text">More</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slds-grid slds-page-header--rec-home__detail-row">
                    <div className="slds-col--padded slds-size--1-of-3">
                        <dl className="page-header--rec-home__detail-item">
                            <dt>
                                <p className="slds-truncate" title="Field 1">Mobile Phone</p>
                            </dt>
                            <dd>
                                <p className="slds-text-body--regular slds-truncate" title="Description that demonstrates truncation with a long text field">{this.props.mobile_phone}</p>
                            </dd>
                        </dl>
                    </div>
                    <div className="slds-col--padded slds-size--1-of-3">
                        <dl className="page-header--rec-home__detail-item">
                            <dt>
                                <p className="slds-truncate" title="Field 1">House Phone</p>
                            </dt>
                            <dd>
                                <p className="slds-text-body--regular slds-truncate" title="Description that demonstrates truncation with a long text field">{this.props.home_phone}</p>
                            </dd>
                        </dl>
                    </div>
                    <div className="slds-col--padded slds-size--1-of-3">
                        <dl className="page-header--rec-home__detail-item">
                            <dt>
                                <p className="slds-truncate" title="Field 1">Email</p>
                            </dt>
                            <dd>
                                <p className="slds-text-body--regular slds-truncate" title="Description that demonstrates truncation with a long text field">{this.props.email}</p>
                            </dd>
                        </dl>
                    </div>

                </div>
            </div>
        );
    }
});