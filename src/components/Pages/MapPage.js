'use strict';

import React from 'react';

import RenderMap from '../Map/RenderMap';
import MapStore from '../../stores/MapStore'

require('normalize.css/normalize.css');
require('styles/App.scss');

export default class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      center_lat: '37.7749295',
      center_lng: '-122.41941550000001',
      bathrooms: MapStore.getBathrooms()
    }
  }

  componentWillMount() {
    MapStore.on('change', this.setBathrooms)
  }

  componentWillUnmount() {
    MapStore.removeListener('change', this.setBathrooms)
  }

  setBathrooms() {
    this.setState({
      bathrooms: MapStore.getBathrooms()
    })
  }

  render() {
    return (
      <div className="index">
        <RenderMap bathrooms={this.state.bathrooms} />
      </div>
    );
  }
}
