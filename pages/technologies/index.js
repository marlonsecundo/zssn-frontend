import React, { useState } from 'react';

import {
  Container, Title, SubTitle, TecItemsContainer, BackDiv,
} from './styles';

import TecItem from './components/TecItem';

const Technologies = () => {
  const texts = [
    'Technologies and Frameworks used for this website development',
    'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.',
    'Next.js is a JavaScript framework created by Zeit. It lets you build server-side rendering and static web applications using React.',
    'Styled-components is the result of wondering how we could enhance CSS for styling React component systems. By focusing on a single use case we managed to optimize the experience for developers as well as the output for end users.',
    'Redux is a flux based state container for handling javascript application state.',
  ];
  const titles = ['Technologies', 'ReactJS', 'Next JS', 'Styled', 'Redux'];

  const [text, setText] = useState(texts[0]);
  const [title, setTitle] = useState(titles[0]);

  const onMouseEnter = (value) => {
    setTitle(value.title);
    setText(value.text);
  };

  return (
    <Container>
      <BackDiv />
      <Title>{title}</Title>
      <SubTitle>{text}</SubTitle>

      <TecItemsContainer>
        <TecItem
          text={titles[1]}
          svg="/static/img/reactColored.svg#react"
          desc={texts[1]}
          onMouseEnter={onMouseEnter}
        />
        <TecItem
          text={titles[2]}
          desc={texts[2]}
          svg="/static/img/nextjs.svg#nextjs"
          onMouseEnter={onMouseEnter}
        />
        <TecItem
          text={titles[3]}
          desc={texts[3]}
          img="/static/img/styled.png"
          onMouseEnter={onMouseEnter}
        />
        <TecItem
          text={titles[4]}
          desc={texts[4]}
          svg="/static/img/redux.svg#redux"
          onMouseEnter={onMouseEnter}
        />
      </TecItemsContainer>
    </Container>
  );
};

export default Technologies;
