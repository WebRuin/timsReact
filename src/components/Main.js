require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Nav from './Nav/Nav';
import RenderMap from './Map/RenderMap';

var lat = '';
var lng = '';
navigator.geolocation.getCurrentPosition(function(position) {
  lat = position.coords.latitude;
  lng = position.coords.longitude;
  console.log(lat);
  console.log(lng);
});

class AppComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      userData: {
          id: ''
        , user: ''
        , email: ''
        , password: ''
      },
      map: {
          lat: ''
        , lng: ''
      }
    };
  }

  render() {
    return (
      <div className="index">
        <Nav />
        <RenderMap lat={lat} lng={lng} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
