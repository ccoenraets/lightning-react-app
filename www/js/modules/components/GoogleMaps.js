import React from 'react';

export default React.createClass({

    getDefaultProps() {
        return {
            zoom: 12,
            centerLat: 42.3600820,
            centerLng: -71.0588800,
            height: "500px",
            infoWindow:
                `<div>
                    <div className="slds-dialog__content" role="document">
                        <div className="slds-dialog__head">
                            <p className="slds-text-heading--small">Dialog Heading</p>
                        </div>
                        <div className="slds-dialog__body">Sit nulla est ex deserunt exercitation anim occaecat. Nostrud <a href="#">ullamco</a> deserunt aute id consequat veniam incididunt duis in sint irure nisi.</div>
                    </div>
                </div>`
        };
    },

    componentWillReceiveProps(props) {
        this.addMarkers(this.state.map, props.data);
    },

    addMarkers(map, data) {
        if (!data) return;
        if (!Array.isArray(data)) {
            data = [data];
        }
        for (let i=0; i<data.length; i++) {
            let item = data[i];
            if (item.location) {
                let marker = new google.maps.Marker({position: {lat: item.location.y, lng: item.location.x}, title: 'Click for details', map: map});
                let infowindow = new google.maps.InfoWindow({
                    content: this.props.infoWindow
                });
                marker.addListener('click', () => infowindow.open(map, marker));
            }
        }
    },

    componentDidMount() {
        let mapOptions = {
            center: new google.maps.LatLng(this.props.centerLat, this.props.centerLng),
            zoom: this.props.zoom
        };
        let map = new google.maps.Map(this.getDOMNode(), mapOptions);
        this.setState({map: map});
        this.addMarkers(map, this.props.data);
    },

    render() {
        return (
            <div style={{height: this.props.height}}></div>
        );
    }

});