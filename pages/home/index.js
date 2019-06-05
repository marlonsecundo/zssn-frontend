import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Link from 'next/Link';
import {
  Container,
  About,
  ZSSN,
  Index,
  CenterContent,
  Description,
  ImgZombie,
  ImgDesc,
  StyledLink,
  Start,
  StartContent,
} from './styles';
import { DevAbout, CreepyEffect } from '~/components';
import Menu from './components/Menu';
import StatusItem from './components/StatusItem';

const Home = () => {
  const LeftContent = (
    <Index>
      <Menu />
    </Index>
  );

  const MiddleContent = (
    <CenterContent>
      <ImgDesc>ZOMBIEEEESSSS</ImgDesc>

      <ImgZombie src="/static/img/zombie.svg" alt="Zombie" />

      <Start>
        <StartContent>START</StartContent>
      </Start>

      <CreepyEffect />
    </CenterContent>
  );

  const RightContent = (
    <About>
      <ZSSN>ZSSN</ZSSN>
      <Description>
        A Zombie Survival Social Network frontend app, that consumes a
        {' '}
        <StyledLink target="blank" href="https://github.com/marlonsecundo/zssn-backend">
          Rest API
        </StyledLink>
      </Description>
      <StatusItem count={115} image="/static/img/person.svg#person" text="Survivors" />
      <StatusItem count={204} image="/static/img/zombie2.svg#zombie2" text="Zombies" />
    </About>
  );

  return (
    <Container>
      {LeftContent}
      {MiddleContent}
      {RightContent}
      <DevAbout />
    </Container>
  );
};

export default Home;
