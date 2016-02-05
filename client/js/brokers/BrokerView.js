import React from 'react';
import moment from 'moment';

import * as propertyService from '../services/PropertyService';

import Tabs from '../components/Tabs';

import PropertyCard from './../properties/PropertyCard';

export default React.createClass({

    getInitialState() {
        return {properties: []};
    },

    componentWillReceiveProps(props) {
        propertyService.findByBroker(props.broker.broker_id).then(properties => this.setState({properties}));
    },

    render() {

        return (

            <div className="slds-form--stacked slds-grid slds-wrap slds-m-top">

                <div className="slds-col--padded slds-size--1-of-1">

                    <div className="slds-grid slds-wrap slds-m-top--large">

                        <div className="slds-col--padded slds-size--1-of-1 slds-m-bottom--small">
                            <span className="slds-avatar slds-avatar--circle slds-avatar--large" style={{height: "120px", width: "120px"}}>
                                <img src={this.props.broker.pic} alt="portrait"/>
                            </span>
                        </div>

                        <div className="slds-col--padded slds-size--1-of-2 slds-m-top--medium">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-text-heading--label slds-truncate" title="Field 1">Address</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">{this.props.broker.address}<br/>{this.props.broker.city}, {this.props.broker.state} {this.props.broker.zip}</p>
                                </dd>
                            </dl>
                        </div>
                        <div className="slds-col--padded slds-size--1-of-2 slds-m-top--medium">
                            <dl className="page-header--rec-home__detail-item">
                                <dt>
                                    <p className="slds-text-heading--label slds-truncate" title="Field 1">Title</p>
                                </dt>
                                <dd>
                                    <p className="slds-text-body--regular slds-truncate" title="">{this.props.broker.title}</p>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>

                <div className="slds-col--padded slds-size--1-of-1">
                    <br/>
                    <PropertyCard brokerId={this.props.broker.broker_id} properties={this.state.properties}/>
                </div>

            </div>
        );
    }

});