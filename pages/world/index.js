import React from 'react';
import GoogleMap from 'google-map-react';

import {
  Container, WorldMap, Survivors, List, ListTitle,
} from './styles';
import { Search, CardSurvivor, Menu } from './components';
import { Logo } from '~/components';

const World = () => (
  <Container>
    <WorldMap>
      <GoogleMap
        center={{ lat: 40.73, lng: -73 }}
        defaultCenter={{ lat: 40.73, lng: -73 }}
        defaultZoom={11}
        bootstrapURLKeys={{
          keya: 'AIzaSyCNZFT6IgyNQJEZoowp8S9l_-O3jnDNrLQ',
          key: '',
        }}
      />
      <Menu />
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
