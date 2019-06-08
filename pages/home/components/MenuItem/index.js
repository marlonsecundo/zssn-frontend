import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Image, Bar, Text,
} from './styles';

const MenuItem = ({
  image, text, selected, onClick,
}) => (
  <Container selected={selected} onClick={onClick}>
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
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

MenuItem.defaultProps = {
  selected: false,
};

export default MenuItem;
