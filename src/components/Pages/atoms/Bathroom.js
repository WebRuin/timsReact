'use strict';

import React from 'react';
import * as MapActions from '../../../actions/MapActions';

require('../ListPageStyle.scss');

export default class Bathroom extends React.Component {
  componentDidMount() {
    MapActions.setBathroomListMap(this.props.id)
  }

  render() {
    return (
      <div className='list'>
        <div className='bathroom-list'>
          <h1 className='bathroom' >{this.props.bathroomName}</h1>
          <h2>{this.props.description}</h2>
        </div>
        <img className='bathroom-map' src={this.props.listSrc} alt='bathroom-map' />
      </div>
    );
  }
}
