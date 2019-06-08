import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, ImageSVG, Text, Image,
} from './styles';

const TecItem = ({
  text, desc, svg, img, onMouseEnter,
}) => (
  <Container onMouseEnter={() => onMouseEnter({ title: text, text: desc })}>
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
  desc: PropTypes.string.isRequired,
  svg: PropTypes.string,
  img: PropTypes.string,
  onMouseEnter: PropTypes.func,
};

TecItem.defaultProps = {
  svg: null,
  img: '/static/img/hawk.jpg',
  onMouseEnter: () => {},
};

export default TecItem;
