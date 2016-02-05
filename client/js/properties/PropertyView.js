import React from 'react';

import * as activityService from '../services/ActivityService';

import Tabs from '../components/Tabs';
import GoogleMaps from '../components/GoogleMaps';
import FileDropArea from '../components/FileDropArea';

import ActivityTimeline from './../activities/ActivityTimeline';
import BrokerCard from './../brokers/BrokerCard';
import ActivityCard from './../activities/ActivityCard';
import NewActivityWindow from './../activities/NewActivityWindow';

export default React.createClass({

    getInitialState() {
        return {activities: []};
    },

    componentWillReceiveProps(props) {
        this.loadActivities(props.property.property_id);
    },

    loadActivities(propertyId) {
        activityService.findByProperty(propertyId).then(activities => this.setState({activities}));
    },

    newActivityHandler() {
        this.setState({addingActivity: true});
    },

    deleteActivityHandler(activity) {
        activityService.deleteItem(activity.activity_id).then(() => this.loadActivities(this.props.property.property_id));
    },

    cancelActivityHandler() {
        this.setState({addingActivity: false});
    },

    saveActivityHandler(activity) {
        activityService.createItem(activity).then(() => {
            this.loadActivities(this.props.property.property_id);
            this.setState({addingActivity: false});
        });
    },

    render() {

        let title = {
           fontSize: "24px",
           fontWeight: "300",
           padding: "12px 0 6px 0"
        };

        return (

            <div className="slds-form--stacked slds-grid slds-wrap slds-m-top">

                <div className="slds-col--padded slds-size--1-of-1 slds-medium-size--1-of-2">

                    <div className="slds-grid slds-wrap slds-m-top--large">

                        <div className="slds-col--padded slds-size--1-of-1">
                            <img src={this.props.property.pic}/>
                            <h1 style={title}>{this.props.property.teaser}</h1>
                            {this.props.property.description}
                        </div>

                        <div className="slds-col--padded slds-size--1-of-2 slds-medium-size--1-of-3 slds-m-top--medium">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-text-heading--label slds-truncate" title="Field 1">Sqft</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">{this.props.property.size}</p>
                                </dd>
                            </dl>
                        </div>

                        <div className="slds-col--padded slds-size--1-of-2 slds-medium-size--1-of-3 slds-m-top--medium">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-text-heading--label slds-truncate" title="Field 1">Bedrooms</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">{this.props.property.bedrooms}</p>
                                </dd>
                            </dl>
                        </div>

                        <div className="slds-col--padded slds-size--1-of-2 slds-medium-size--1-of-3 slds-m-top--medium">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-text-heading--label slds-truncate" title="Field 1">Bathrooms</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">{this.props.property.bathrooms}</p>
                                </dd>
                            </dl>
                        </div>

                        <div className="slds-col--padded slds-size--1-of-2 slds-medium-size--1-of-3 slds-m-top--medium">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-text-heading--label slds-truncate" title="Field 1">Garage</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">2 cars</p>
                                </dd>
                            </dl>
                        </div>

                        <div className="slds-col--padded slds-size--1-of-2 slds-medium-size--1-of-3 slds-m-top--medium">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-text-heading--label slds-truncate" title="Field 1">Finished Basement </p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">Yes</p>
                                </dd>
                            </dl>
                        </div>

                        <div className="slds-col--padded slds-size--1-of-2 slds-medium-size--1-of-3 slds-m-top--medium">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-text-heading--label slds-truncate" title="Field 1">Heating</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">Gas</p>
                                </dd>
                            </dl>
                        </div>

                        <div className="slds-col--padded slds-size--1-of-1">
                            <br/>
                            <GoogleMaps data={this.props.property} height="250px"/>
                        </div>

                    </div>
                </div>

                <div className="slds-col--padded slds-size--1-of-1 slds-medium-size--1-of-2">
                    <Tabs>
                        <div label="Activities">
                            <ActivityTimeline propertyId={this.props.property.property_id} activities={this.state.activities} showContact={true} showProperty={false}/>
                        </div>
                        <div label="Gallery">
                            <FileDropArea/>
                        </div>
                    </Tabs>
                </div>

                <div className="slds-col--padded slds-size--1-of-1">
                    <br/>
                    <ActivityCard propertyId={this.props.property.property_id} activities={this.state.activities} showContact={true} showProperty={false}
                        onNew={this.newActivityHandler}
                        onDelete={this.deleteActivityHandler}/>
                    <BrokerCard propertyId={this.props.property.property_id}/>
                </div>
                {this.state.addingActivity ? <NewActivityWindow onSave={this.saveActivityHandler} onCancel={this.cancelActivityHandler} propertyId={this.props.property.property_id} price={this.props.property.price}/> : ""}
            </div>
        );
    }

});