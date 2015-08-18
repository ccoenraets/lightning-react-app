import React from 'react';

import * as Icons from "./Icons";

let Icon = Icons.Icon;
let ButtonIcon = Icons.ButtonIcon;

export default React.createClass({

    render() {

        return (
            <div className="slds-card">
                <header className="slds-card__header slds-grid">
                    <div className="slds-media slds-media--center slds-has-flexi-truncate">
                        <div className="slds-media__figure">
                            <Icon name="contact" size="small"/>
                        </div>
                        <div className="slds-media__body">
                            <h3 className="slds-text-heading--small slds-truncate">Realtors</h3>
                        </div>
                    </div>
                    <div className="slds-no-flex">
                        <div className="slds-button-group">
                            <button className="slds-button slds-button--neutral slds-button--small">Add</button>
                            <button className="slds-button slds-button--icon-border-filled">
                                <ButtonIcon name="down"/>
                                <span className="slds-assistive-text">Show More</span>
                            </button>
                        </div>
                    </div>
                </header>
                <section className="slds-card__body">
                    <table className="slds-table slds-table--bordered slds-max-medium-table--stacked-horizontal slds-no-row-hover">
                        <thead>
                        <tr>
                            <th className="slds-text-heading--label slds-size--1-of-4" scope="col">Name</th>
                            <th className="slds-text-heading--label slds-size--1-of-4" scope="col">Company</th>
                            <th className="slds-text-heading--label slds-size--1-of-4" scope="col">Title</th>
                            <th className="slds-text-heading--label slds-size--1-of-4" scope="col">Email</th>
                            <th className="slds-row-action" scope="col">
                                <button className="slds-button slds-button--icon-border-filled slds-button--icon-border-small">
                                    <ButtonIcon name="down" hint="true" size="small"/>
                                    <span className="slds-assistive-text">Show More</span>
                                </button>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="slds-hint-parent">
                            <td className="slds-size--1-of-4" data-label="Name">James Smith</td>
                            <td className="slds-size--1-of-4" data-label="Company">Lightning Realty</td>
                            <td className="slds-size--1-of-4" data-label="Title">Senior Broker</td>
                            <td className="slds-size--1-of-4" data-label="Email">james@lightning.com</td>
                            <td>
                                <button className="slds-button slds-button--icon-border-filled slds-button--icon-border-small">
                                    <ButtonIcon name="down" hint="true" size="small"/>
                                    <span className="slds-assistive-text">Show More</span>
                                </button>
                            </td>
                        </tr>
                        <tr className="slds-hint-parent">
                            <td className="slds-size--1-of-4" data-label="Name">Jessica Lee</td>
                            <td className="slds-size--1-of-4" data-label="Company">Lightning Realty</td>
                            <td className="slds-size--1-of-4" data-label="Title">Senior Broker</td>
                            <td className="slds-size--1-of-4" data-label="Email">jessica@lightning.com</td>
                            <td>
                                <button className="slds-button slds-button--icon-border-filled slds-button--icon-border-small">
                                    <ButtonIcon name="down" hint="true" size="small"/>
                                    <span className="slds-assistive-text">Show More</span>
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </section>
                <footer className="slds-card__footer"><a href="#">View All</a></footer>
            </div>
        );
    }

});