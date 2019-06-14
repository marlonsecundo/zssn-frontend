import React, { useState } from 'react';

import {
  Container, ButtonsContainer, Button, Icon, PageContainer,
} from './styles';

const Menu = () => {
  const [collapsed, setCollapsed] = useState(true);

  const swiftCollapsed = () => setCollapsed(!collapsed);
  return (
    <Container collapsed={collapsed}>
      <ButtonsContainer>
        <Button marginRight="1em" onClick={swiftCollapsed}>
          <Icon>
            <use xlinkHref="/static/img/report.svg#report" />
          </Icon>
        </Button>

        <Button onClick={swiftCollapsed}>
          <Icon>
            <use xlinkHref="/static/img/person.svg#person" />
          </Icon>
        </Button>

        <Button marginRight="1em" onClick={swiftCollapsed}>
          <Icon>
            <use xlinkHref="/static/img/exchange.svg#exchange" />
          </Icon>
        </Button>
      </ButtonsContainer>
      <PageContainer />
    </Container>
  );
};
export default Menu;
