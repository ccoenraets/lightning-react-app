import React from 'react';
import moment from 'moment';

import Tabs from './components/Tabs';

import ActivityTimeline from './ActivityTimeline';
import ActivityCard from './ActivityCard';
import NewActivity from './NewActivity';
import * as propertyService from './services/PropertyService';


let headerStyle = {
    fontWeight: "bold",
    paddingTop: "8px"

};


export default React.createClass({

    getInitialState() {
        return {};
    },

    onNewActivity() {
        this.setState({addingActivity: true})
    },

    cancelNewActivity() {
        this.setState({addingActivity: false});
    },

    render() {

        return (

            <div className="slds-form--stacked slds-grid slds-wrap slds-m-top">

                <div className="slds-col--padded slds-size--1-of-1 slds-medium-size--1-of-2">

                    <div className="slds-grid slds-wrap slds-m-top--large">

                        <div className="slds-col--padded slds-size--1-of-1 slds-m-bottom--small">
                            <span className="slds-avatar slds-avatar--circle slds-avatar--large" style={{height: "120px", width: "120px"}}>
                                <img src={this.props.pic} alt="portrait"/>
                            </span>
                        </div>

                        <div className="slds-col--padded slds-size--1-of-2">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-truncate" title="Field 1" style={headerStyle}>Address</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">{this.props.address}<br/>{this.props.city}, {this.props.state} {this.props.zip}</p>
                                </dd>
                            </dl>
                        </div>
                        <div className="slds-col--padded slds-size--1-of-2">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-truncate" title="Field 1" style={headerStyle}>Occupation</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">{this.props.occupation}</p>
                                </dd>
                            </dl>
                        </div>
                        <div className="slds-col--padded slds-size--1-of-2">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-truncate" title="Field 1" style={headerStyle}>Member since</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">{moment(this.props.member_since).format("MMMM Do YYYY")}</p>
                                </dd>
                            </dl>
                        </div>
                        <div className="slds-col--padded slds-size--1-of-2">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-truncate" title="Field 1" style={headerStyle}>Lead Source</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">{this.props.lead_source}</p>
                                </dd>
                            </dl>
                        </div>
                        <div className="slds-col--padded slds-size--1-of-2">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-truncate" title="Field 1" style={headerStyle}>Category</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">{this.props.category}</p>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>

                <div className="slds-col--padded slds-size--1-of-1 slds-medium-size--1-of-2">
                    <Tabs>
                        <div label="Activity">
                            <ActivityTimeline contactId={this.props.contact_id} showContact={false} showProperty={true}/>
                        </div>
                        <div label="Gallery">
                            Drag and drop photos in this area
                        </div>
                    </Tabs>
                </div>

                <div className="slds-col--padded slds-size--1-of-1">
                    <br/>
                    <ActivityCard contactId={this.props.contact_id} showContact={false} showProperty={true} onNew={this.onNewActivity}/>
                </div>
                {this.state.addingActivity ? <NewActivity onSave={this.saveActivity} onCancel={this.cancelActivity} contactId={this.props.contact_id} /> : ""}
            </div>
        );
    }

});