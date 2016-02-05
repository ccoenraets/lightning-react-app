import React from 'react';

export default React.createClass({

    getDefaultProps() {
        return {
            zoom: 12,
            centerLat: 42.3600820,
            centerLng: -71.0588800,
            height: "500px"
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
                let marker = new google.maps.Marker({position: {lat: item.location.y, lng: item.location.x}, title: 'Click for details', map: map, item: item});
                marker.addListener('click', () => {
                    // Using ES6 template here because this is rendered internally by Google Maps outside React
                    let infoHTML = `
                        <div class="slds-media slds-media--center">
                            <div class="slds-media__figure">
                                <img src="${item.pic}" style="height:100px;" alt="Placeholder" />
                            </div>
                            <div class="slds-media__body">
                                <p>${marker.item.address}</p>
                                <p>${marker.item.city}</p>
                                <p>${parseFloat(marker.item.price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                                <p class="slds-m-top--small"><a href="#property/${marker.item.property_id}">See details</a></p>
                            </div>
                        </div>`;
                    let infowindow = new google.maps.InfoWindow({content: infoHTML});
                    infowindow.open(map, marker)
                });
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