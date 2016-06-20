import React from 'react';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';

const RenderMap = React.createClass({

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  },

  // onDragEnd(e) {
  //   console.log('onDragEnd', e);
  // },
  //
  // onCloseClick() {
  //   console.log('onCloseClick');
  // },
  //
  // onClick(e) {
  //   console.log('onClick', e);
  // },

  render() {
    return (
      <Gmaps
        width={'100vw'}
        height={'calc(100vh - 59px)'}
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

});

export default RenderMap;
