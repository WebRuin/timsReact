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
      city: this.refs.city.value,
      state: this.refs.state.value,
      zip: this.refs.zip.value
    }
    MapActions.createBathroom(data)
  }

  render() {
    return (
      <aside className='addBathroomForm'>
        <form>
          <input placeholder='Bathroom Name' ref='name' required />
          <input placeholder='Street' ref='street' required />
          <input placeholder='City' ref='city' required />
          <section className='state'>
            <input placeholder='State' ref='state' required></input>
          </section>
          <section className='zip'>
            <input className='zip' placeholder='Zip' ref='zip' required />
          </section>
          <section>
            <button className='bathroom-btn' onClick={this.setBathroomData.bind(this)}>Add Bathroom</button>
            <button className='closeForm' onClick={this.props.handleClose}>Close</button>
          </section>
        </form>
      </aside>
    );
  }
}
