'use strict';

import React from 'react';

import  * as MapActions from '../../actions/MapActions';
import MapStore from '../../stores/MapStore'
import Geosuggest from 'react-geosuggest';

require('normalize.css/normalize.css');
require('../../styles/Map/Map.scss');

export default class AddBathroomForm extends React.Component {
  constructor() {
    super();
    this.setBathrooms = this.setBathrooms.bind(this)
    this.state = {
      showAddBathroomForm: false,
      current_address: '',
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

  setBathroomData(e) {
    e.preventDefault()

    var data = {
      name: this.refs.name.value,
      street: this.refs.street.value,
      city: this.refs.city.value
    }
    MapActions.createBathroom(data)
  }

  onSuggestSelect(suggest) {
    console.log(suggest);
  }

  render() {
    return (
      <aside className='addBathroomForm'>
        <form>
          <input placeholder='Bathroom Name' ref='name' required />
          <Geosuggest
            placeholder="Start typing!"
            initialValue="San Francisco"
            onSuggestSelect={this.onSuggestSelect}
            location={new google.maps.LatLng(this.state.center_lat, this.state.center_lng)}
            radius="20" />
          <input placeholder='Lat' ref='street' required />
          <input placeholder='Long' ref='city' required />
          <section>
            <button className='bathroom-btn' onClick={this.setBathroomData.bind(this)}>Add Bathroom</button>
            <button className='closeForm' onClick={this.props.handleClose}>Close</button>
          </section>
        </form>
      </aside>
    );
  }
}
