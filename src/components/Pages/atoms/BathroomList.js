'use strict';

import React from 'react';
import Bathroom from './Bathroom'
import MapStore from '../../../stores/MapStore';

require('../ListPageStyle.scss');

export default class BathroomList extends React.Component {
  render() {
    const bathrooms = MapStore.bathrooms.map((bathroom, i) => {
      return <Bathroom key={i} id={i} bathroomName={bathroom.bathroomName} description={bathroom.description} date_found={bathroom.date_found} last_confirmed={bathroom.last_confirmed} lat={bathroom.location_lat} long={bathroom.location_long} listSrc={bathroom.listSrc} />
    });

    return (
      <div>
        {bathrooms}
      </div>
    );
  }
}
