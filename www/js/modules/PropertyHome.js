import React from 'react';

import * as propertyService from './services/PropertyService';

import GoogleMaps from './components/GoogleMaps';

import PropertyListHeader from './PropertyListHeader';
import PropertyList from './PropertyList';
import NewPropertyWindow from './NewPropertyWindow';

export default React.createClass({

    getInitialState() {
        return {view: "grid", sortOrder: "address", properties: []};
    },

    componentDidMount() {
        propertyService.findAll(this.state.sortOrder).then(properties => {
            return this.setState({properties:properties})
        });
    },

    sortHandler(sortOrder) {
        propertyService.findAll(sortOrder).then(properties => {
            this.setState({sortOrder: sortOrder, properties: properties})
        });
    },

    viewChangeHandler(value) {
        this.setState({view: value});
    },

    newHandler() {
        this.setState({addingProperty: true});
    },

    saveHandler(property) {
        propertyService.createItem(property).then(() => {
            propertyService.findAll(this.state.sort).then(properties => this.setState({addingProperty: false, properties:properties}));
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
                <div className="slds-col slds-size--1-of-1 slds-large-size--1-of-2">
                    <PropertyList properties={this.state.properties} onSortChange={this.sortChangeHandler} />
                </div>
                <div className="slds-col--padded slds-size--1-of-1 slds-large-size--1-of-2">
                    <GoogleMaps data={this.state.properties}/>
                </div>
            </div>;
        } else {
            view = <PropertyList properties={this.state.properties} onSort={this.sortHandler}/>;
        }
        return (
            <div>
                <PropertyListHeader properties={this.state.properties}
                                    onNew={this.newHandler}
                                    onSort={this.sortHandler}
                                    onViewChange={this.viewChangeHandler}/>
                {view}
                {this.state.addingProperty ? <NewPropertyWindow onSave={this.saveHandler} onCancel={this.cancelHandler}/> : ""}
            </div>
        );
    }

});