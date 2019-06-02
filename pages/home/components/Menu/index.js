import React from 'react';

import { Container, Title } from './styles';
import MenuItem from '../MenuItem';

const Menu = () => (
  <Container>
    <Title>Index</Title>
    <MenuItem image="/static/img/react.svg#react" text="Tecnologies" />
    <MenuItem image="/static/img/laptop.svg#laptop" text="Reports" />
  </Container>
);

export default Menu;
