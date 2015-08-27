import React from 'react';
import Router from 'react-router';

import * as brokerService from './services/BrokerService';

import {RecordHeader, HeaderField} from './components/PageHeader';

let RouteHandler = Router.RouteHandler;

export default React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    getInitialState() {
        return {broker:{}};
    },

    componentDidMount() {
        let brokerId = this.context.router.getCurrentParams().brokerId;
        brokerService.findById(brokerId).then(broker => this.setState({broker}));
    },

    saveHandler(broker) {
        brokerService.updateItem(broker);
    },

    editHandler() {
        window.location.hash= '#broker/' + this.state.broker.broker_id + '/edit';
    },

    deleteHandler() {
        brokerService.deleteItem(this.state.broker.broker_id).then(() => {
            window.location.hash = '#brokers';
        });
    },

    cloneHandler() {

    },

    render() {
        return (
            <div>
                <RecordHeader type="Broker" icon="people" title={this.state.broker.first_name + ' ' + this.state.broker.last_name}
                              onEdit={this.editHandler}
                              onDelete={this.deleteHandler}
                              onClone={this.cloneHandler}>
                    <HeaderField label="Mobile Phone" value={this.state.broker.mobile_phone}/>
                    <HeaderField label="Office Phone" value={this.state.broker.office_phone}/>
                    <HeaderField label="Email" value={this.state.broker.email}/>
                </RecordHeader>
                <RouteHandler broker={this.state.broker} saveHandler={this.saveHandler}/>
            </div>
        );
    }
});