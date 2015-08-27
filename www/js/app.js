import React from 'react';
import Router from 'react-router';

import {Icon} from './modules/components/Icons';

import PropertyHome from './modules/PropertyHome';
import PropertyRecord from './modules/PropertyRecord';
import PropertyForm from './modules/PropertyForm';
import PropertyView from './modules/PropertyView';

import ContactHome from './modules/ContactHome';
import ContactRecord from './modules/ContactRecord';
import ContactForm from './modules/ContactForm';
import ContactView from './modules/ContactView';

import BrokerHome from './modules/BrokerHome';
import BrokerRecord from './modules/BrokerRecord';
import BrokerForm from './modules/BrokerForm';
import BrokerView from './modules/BrokerView';

let DefaultRoute = Router.DefaultRoute;
let Link = Router.Link;
let Route = Router.Route;
let RouteHandler = Router.RouteHandler;

let App = React.createClass({
    render: function () {
        return (
            <div>
                <header className="menu">
                    <ul className="slds-list--horizontal">
                        <li className="slds-list__item"><Link to="app"><Icon name="account" theme={null}/>Properties</Link></li>
                        <li className="slds-list__item"><Link to="contacts"><Icon name="lead" theme={null}/>Contacts</Link></li>
                        <li className="slds-list__item"><Link to="brokers"><Icon name="people" theme={null}/>Brokers</Link></li>
                    </ul>
                </header>
                <RouteHandler/>
            </div>
        );
    }
});

let routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="property" handler={PropertyRecord}>
            <Route name="viewProperty" path=":propertyId" handler={PropertyView}/>
            <Route name="editProperty" path=":propertyId/edit" handler={PropertyForm}/>
        </Route>
        <Route name="contacts" handler={ContactHome}/>
        <Route name="contact" handler={ContactRecord}>
            <Route name="viewContact" path=":contactId" handler={ContactView}/>
            <Route name="editContact" path=":contactId/edit" handler={ContactForm}/>
        </Route>
        <Route name="brokers" handler={BrokerHome}/>
        <Route name="broker" handler={BrokerRecord}>
            <Route name="view" path=":brokerId" handler={BrokerView}/>
            <Route name="edit" path=":brokerId/edit" handler={BrokerForm}/>
        </Route>
        <DefaultRoute handler={PropertyHome}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});