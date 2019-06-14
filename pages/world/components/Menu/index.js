import React from 'react';

import {
  Container, ButtonsContainer, Button, Icon,
} from './styles';

const Menu = () => (
  <Container>
    <ButtonsContainer>
      <Button marginRight="1em">
        <Icon>
          <use xlinkHref="/static/img/report.svg#report" />
        </Icon>
      </Button>
      <Button>
        <Icon>
          <use xlinkHref="/static/img/person.svg#person" />
        </Icon>
      </Button>

      <Button marginRight="1em">
        <Icon>
          <use xlinkHref="/static/img/exchange.svg#exchange" />
        </Icon>
      </Button>
    </ButtonsContainer>
  </Container>
);

export default Menu;
