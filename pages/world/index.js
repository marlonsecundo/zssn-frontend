import React from 'react';
import GoogleMap from 'google-map-react';

import {
  Container, WorldMap, Survivors, List, ListTitle,
} from './styles';
import { Search, CardSurvivor } from './components';
import { Logo } from '~/components';

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
      <ListTitle>Survivors</ListTitle>
      <List>
        <CardSurvivor />

        <CardSurvivor />

        <CardSurvivor />
      </List>
    </Survivors>

    <Logo />
  </Container>
);

export default World;
