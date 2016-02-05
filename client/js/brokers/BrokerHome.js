import React from 'react';

import * as brokerService from '../services/BrokerService';

import {HomeHeader} from '../components/PageHeader';
import BrokerList from './BrokerList';
import NewBrokerWindow from './NewBrokerWindow';

export default React.createClass({

    getInitialState() {
        return {brokers: []};
    },

    componentDidMount() {
        brokerService.findAll().then(brokers => this.setState({brokers}));
    },

    sortHandler(sortOrder) {
        brokerService.findAll(sortOrder).then(brokers => {
            this.setState({sortOrder, brokers})
        });
    },

    newHandler() {
        this.setState({addingBroker: true});
    },

    deleteHandler(data) {
        brokerService.deleteItem(data.broker_id).then(() => {
            brokerService.findAll(this.state.sort).then(brokers => this.setState({brokers}));
        });
    },

    editHandler(data) {
        window.location.hash = "#broker/" + data.broker_id + "/edit";
    },

    saveHandler(Broker) {
        brokerService.createItem(Broker).then(() => {
            brokerService.findAll().then(brokers => this.setState({addingBroker: false, brokers}));
        });
    },

    cancelHandler() {
        this.setState({addingBroker: false});
    },

    render() {
        return (
            <div>
                <HomeHeader type="brokers"
                            title="My Brokers"
                            newLabel="New Broker"
                            actions={[{value:"new", label:"New Broker"}]}
                            itemCount={this.state.brokers.length}
                            viewOptions={[{value:"table", label:"Table", icon:"table"},{value:"tiles", label:"Tiles", icon:"location"}]}
                            sortOptions={[{value:"first", label:"First Name"},{value:"last", label:"Last Name"}]}
                            onNew={this.newHandler}
                            onSort={this.sortHandler}
                            onViewChange={this.viewChangeHandler}/>
                <BrokerList brokers={this.state.brokers} onSort={this.sortHandler} onDelete={this.deleteHandler} onEdit={this.editHandler}/>
                {this.state.addingBroker ?  <NewBrokerWindow onSave={this.saveHandler} onCancel={this.cancelHandler}/> : ""}
            </div>
        );
    }
});