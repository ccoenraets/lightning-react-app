import React from 'react';

import * as Icons from "./Icons";

let Icon = Icons.Icon;
let ButtonIcon = Icons.ButtonIcon;
let InputIcon = Icons.InputIcon;

var Dropdown = React.createClass({

    render() {
        return (
            <div className="slds-dropdown slds-dropdown--left slds-datepicker" aria-hidden="false" data-selection="single">
                <div className="slds-datepicker__filter slds-grid">
                    <div className="slds-datepicker__filter--month slds-grid slds-grid--align-spread slds-size--3-of-4">
                        <div className="slds-align-middle" role="button" aria-labelledby="bn_prev-label" tabIndex="0">
                            <button className="slds-button slds-button--icon-container">
                                <ButtonIcon name="left" size="small"/>
                                <span className="slds-assistive-text">Previous Month</span>
                            </button>
                        </div>
                        <div id="month" className="slds-align-middle" role="heading" aria-live="assertive" aria-atomic="true">June 2015</div>
                        <div className="slds-align-middle" role="button" aria-labelledby="bn_next-label" tabIndex="0">
                            <button className="slds-button slds-button--icon-container">
                                <ButtonIcon name="right" size="small"/>
                                <span className="slds-assistive-text">Next Month</span>
                            </button>
                        </div>
                    </div>
                    <div className="slds-picklist datepicker__filter--year slds-shrink-none">
                        <button id="year" className="slds-button slds-button--neutral slds-picklist__label" aria-haspopup="true" aria-expanded="false">2015
                            <Icon name="down" size="small"/>
                        </button>
                    </div>
                </div>
                <table className="datepicker__month" role="grid" aria-labelledby="month" tabIndex="0">
                    <thead>
                    <tr id="weekdays">
                        <th id="Sunday">
                            <abbr title="Sunday">S</abbr>
                        </th>
                        <th id="Monday">
                            <abbr title="Monday">M</abbr>
                        </th>
                        <th id="Tuesday">
                            <abbr title="Tuesday">T</abbr>
                        </th>
                        <th id="Wednesday">
                            <abbr title="Wednesday">W</abbr>
                        </th>
                        <th id="Thursday">
                            <abbr title="Thursday">T</abbr>
                        </th>
                        <th id="Friday">
                            <abbr title="Friday">F</abbr>
                        </th>
                        <th id="Saturday">
                            <abbr title="Saturday">S</abbr>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="slds-disabled-text" headers="Sunday" role="gridcell" aria-disabled="true">
                            <span className="slds-day">31</span>
                        </td>
                        <td headers="Monday" role="gridcell" aria-selected="false">
                            <span className="slds-day">1</span>
                        </td>
                        <td headers="Tuesday" role="gridcell" aria-selected="false">
                            <span className="slds-day">2</span>
                        </td>
                        <td headers="Wednesday" role="gridcell" aria-selected="false">
                            <span className="slds-day">3</span>
                        </td>
                        <td headers="Thursday" role="gridcell" aria-selected="false">
                            <span className="slds-day">4</span>
                        </td>
                        <td headers="Friday" role="gridcell" aria-selected="false">
                            <span className="slds-day">5</span>
                        </td>
                        <td headers="Saturday" role="gridcell" aria-selected="false">
                            <span className="slds-day">6</span>
                        </td>
                    </tr>
                    <tr>
                        <td headers="Sunday" role="gridcell" aria-selected="false">
                            <span className="slds-day">7</span>
                        </td>
                        <td headers="Monday" role="gridcell" aria-selected="false">
                            <span className="slds-day">8</span>
                        </td>
                        <td headers="Tuesday" role="gridcell" aria-selected="false">
                            <span className="slds-day">9</span>
                        </td>
                        <td headers="Wednesday" role="gridcell" aria-selected="false">
                            <span className="slds-day">10</span>
                        </td>
                        <td headers="Thursday" role="gridcell" aria-selected="false">
                            <span className="slds-day">11</span>
                        </td>
                        <td headers="Friday" role="gridcell" aria-selected="false">
                            <span className="slds-day">12</span>
                        </td>
                        <td headers="Saturday" role="gridcell" aria-selected="false">
                            <span className="slds-day">13</span>
                        </td>
                    </tr>
                    <tr>
                        <td headers="Sunday" role="gridcell" aria-selected="false">
                            <span className="slds-day">14</span>
                        </td>
                        <td headers="Monday" role="gridcell" aria-selected="false">
                            <span className="slds-day">15</span>
                        </td>
                        <td headers="Tuesday" role="gridcell" aria-selected="false">
                            <span className="slds-day">16</span>
                        </td>
                        <td headers="Wednesday" role="gridcell" aria-selected="false">
                            <span className="slds-day">17</span>
                        </td>
                        <td className="slds-is-today" headers="Thursday" role="gridcell" aria-selected="false">
                            <span className="slds-day">18</span>
                        </td>
                        <td headers="Friday" role="gridcell" aria-selected="false">
                            <span className="slds-day">19</span>
                        </td>
                        <td headers="Saturday" role="gridcell" aria-selected="false">
                            <span className="slds-day">20</span>
                        </td>
                    </tr>
                    <tr>
                        <td headers="Sunday" role="gridcell" aria-selected="false">
                            <span className="slds-day">21</span>
                        </td>
                        <td headers="Monday" role="gridcell" aria-selected="false">
                            <span className="slds-day">22</span>
                        </td>
                        <td className="slds-is-selected" headers="Tuesday" role="gridcell" aria-selected="true">
                            <span className="slds-day">23</span>
                        </td>
                        <td headers="Wednesday" role="gridcell" aria-selected="false">
                            <span className="slds-day">24</span>
                        </td>
                        <td headers="Thursday" role="gridcell" aria-selected="false">
                            <span className="slds-day">25</span>
                        </td>
                        <td headers="Friday" role="gridcell" aria-selected="false">
                            <span className="slds-day">26</span>
                        </td>
                        <td headers="Saturday" role="gridcell" aria-selected="false">
                            <span className="slds-day">27</span>
                        </td>
                    </tr>
                    <tr>
                        <td headers="Sunday" role="gridcell" aria-selected="false">
                            <span className="slds-day">28</span>
                        </td>
                        <td headers="Monday" role="gridcell" aria-selected="false">
                            <span className="slds-day">29</span>
                        </td>
                        <td headers="Tuesday" role="gridcell" aria-selected="false">
                            <span className="slds-day">30</span>
                        </td>
                        <td className="slds-disabled-text" headers="Wednesday" role="gridcell" aria-disabled="true">
                            <span className="slds-day">1</span>
                        </td>
                        <td className="slds-disabled-text" headers="Thursday" role="gridcell" aria-disabled="true">
                            <span className="slds-day">2</span>
                        </td>
                        <td className="slds-disabled-text" headers="Friday" role="gridcell" aria-disabled="true">
                            <span className="slds-day">3</span>
                        </td>
                        <td className="slds-disabled-text" headers="Saturday" role="gridcell" aria-disabled="true">
                            <span className="slds-day">4</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <span id="bn_prev-label" className="slds-assistive-text">Go to previous month</span>
                <span id="bn_next-label" className="slds-assistive-text">Go to next month</span>
            </div>

        );
    }


});


export default React.createClass({

    handleFocus() {
        console.log("focus");
    },

    handleBlur() {
        console.log("blur");
    },

    render() {
        return (
            <div className="slds-input-has-icon slds-input-has-icon--right">
                <InputIcon name="event"/>
                <input id="date" className="slds-input" type="text" placeholder="Pick a Date" label="Date Picker Label" onFocus={this.handleFocus} onBlur={this.handleBlur}/>
            </div>
        );
    }

});