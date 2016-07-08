'use strict';

import geocoder from 'google-geocoder'
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class MapStore extends EventEmitter {
  constructor() {
    super()
    this.bathrooms = [
      {
        bathroomId: 1,
        bathroomName: 'Walnut Creek Starbucks',
        location_lat: '37.910078',
        location_long: '-122.065182',
        date_found: '12/16/2015',
        last_confirmed: '12/25/2015',
        description: 'You need to be a customer to us the bathroom'
      }, {
        bathroomId: 2,
        bathroomName: 'Concord Starbucks',
        location_lat: '37.977978',
        location_long: '-122.031073',
        date_found: '12/16/2015',
        last_confirmed: '12/25/2015',
        description: 'You need to be a customer to us the bathroom'
      }, {
        bathroomId: 3,
        bathroomName: 'San Francisco Starbucks',
        location_lat: '37.774929',
        location_long: '-122.419416',
        date_found: '12/16/2015',
        last_confirmed: '12/25/2015',
        description: 'You need to be a customer to us the bathroom'
      }, {
        bathroomId: 4,
        bathroomName: 'Berekely Starbucks',
        location_lat: '37.871593',
        location_long: '-122.272747',
        date_found: '12/16/2015',
        last_confirmed: '12/25/2015',
        description: 'You need to be a customer to us the bathroom'
      }
    ]
  }

  getBathroomLat() {
    const lat = this.bathrooms[0].location_lat
    if (lat === null) {
    } else{
      return lat
    }
  }
  getBathroomLong() {
    const long = this.bathrooms[0].location_long
    if (long === null) {
    } else{
      return long
    }
  }

  getBathrooms() {
    return this.bathrooms
  }

  getCoords(address) {
    var geo = geocoder({
      key: 'AIzaSyAhpYxW1YHLVLCI3IPcjPfOJ-ey9VCPs_Q'
    })

    var coords = geo.find({ address }, function handleResults(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {

        this.bathrooms.push({
          bathroomId: bathroomId,
          bathroomName: bathroom.name,
          location_lat: coords[0],
          location_long: coords[1]
        })

        return
      }
    }, this.setLocation(coords))
  }

  setLocation(bathroom) {
    const bathroomId = Date.now();

    this.bathrooms.push({
      bathroomId: bathroomId,
      bathroomName: bathroom.name,
      location_lat: bathroom.street,
      location_long: bathroom.city
    })

    this.emit('change');
  }

  createBathroom(bathroom) {
    const bathroomId = Date.now();
    const address = bathroom.street + ', ' + bathroom.city + ', ' + bathroom.state + '  ' + bathroom.zip
    console.log(bathroom.street + bathroom.city + bathroom.city + bathroom.zip)
    this.getCoords(address)
    console.log('The address was: ' + address)

    this.emit('change');
  }

  handleActions(action) {
    switch(action.type) {
      case 'CREATE_BATHROOM': {
        this.setLocation(action.bathroom)
        break
      }
    }
  }
}

const mapStore = new MapStore
export default mapStore
dispatcher.register(mapStore.handleActions.bind(mapStore))
