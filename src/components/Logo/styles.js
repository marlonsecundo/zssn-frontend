import styled from 'styled-components';
import { colors } from '~/styles';

const Container = styled.div`
  position: absolute;
  margin-top: 1%;
  margin-left: 1%;
`;

const Title = styled.h1`
  font-size: 200%;
  color: ${colors.background};
  -webkit-text-stroke: 0.5px ${colors.primary};
`;

export { Container, Title };
