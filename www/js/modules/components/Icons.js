import React from 'react';

export let ButtonIcon = React.createClass({

    render() {
        var useTag = '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#' + this.props.name + '" />';
        var className  = "slds-button__icon";
        if (this.props.stateful) {
            className += "--stateful";
        }
        if (this.props.position) {
            className = className + " slds-button__icon--" + this.props.position;
        }
        if (this.props.size) {
            className = className + " slds-button__icon--" + this.props.size;
        }
        if (this.props.hint) {
            className = className + " slds-button__icon--hint";
        }
        return <svg  aria-hidden="true" className={className} dangerouslySetInnerHTML={{__html: useTag }} />;
    }

});

export let Icon = React.createClass({

    render() {
        var useTag = '<use xlink:href="/assets/icons/' + this.props.type + '-sprite/svg/symbols.svg#' + this.props.name + '" />';
        var className  = "slds-icon";
        if (this.props.stateful) {
            className += "--stateful";
        }
        if (this.props.size) {
            className = className + " slds-icon--" + this.props.size;
        }
        className = className + " slds-icon-standard-" + this.props.name;
        return <svg  aria-hidden="true" className={className} dangerouslySetInnerHTML={{__html: useTag }} />;
    }

});

export let InputIcon = React.createClass({

    render() {
        var useTag = '<use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#' + this.props.name + '" />';
        var className  = "slds-input__icon slds-icon-text-default";
        return <svg  aria-hidden="true" className={className} dangerouslySetInnerHTML={{__html: useTag }} />;
    }

});