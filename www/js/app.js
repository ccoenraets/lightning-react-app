import React from 'react';
import Router from 'react-router';

import PropertyHome from './modules/PropertyHome';
import PropertyRecord from './modules/PropertyRecord';
import PropertyForm from './modules/PropertyForm';
import PropertyView from './modules/PropertyView';

import ContactHome from './modules/ContactHome';
import ContactRecord from './modules/ContactRecord';
import ContactForm from './modules/ContactForm';
import ContactView from './modules/ContactView';

let DefaultRoute = Router.DefaultRoute;
let Link = Router.Link;
let Route = Router.Route;
let RouteHandler = Router.RouteHandler;

let App = React.createClass({
    render: function () {
        let headerStyles = {
            backgroundColor: "#01344E",
            padding: "8px"
        };
        return (
            <div>
                <header style={headerStyles}>
                    <ul  className="slds-list--horizontal">
                        <li className="slds-list__item"><Link to="app">Properties</Link></li>
                        <li className="slds-list__item"><Link to="contacts">Contacts</Link></li>
                        <li className="slds-list__item"><Link to="property">Brokers</Link></li>
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
        <DefaultRoute handler={PropertyHome}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});