import React from 'react';

let TabHeader = React.createClass({

    clickHandler(event) {
        this.props.onClick(this.props.index);
        event.preventDefault();
    },

    render() {
        return (
            <li className={'slds-tabs__item slds-text-heading--label ' + (this.props.active ? 'slds-active' : '')} title="Item One" role="presentation">
                <a href="#" role="tab" tabIndex="0" aria-selected="true" onClick={this.clickHandler}>{this.props.label}</a>
            </li>
        );
    }

});

let Tab = React.createClass({

    render() {
        return (
            <div className={'slds-tabs__content' + (this.props.active ? ' slds-show' : ' slds-hide')} role="tabpanel">
                {this.props.children}
            </div>
        );
    }

});

export default React.createClass({

    getInitialState() {
        return {activeTabIndex: 0}
    },

    clickHandler(index) {
        this.setState({activeTabIndex: index});
    },

    render() {
        let tabHeaders = [];
        let tabs = [];
        for (let i=0; i<this.props.children.length; i++)  {
            let tab = this.props.children[i];
            tabHeaders.push(<TabHeader label={tab.props.label} index={i} active={i===this.state.activeTabIndex} onClick={this.clickHandler}/>);
            tabs.push(<Tab active={i===this.state.activeTabIndex}>{tab.props.children}</Tab>);
        };

        return (
            <div className="slds-tabs--default" role="tablist">
                <ul className="slds-tabs--default__nav" role="presentation">
                    {tabHeaders}
                </ul>
                {tabs}
            </div>
        )
    }

});