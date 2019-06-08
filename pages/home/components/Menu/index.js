import React, { useEffect, useState } from 'react';

import { Container, Title } from './styles';
import MenuItem from '../MenuItem';

const Menu = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      const {
        pageYOffset,
        screen: { availHeight },
      } = window;

      if (selected !== 0 && pageYOffset < availHeight * 0.5) setSelected(0);
      else if (
        selected !== 1
        && pageYOffset >= availHeight * 0.5
        && pageYOffset <= availHeight * 1.7
      ) setSelected(1);
    };
  }, [selected]);

  return (
    <Container>
      <Title>Index</Title>
      <MenuItem
        image="/static/img/zombie-outline.svg#zombieOutline"
        text="Home"
        selected={selected === 0}
        onClick={() => window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
        }
      />
      <MenuItem
        image="/static/img/react.svg#react"
        text="Tecnologies"
        selected={selected === 1}
        onClick={() => window.scrollTo({
          top: window.screen.availHeight,
          left: 0,
          behavior: 'smooth',
        })
        }
      />
      <MenuItem image="/static/img/laptop.svg#laptop" text="Reports" selected={selected === 2} />
    </Container>
  );
};

export default Menu;
