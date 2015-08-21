import React from 'react';

import * as brokerService from './services/BrokerService';

import DataGrid from "./components/DataGrid";
import {Icon, ButtonIcon} from "./components/Icons";

export default React.createClass({

    getInitialState() {
        return {brokers: []};
    },

    componentWillReceiveProps(props) {
        brokerService.findByProperty(props.propertyId).then((brokers) => {
            console.log(brokers);
            this.setState({brokers: brokers})
        });
    },

    linkHandler(contact) {
        window.location.hash = "#broker/" + broker.broker_id;
    },

    onNew() {

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
                            <h3 className="slds-text-heading--small slds-truncate">Brokers</h3>
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
                    <DataGrid data={this.state.brokers}>
                        <div header="First Name" field="first_name"/>
                        <div header="Last Name" field="last_name"/>
                        <div header="Mobile Phone" field="mobile_phone"/>
                        <div header="Office Phone" field="office_phone"/>
                    </DataGrid>
                </section>

                <footer className="slds-card__footer"><a href="#">View All</a></footer>
            </div>
        );
    }

});