import React from 'react';

import {
  Container, Title, SubTitle, TecItemsContainer,
} from './styles';

import TecItem from './components/TecItem';

const Tecnologies = () => (
  <Container>
    <Title>Tecnologies</Title>
    <SubTitle>Technologies and Frameworks used for this website development</SubTitle>

    <TecItemsContainer>
      <TecItem text="ReactJS" svg="/static/img/reactColored.svg#react" />
      <TecItem text="Next JS" svg="/static/img/nextjs.svg#nextjs" />
      <TecItem text="Styled Components" img="/static/img/styled.png" />
      <TecItem text="Redux" svg="/static/img/redux.svg#redux" />
    </TecItemsContainer>
  </Container>
);

export default Tecnologies;
