'use strict';

import React from 'react';

import  * as MapActions from '../../actions/MapActions';

require('normalize.css/normalize.css');
require('../../styles/Map/Map.scss');

export default class AddBathroomForm extends React.Component {

  setBathroomData(e) {
    e.preventDefault()

    var data = {
      name: this.refs.name.value,
      lat: this.refs.lat.value,
      long: this.refs.long.value
    }
    MapActions.createBathroom(data)
  }

  render() {
    return (
      <aside className='addBathroomForm'>
        <button onClick={this.props.handleClose}>✖</button>
        <form>
          <input placeholder='Bathroom Name' ref='name' required />
          <input placeholder='Bathroom Lat' ref='lat' required />
          <input placeholder='Bathroom Long' ref='long' required />
          <button onClick={this.setBathroomData.bind(this)}>Add Bathroom</button>
        </form>
      </aside>
    );
  }
}
