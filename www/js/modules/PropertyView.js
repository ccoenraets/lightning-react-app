import React from 'react';

import Tabs from './components/Tabs';
import GoogleMaps from './components/GoogleMaps';

import * as activityService from './services/ActivityService';

import ActivityTimeline from './ActivityTimeline';
import RealtorsCard from './RealtorsCard';
import ActivityCard from './ActivityCard';
import NewActivity from './NewActivity';

var headerStyle = {
    fontWeight: "bold",
    paddingTop: "8px"

};

export default React.createClass({

    getInitialState() {
        return {};
    },

    onNewOpenHouse() {
        this.setState({addingActivity: true});
    },

    cancelNewActivity() {
        this.setState({addingActivity: false});
    },

    saveNewActivity(activity) {
        activityService.createItem(activity).then(() => {
            this.setState({addingActivity: false});
        });
    },

    render() {

        let title = {
           fontSize: "24px",
           fontWeight: "300",
           padding: "12px 0 6px 0"
        };

        console.log(this.props);

        return (

            <div className="slds-form--stacked slds-grid slds-wrap slds-m-top">

                <div className="slds-col--padded slds-size--1-of-1 slds-medium-size--1-of-2">

                    <div className="slds-grid slds-wrap slds-m-top--large">

                        <div className="slds-col--padded slds-size--1-of-1">
                            <img src={this.props.pic}/>
                            <h1 style={title}>{this.props.teaser}</h1>
                            {this.props.description}
                        </div>

                        <div className="slds-col--padded slds-size--1-of-2 slds-medium-size--1-of-3">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-truncate" title="Field 1" style={headerStyle}>Sqft</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">{this.props.size}</p>
                                </dd>
                            </dl>
                        </div>

                        <div className="slds-col--padded slds-size--1-of-2 slds-medium-size--1-of-3">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-truncate" title="Field 1" style={headerStyle}>Bedrooms</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">{this.props.bedrooms}</p>
                                </dd>
                            </dl>
                        </div>

                        <div className="slds-col--padded slds-size--1-of-2 slds-medium-size--1-of-3">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-truncate" title="Field 1" style={headerStyle}>Bathrooms</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">{this.props.bathrooms}</p>
                                </dd>
                            </dl>
                        </div>

                        <div className="slds-col--padded slds-size--1-of-2 slds-medium-size--1-of-3">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-truncate" title="Field 1" style={headerStyle}>Garage</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">2 cars</p>
                                </dd>
                            </dl>
                        </div>

                        <div className="slds-col--padded slds-size--1-of-2 slds-medium-size--1-of-3">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-truncate" title="Field 1" style={headerStyle}>Finished Basement </p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">Yes</p>
                                </dd>
                            </dl>
                        </div>

                        <div className="slds-col--padded slds-size--1-of-2 slds-medium-size--1-of-3">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-truncate" title="Field 1" style={headerStyle}>Heating</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">Gas</p>
                                </dd>
                            </dl>
                        </div>

                        <div className="slds-col--padded slds-size--1-of-1">
                            <br/>
                            <GoogleMaps data={[this.props]} height="250px"/>
                        </div>

                    </div>
                </div>

                <div className="slds-col--padded slds-size--1-of-1 slds-medium-size--1-of-2">
                    <Tabs>
                        <div label="Activity">
                            <ActivityTimeline propertyId={this.props.property_id}/>
                        </div>
                        <div label="Gallery">
                            Drag and drop photos in this area
                        </div>
                    </Tabs>
                </div>

                <div className="slds-col--padded slds-size--1-of-1">
                    <br/>
                    <ActivityCard propertyId={this.props.property_id} onNew={this.onNewOpenHouse}/>
                    <RealtorsCard/>
                </div>
                {this.state.addingActivity ? <NewActivity onSave={this.saveNewActivity} onCancel={this.cancelNewActivity} propertyId={this.props.property_id} price={this.props.price}/> : ""}
            </div>
        );
    }

});