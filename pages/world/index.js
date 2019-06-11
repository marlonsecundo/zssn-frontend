import React from 'react';
import GoogleMap from 'google-map-react';

import {
  Container, WorldMap, Survivors, List,
} from './styles';
import { Search } from './components';

const World = () => (
  <Container>
    <WorldMap>
      <GoogleMap
        center={{ lat: 40.73, lng: -73 }}
        defaultCenter={{ lat: 40.73, lng: -73 }}
        defaultZoom={11}
        bootstrapURLKeys={{
          key: '',
          /* key: 'AIzaSyCNZFT6IgyNQJEZoowp8S9l_-O3jnDNrLQ' */
        }}
      />
    </WorldMap>
    <Survivors>
      <Search />
      <List />
    </Survivors>
  </Container>
);

export default World;
