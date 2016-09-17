'use strict';

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
        description: 'You need to be a customer to us the bathroom',
        listSrc: 'http://maps.google.com/?q='
      }, {
        bathroomId: 2,
        bathroomName: 'Concord Starbucks',
        location_lat: '37.977978',
        location_long: '-122.031073',
        date_found: '12/16/2015',
        last_confirmed: '12/25/2015',
        description: 'You need to be a customer to us the bathroom',
        listSrc: 'http://maps.google.com/?q='
      }, {
        bathroomId: 3,
        bathroomName: 'San Francisco Starbucks',
        location_lat: '37.774929',
        location_long: '-122.419416',
        date_found: '12/16/2015',
        last_confirmed: '12/25/2015',
        description: 'You need to be a customer to us the bathroom',
        listSrc: 'http://maps.google.com/?q='
      }, {
        bathroomId: 4,
        bathroomName: 'Berekely Starbucks',
        location_lat: '37.871593',
        location_long: '-122.272747',
        date_found: '12/16/2015',
        last_confirmed: '12/25/2015',
        description: 'You need to be a customer to us the bathroom',
        listSrc: 'http://maps.google.com/?q='
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

  getLat() {
    return this.bathrooms.location_lat
  }

  getLong() {
    return this.bathrooms.location_long
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

  setBathroomListMap(i) {
    const lat = this.bathrooms[i].location_lat
    const long = this.bathrooms[i].location_long
    this.bathrooms[i].mapListSrc = this.bathrooms[i].mapListSrc + lat + ',' + long
    this.emit('change');

  }

  handleActions(action) {
    switch(action.type) {
      case 'CREATE_BATHROOM': {
        this.setLocation(action.bathroom)
        break
      }
      case 'SET_BATHROOM_LIST_MAP': {
        this.setBathroomListMap(action.i)
        break
      }
    }
  }
}

const mapStore = new MapStore
export default mapStore
dispatcher.register(mapStore.handleActions.bind(mapStore))
