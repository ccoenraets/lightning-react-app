import React from 'react';

import * as propertyService from '../services/PropertyService';

import GoogleMaps from '../components/GoogleMaps';
import {HomeHeader} from '../components/PageHeader';

import PropertyList from './PropertyList';
import NewPropertyWindow from './NewPropertyWindow';

export default React.createClass({

    getInitialState() {
        return {view: "grid", sortOrder: "address", properties: []};
    },

    componentDidMount() {
        propertyService.findAll(this.state.sortOrder).then(properties => this.setState({properties}));
    },

    sortHandler(sortOrder) {
        propertyService.findAll(sortOrder).then(properties => {
            this.setState({sortOrder, properties})
        });
    },

    deleteHandler(data) {
        propertyService.deleteItem(data.property_id).then(() => {
            propertyService.findAll(this.state.sort).then(properties => this.setState({properties}));
        });
    },

    editHandler(data) {
        window.location.hash = "#property/" + data.property_id + "/edit";
    },

    viewChangeHandler(value) {
        this.setState({view: value});
    },

    newHandler() {
        this.setState({addingProperty: true});
    },

    saveHandler(property) {
        propertyService.createItem(property).then(() => {
            propertyService.findAll(this.state.sort).then(properties => this.setState({addingProperty: false, properties}));
        });
    },

    cancelHandler() {
        this.setState({addingProperty: false});
    },

    render() {
        let view;
        if (this.state.view === "map") {
            view = <GoogleMaps data={this.state.properties}/>;
        } else if (this.state.view === "split") {
            view = <div className="slds-grid slds-wrap">
                <div className="slds-col slds-size--1-of-1 slds-large-size--2-of-3">
                    <PropertyList properties={this.state.properties} onSortChange={this.sortChangeHandler} onDelete={this.deleteHandler} onEdit={this.editHandler}/>
                </div>
                <div className="slds-col--padded slds-size--1-of-1 slds-large-size--1-of-3">
                    <GoogleMaps data={this.state.properties}/>
                </div>
            </div>;
        } else {
            view = <PropertyList properties={this.state.properties} onSort={this.sortHandler} onDelete={this.deleteHandler} onEdit={this.editHandler}/>;
        }
        return (
            <div>
                <HomeHeader type="properties"
                            title="My Properties"
                            newLabel="New Property"
                            actions={[{value:"new", label:"New Property"}]}
                            itemCount={this.state.properties.length}
                            viewOptions={[{value:"table", label:"Table", icon:"table"},{value:"map", label:"Map", icon:"location"},{value:"split", label:"Split", icon:"layout"}]}
                            sortOptions={[{value:"address", label:"Address"},{value:"city", label:"City"},{value:"price", label:"Price"}]}
                            onNew={this.newHandler}
                            onSort={this.sortHandler}
                            onViewChange={this.viewChangeHandler}/>
                {view}
                {this.state.addingProperty ? <NewPropertyWindow onSave={this.saveHandler} onCancel={this.cancelHandler}/> : ""}
            </div>
        );
    }

});