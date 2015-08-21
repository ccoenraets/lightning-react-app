var React = require( "react/addons" );
var TetherDrop = require( "tether-drop" );
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;


//require('./index.css');

module.exports = React.createClass( {

  displayName: "SLDSPopover",

  mixins: [ require( "react-onclickoutside" ) ],

  handleClickOutside: function(e) {
    if(this.props.onClose){
      this.props.onClose();
    }
  },

  propTypes: {
    attachment: React.PropTypes.string,
    targetAttachment: React.PropTypes.string,
    targetOffset: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      attachment: "top left",
      targetAttachment: "bottom left",
      targetOffset: "-30px 0",
    };
  },

  componentWillMount: function() {


    var popoverContainer = document.createElement( "span" );
    popoverContainer.className = "datepicker__container";

    this._popoverElement = popoverContainer;

    document.querySelector( "body" ).appendChild( this._popoverElement );

  },

  componentDidMount: function() {
    this._renderPopover();
  },

  componentDidUpdate: function() {
    this._renderPopover();
  },

  handleClick: function(event){
    event.preventDefault();
    event.stopPropagation();
  },

  _popoverComponent: function() {


    console.log('_popoverComponent: ', this.props.children);
    var className = this.props.className;
    return (
      <div className={className} 
        onClick={this.handleClick} 
        onMousedown={this.handleClick} 
        onMouseup={this.handleClick}>
        <div className="SLDSPopover">
          <ReactCSSTransitionGroup transitionName="SLDSPopoverAnim" transitionAppear={true}>
            {this.props.children}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );

  },


  dropOptions: function() {
    let target = this.props.targetElement?this.props.targetElement.getDOMNode():this.getDOMNode().parentNode;
    return {
      target: target,
      content: this._popoverElement,
      classes: 'drop-theme-arrows',
      position: 'bottom left',
      openOn: 'always',
      constrainToWindow:true,
      constrainToScrollParent:false
    };
  },

  _renderPopover: function() {

    React.render( this._popoverComponent(), this._popoverElement );

    if ( this.drop != null ) {
      if(this.drop.setOptions){
        this.drop.setOptions( this.dropOptions() );
      }
    } else if ( window && document ) {
      this.drop = new TetherDrop( this.dropOptions() );
    }
  },

  componentWillUnmount: function() {

    this.drop.destroy();
    React.unmountComponentAtNode( this._popoverElement );
    if ( this._popoverElement.parentNode ) {
      this._popoverElement.parentNode.removeChild( this._popoverElement );
    }
    if(this.props.onClose){
      this.props.onClose();
    }
  },

  render: function() {
    return <span></span>;
  }
} );

