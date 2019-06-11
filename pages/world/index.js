import React from 'react';

import { Container, WorldMap, Survivors } from './styles';
import { Search } from './components';

const World = () => (
  <Container>
    <WorldMap />
    <Survivors>
      <Search />
    </Survivors>
  </Container>
);

export default World;
