import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, ImageSVG, Text, Image,
} from './styles';

const TecItem = ({ text, svg, img }) => (
  <Container>
    {svg ? (
      <ImageSVG>
        <use xlinkHref={svg} />
      </ImageSVG>
    ) : (
      <Image src={img} />
    )}

    <Text>{text}</Text>
  </Container>
);

TecItem.propTypes = {
  text: PropTypes.string.isRequired,
  svg: PropTypes.string,
  img: PropTypes.string,
};

TecItem.defaultProps = {
  svg: null,
  img: '/static/img/hawk.jpg',
};

export default TecItem;
