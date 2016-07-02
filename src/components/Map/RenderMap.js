'use strict';

import React from 'react'
import { Gmaps, Marker, InfoWindow} from 'react-gmaps'

require('styles/Map.scss')

export default class RenderMap extends React.Component {

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  render() {
    const { markers } = this.props.bathrooms;

    const MarkerComponents = markers.map((markers) => {
      return (
        <Marker
          key={this.props.bathrooms.bathroomId}
          lat={this.props.bathrooms.bathrooms.lat}
          lng={this.props.bathrooms.bathrooms.lng}
          draggable={false}
        />
      )
    });

    const { infoWindows } = this.props.bathrooms

    const InfoWindowComponents = infoWindows.map((infoWindows) => {
      return (
        <InfoWindow
          key={this.props.bathrooms.bathroomId}
          lat={this.props.bathrooms.lat + 5}
          lng={this.props.bathrooms.lng}
          className='mapInfo'
          content={this.props.bathrooms.desc}
          onCloseClick={this.bathrooms.onCloseClick}
        />
      )
    })

    return (
      <Gmaps
        width={'100vw'}
        height={'calc(100vh - 59px)'}
        lat={this.props.center_lat}
        lng={this.props.center_lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'AIzaSyAhpYxW1YHLVLCI3IPcjPfOJ-ey9VCPs_Q'}}
        onMapCreated={this.onMapCreated}>
        { MarkerComponents }
        { InfoWindowComponents }
      </Gmaps>
    );
  }
}
