import React, { Fragment, useState } from 'react';

import {
  Container, ButtonsContainer, Button, Icon, PageContainer,
} from './styles';

import { NewUser } from '~/pages';

const Menu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [content, setContent] = useState(<Fragment />);

  const swiftCollapsed = () => setCollapsed(!collapsed);

  const swiftContent = (comp) => {
    if (content !== comp) setContent(comp);
    console.log('oi');
  };

  return (
    <Container collapsed={collapsed}>
      <ButtonsContainer>
        <Button
          marginRight="1em"
          onClick={() => {
            swiftCollapsed();
            swiftContent(NewUser);
          }}
        >
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
      <PageContainer>
        <NewUser />
      </PageContainer>
    </Container>
  );
};
export default Menu;
