import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Link from 'next/Link';

import {
  Container,
  About,
  ZSSN,
  Menu,
  CenterContent,
  Description,
  ImgZombie,
  ImgDesc,
  StyledLink,
} from './styles';
import DevAbout from '~/components/DevAbout';

const Home = () => (
  <Container>
    <Menu />
    <CenterContent>
      <ImgZombie src="/static/img/zombie.svg" alt="Zombie" />
      <ImgDesc>ZOMBIEEEESSSSS</ImgDesc>
    </CenterContent>
    <About>
      <ZSSN>ZSSN</ZSSN>
      <Description>
        A Zombie Survival Social Network frontend app, that consumes a
        {' '}
        <StyledLink target="blank" href="https://github.com/marlonsecundo/zssn-backend">
          Rest API
        </StyledLink>
      </Description>
    </About>

    <DevAbout />
  </Container>
);

export default Home;
