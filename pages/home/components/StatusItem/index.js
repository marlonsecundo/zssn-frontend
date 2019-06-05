import React from 'react';

import { Container, Image, SubText } from './styles';

const StatusItem = ({ count, image, text }) => (
  <Container>
    <Image>
      <use xlinkHref={image} />
    </Image>
    <SubText>{`${count} ${text}`}</SubText>
  </Container>
);

export default StatusItem;
