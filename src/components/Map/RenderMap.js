'use strict';

import React from 'react';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';

export default class RenderMap extends React.Component {

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  render() {
    return (
      <Gmaps
        width={'100vw'}
        height={'100vh'}
        lat={this.props.lat}
        lng={this.props.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'AIzaSyAhpYxW1YHLVLCI3IPcjPfOJ-ey9VCPs_Q'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={this.props.lat}
          lng={this.props.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={this.props.lat + 5}
          lng={this.props.lng}
          className='mapInfo'
          content={'Hello, React :)'}
          onCloseClick={this.onCloseClick} />
      </Gmaps>
    );
  }
}
