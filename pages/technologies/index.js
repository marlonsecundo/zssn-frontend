import React, { useState } from 'react';

import {
  Container, Title, SubTitle, TecItemsContainer,
} from './styles';

import TecItem from './components/TecItem';

const Technologies = () => {
  const [text, setText] = useState('Technologies and Frameworks used for this website development');
  const [title, setTitle] = useState('Technologies');

  const onMouseEnter = (value) => {
    setTitle(value.title);
    setText(value.text);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{text}</SubTitle>

      <TecItemsContainer>
        <TecItem
          text="ReactJS"
          svg="/static/img/reactColored.svg#react"
          desc="React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”."
          onMouseEnter={onMouseEnter}
        />
        <TecItem
          text="Next JS"
          desc="Next.js is a JavaScript framework created by Zeit. It lets you build server-side rendering and static web applications using React."
          svg="/static/img/nextjs.svg#nextjs"
          onMouseEnter={onMouseEnter}
        />
        <TecItem
          text="Styled Components"
          img="/static/img/styled.png"
          desc="Styled-components is the result of wondering how we could enhance CSS for styling React component systems. By focusing on a single use case we managed to optimize the experience for developers as well as the output for end users."
          onMouseEnter={onMouseEnter}
        />
        <TecItem
          text="Redux"
          desc="Redux is a flux based state container for handling javascript application state."
          svg="/static/img/redux.svg#redux"
          onMouseEnter={onMouseEnter}
        />
      </TecItemsContainer>
    </Container>
  );
};

export default Technologies;
