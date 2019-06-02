import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Image, Bar, Text,
} from './styles';

const MenuItem = ({ image, text }) => (
  <Container>
    <Image>
      <use xlinkHref={image} />
    </Image>
    <Bar>
      <Text>{text}</Text>
    </Bar>
  </Container>
);

MenuItem.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MenuItem;
