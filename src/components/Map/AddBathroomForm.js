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
      street: this.refs.street.value,
      city: this.refs.city.value
    }
    MapActions.createBathroom(data)
  }

  render() {
    return (
      <aside className='addBathroomForm'>
        <form>
          <input placeholder='Bathroom Name' ref='name' required />
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
