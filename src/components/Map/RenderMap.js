'use strict';

import React from 'react'

import { Gmaps, Marker, InfoWindow} from 'react-gmaps'
import MapStore from '../../stores/MapStore'
import AddBathroomForm from './AddBathroomForm'

require('styles/Map/Map.scss')

export default class RenderMap extends React.Component {
  constructor() {
    super();
    this.setBathrooms = this.setBathrooms.bind(this);
    this.state = {
      showAddBathroomForm: false,
      center_lat: MapStore.getBathroomLat(),
      center_lng: MapStore.getBathroomLong(),
      bathrooms: MapStore.getBathrooms()
    }
  }

  componentWillMount() {
    MapStore.on('change', this.setBathrooms.bind(this))
  }

  componentWillUnmount() {
    MapStore.removeListener('change', this.setBathrooms)
  }

  toggleShowBathroomForm() {
    this.setState({
      showAddBathroomForm: !this.state.showAddBathroomForm
    })
  }

  setBathrooms() {
    this.setState ({
      bathrooms: MapStore.getBathrooms()
    })
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  render() {
    var addBathroomForm = this.state.showAddBathroomForm ? <AddBathroomForm handleClose={this.toggleShowBathroomForm.bind(this)} /> : ''

    const bathroomMarkers = this.state.bathrooms.map(function(bathroom) {
      return (
        <Marker
          key={bathroom.bathroomId}
          lat={bathroom.location_lat}
          lng={bathroom.location_long}
          draggable={true}
        />
      )
    })


    const InfoWindowComponents = this.state.bathrooms.map(function(infoWindow) {
      return (
        <InfoWindow
          key={infoWindow.bathroomId}
          lat={infoWindow.location_lat + 5}
          lng={infoWindow.location_long}
          className='mapInfo'
          content={infoWindow.bathroomName}
          onCloseClick={infoWindow.onCloseClick}
        />
      )
    })

    return (
      <div className='map-box'>
        <button className='add-bathroom--btn' onClick={this.toggleShowBathroomForm.bind(this)} />
        {addBathroomForm}
        <Gmaps
          width={'100vw'}
          height={'100vh'}
          lat={this.state.center_lat - 12}
          lng={this.state.center_lng}
          zoom={12}
          loadingMessage={'Be happy'}
          params={{v: '3.exp', key: 'AIzaSyAhpYxW1YHLVLCI3IPcjPfOJ-ey9VCPs_Q'}}
          onMapCreated={this.onMapCreated}>
          { bathroomMarkers }
          { InfoWindowComponents }
        </Gmaps>
      </div>
    );
  }
}
