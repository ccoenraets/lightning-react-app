import React from 'react';

import * as propertyService from '../services/PropertyService';

import DataGrid from "../components/DataGrid";
import {Icon, ButtonIcon} from "../components/Icons";

export default React.createClass({

    propertyLinkHandler(property) {
        window.location.hash = "#property/" + property.property_id;
    },

    newHandler() {
        alert("Not yet implemented in this demo app");
    },

    actionHandler(data, value, label) {
        alert("Not yet implemented in this demo app");
    },

    render() {

        return (
            <div className="slds-card">
                <header className="slds-card__header slds-grid">
                    <div className="slds-media slds-media--center slds-has-flexi-truncate">
                        <div className="slds-media__figure">
                            <Icon name="account" size="small"/>
                        </div>
                        <div className="slds-media__body">
                            <h3 className="slds-text-heading--small slds-truncate">Properties</h3>
                        </div>
                    </div>
                    <div className="slds-no-flex">
                        <div className="slds-button-group">
                            <button className="slds-button slds-button--neutral slds-button--small" onClick={this.newHandler}>New</button>
                            <button className="slds-button slds-button--icon-border-filled">
                                <ButtonIcon name="down"/>
                                <span className="slds-assistive-text">Show More</span>
                            </button>
                        </div>
                    </div>
                </header>

                <section className="slds-card__body">
                    <DataGrid data={this.props.properties} onAction={this.actionHandler}>
                        <div header="Address" field="address"  onLink={this.propertyLinkHandler}/>
                        <div header="City" field="city"/>
                        <div header="Price" field="price"format="currency"/>
                    </DataGrid>
                </section>

                <footer className="slds-card__footer"><a href="#">View All</a></footer>
            </div>
        );
    }

});