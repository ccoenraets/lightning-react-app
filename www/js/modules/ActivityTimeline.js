import React from 'react';

import * as Icons from "./Icons";
import * as activityService from './services/ActivityService';
import moment from './utils/moment';

let Icon = Icons.Icon;
let ButtonIcon = Icons.ButtonIcon;

let ActivityListItem = React.createClass({

    render() {
        return (
            <li className="slds-timeline__item">
                <span className="slds-assistive-text">Email</span>
                <div className="slds-media slds-media--reverse">
                    <div className="slds-media__body">
                        <div className="slds-media slds-media--timeline slds-timeline__media--email">
                            <div className="slds-media__figure">
                                <Icon name="email" size="--medium"/>
                            </div>
                            <div className="slds-media__body">
                                <div className="slds-tile">
                                    <p className="tile__title slds-truncate">{this.props.activity.activity_name}</p>
                                    {this.props.activity.contact_id ?
                                    <ul className="slds-list--horizontal slds-text-body--medium">
                                        <li className="slds-list__item">
                                            <dl className="slds-dl--inline">
                                                <dt className="slds-dl--inline__label">From:</dt>
                                                <dd className="slds-dl--inline__detail"><a href={'#contact/' + this.props.activity.contact_id}>{this.props.activity.first_name} {this.props.activity.last_name}</a></dd>
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

    getInitialState() {
        return {activities: []};
    },

    componentWillReceiveProps(props) {
        let promise;
        if (props.propertyId) {
            promise = activityService.findByProperty(props.propertyId);
        } else if (props.contactId) {
            promise = activityService.findByContact(props.contactId);
        }
        if (promise) {
            promise.then((activities) => {
                console.log(activities);
                this.setState({activities: activities})
            });
        }
    },

    render() {
        var items = this.state.activities.map(function (activity) {
            return (
                <ActivityListItem key={activity.activity_id} activity={activity}/>
            );
        });
        return (
            <ul className="slds-timeline">
                {items}
            </ul>
        );
    }
});