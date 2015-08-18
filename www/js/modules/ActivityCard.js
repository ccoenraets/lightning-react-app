import React from 'react';

import * as activityService from './services/ActivityService';

import DataGrid from "./components/DataGrid";
import * as Icons from "./Icons";

let Icon = Icons.Icon;
let ButtonIcon = Icons.ButtonIcon;

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
            promise.then((activities) => this.setState({activities: activities}));
        }
    },

    sortHandler(field) {
        alert(field);
    },

    render() {

        return (
            <div className="slds-card">
                <header className="slds-card__header slds-grid">
                    <div className="slds-media slds-media--center slds-has-flexi-truncate">
                        <div className="slds-media__figure">
                            <Icon name="contact" size="small"/>
                        </div>
                        <div className="slds-media__body">
                            <h3 className="slds-text-heading--small slds-truncate">Activities</h3>
                        </div>
                    </div>
                    <div className="slds-no-flex">
                        <div className="slds-button-group">
                            <button className="slds-button slds-button--neutral slds-button--small" onClick={this.props.onNew}>New</button>
                            <button className="slds-button slds-button--icon-border-filled">
                                <ButtonIcon name="down"/>
                                <span className="slds-assistive-text">Show More</span>
                            </button>
                        </div>
                    </div>
                </header>

                <section className="slds-card__body">
                    <DataGrid data={this.state.activities}>
                        <div header="Type" field="activity_name" sortable="true"/>
                        <div header="Date" field="activity_date" sortable="true" format="date"/>
                        <div header="First Name" field="first_name"/>
                        <div header="Last Name" field="last_name"/>
                        <div header="Price" field="price" sortable="true"/>
                    </DataGrid>
                </section>

                <footer className="slds-card__footer"><a href="#">View All</a></footer>
            </div>
        );
    }

});