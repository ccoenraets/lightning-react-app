import React from 'react';
import moment from 'moment';

import * as activityService from '../services/ActivityService';

import Tabs from '../components/Tabs';

import ActivityTimeline from './../activities/ActivityTimeline';
import ActivityCard from './../activities/ActivityCard';
import NewActivityWindow from './../activities/NewActivityWindow';

export default React.createClass({

    getInitialState() {
        return {activities: []};
    },

    componentWillReceiveProps(props) {
        this.loadActivities(props.contact.contact_id);
    },

    loadActivities(contactId) {
        activityService.findByContact(contactId).then(activities => this.setState({activities}));
    },

    newActivityHandler() {
        this.setState({addingActivity: true})
    },

    deleteActivityHandler(activity) {
        activityService.deleteItem(activity.activity_id).then(() => this.loadActivities(this.props.contact.contact_id));
    },

    cancelActivityHandler() {
        this.setState({addingActivity: false});
    },

    saveActivityHandler(activity) {
        activityService.createItem(activity).then(() => {
            this.loadActivities(this.props.contact.contact_id);
            this.setState({addingActivity: false});
        });
    },

    render() {

        return (

            <div className="slds-form--stacked slds-grid slds-wrap slds-m-top">

                <div className="slds-col--padded slds-size--1-of-1 slds-medium-size--1-of-2">

                    <div className="slds-grid slds-wrap slds-m-top--large">

                        <div className="slds-col--padded slds-size--1-of-1 slds-m-bottom--small">
                            <span className="slds-avatar slds-avatar--circle slds-avatar--large" style={{height: "120px", width: "120px"}}>
                                <img src={this.props.contact.pic} alt="portrait"/>
                            </span>
                        </div>

                        <div className="slds-col--padded slds-size--1-of-2 slds-m-top--medium">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-text-heading--label slds-truncate" title="Field 1">Address</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">{this.props.contact.address}<br/>{this.props.contact.city} {this.props.contact.state} {this.props.contact.zip}</p>
                                </dd>
                            </dl>
                        </div>
                        <div className="slds-col--padded slds-size--1-of-2 slds-m-top--medium">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-text-heading--label slds-truncate" title="Field 1">Occupation</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">{this.props.contact.occupation}</p>
                                </dd>
                            </dl>
                        </div>
                        <div className="slds-col--padded slds-size--1-of-2 slds-m-top--medium">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-text-heading--label slds-truncate" title="Field 1">Member since</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">{moment(this.props.contact.member_since).format("MMMM Do YYYY")}</p>
                                </dd>
                            </dl>
                        </div>
                        <div className="slds-col--padded slds-size--1-of-2 slds-m-top--medium">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-text-heading--label slds-truncate" title="Field 1">Lead Source</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">{this.props.contact.lead_source}</p>
                                </dd>
                            </dl>
                        </div>
                        <div className="slds-col--padded slds-size--1-of-2 slds-m-top--medium">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-text-heading--label slds-truncate" title="Field 1">Category</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">{this.props.contact.category}</p>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>

                <div className="slds-col--padded slds-size--1-of-1 slds-medium-size--1-of-2">
                    <Tabs>
                        <div label="Activities">
                            <ActivityTimeline contactId={this.props.contact.contact_id} activities={this.state.activities} showContact={false} showProperty={true}/>
                        </div>
                        <div label="Related">
                            Not implemented in this demo
                        </div>
                    </Tabs>
                </div>

                <div className="slds-col--padded slds-size--1-of-1">
                    <br/>
                    <ActivityCard contactId={this.props.contact.contact_id} activities={this.state.activities} showContact={false} showProperty={true}
                          onNew={this.newActivityHandler}
                          onDelete={this.deleteActivityHandler}/>

                </div>
                {this.state.addingActivity ? <NewActivityWindow onSave={this.saveActivityHandler} onCancel={this.cancelActivityHandler} contactId={this.props.contact.contact_id} /> : ""}
            </div>
        );
    }

});