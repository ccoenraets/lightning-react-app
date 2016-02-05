import React from 'react';
import moment from 'moment';

import * as activityService from '../services/ActivityService';

import {Icon, ButtonIcon} from "../components/Icons";

let getActivityTheme =  (activityName) => {
    if (activityName === "Listed") {
        return "event"
    } else if (activityName === "Open House") {
        return "event";
    } else if (activityName === "Inquiry") {
        return "email";
    } else if (activityName === "Offer") {
        return "email";
    } else if (activityName === "Price Reduction") {
        return "task";
    }
};

let ActivityListItem = React.createClass({

    render() {
        return (
            <li className="slds-timeline__item">
                <span className="slds-assistive-text">Email</span>
                <div className="slds-media slds-media--reverse">
                    <div className="slds-media__body">
                        <div className={"slds-media slds-media--timeline slds-timeline__media--" + this.props.theme}>
                            <div className="slds-media__figure">
                                <Icon name={this.props.theme}/>
                            </div>
                            <div className="slds-media__body">
                                <div className="slds-tile">
                                    <p className="tile__title slds-truncate">{this.props.activity.activity_name}</p>
                                    {this.props.showContact && this.props.activity.contact_id ?
                                    <ul className="slds-list--horizontal slds-text-body--medium">
                                        <li className="slds-list__item">
                                            <dl className="slds-dl--inline">
                                                <dt className="slds-dl--inline__label">From:</dt>
                                                <dd className="slds-dl--inline__detail"><a href={'#contact/' + this.props.activity.contact_id}>{this.props.activity.contact}</a></dd>
                                            </dl>
                                        </li>
                                    </ul> : ""}
                                    {this.props.showProperty ?
                                    <ul className="slds-list--horizontal slds-text-body--medium">
                                        <li className="slds-list__item">
                                            <dl className="slds-dl--inline">
                                                <dt className="slds-dl--inline__label">Property:</dt>
                                                <dd className="slds-dl--inline__detail"><a href={'#property/' + this.props.activity.property_id}>{this.props.activity.address}</a></dd>
                                            </dl>
                                        </li>
                                    </ul> : ""}
                                    <p className="slds-truncate slds-text-body--small">{this.props.activity.comment}</p>
                                    <div className="tile__detail">
                                        <ul className="slds-list--horizontal slds-text-body--small">
                                            <li className="slds-list__item slds-m-right--large">
                                                <dl className="slds-dl--inline">
                                                    <dt className="slds-dl--inline__label">Date:</dt>
                                                    <dd className="slds-dl--inline__detail">{moment(this.props.activity.activity_date).format("MMMM Do YYYY")}</dd>
                                                </dl>
                                            </li>
                                            <li className="slds-list__item slds-m-right--large">
                                                <dl className="slds-dl--inline">
                                                    <dt className="slds-dl--inline__label">Price:</dt>
                                                    <dd className="slds-dl--inline__detail">{parseFloat(this.props.activity.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</dd>
                                                </dl>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }

});

export default React.createClass({

    render() {
        let items = this.props.activities.map(activity => {
            let theme = getActivityTheme(activity.activity_name)
            return (
                <ActivityListItem key={activity.activity_id} activity={activity} theme={theme} showContact={this.props.showContact} showProperty={this.props.showProperty}/>
            );
        });
        return (
            <ul className="slds-timeline">
                {items}
            </ul>
        );
    }

});