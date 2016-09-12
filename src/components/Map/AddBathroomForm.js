'use strict';

import React from 'react';

import  * as MapActions from '../../actions/MapActions';
import MapStore from '../../stores/MapStore';

require('normalize.css/normalize.css');
require('../../styles/Map/Map.scss');

export default class AddBathroomForm extends React.Component {
  constructor() {
    super();
    this.setBathrooms = this.setBathrooms.bind(this);
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

  handleUserFormInputChange(){

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
      street: this.refs.lat.value,
      city: this.refs.long.value
    }
    MapActions.createBathroom(data)
  }

  toggleShowBathroomForm() {
    this.setState({
      showAddBathroomForm: !this.state.showAddBathroomForm
    })
  }

  render() {
    return (
      <aside className='addBathroomForm'>
        <form>
          <input placeholder='Bathroom Name' ref='name' required />
          <input placeholder='Lat' ref='lat' required />
          <input placeholder='Long' ref='long' required />
          <section>
            <button className='bathroom-btn' onClick={this.setBathroomData.bind(this)}>Add Bathroom</button>
            <button className='closeForm' onClick={this.props.handleClose}>Close</button>
          </section>
        </form>
      </aside>
    );
  }
}
