import styled from 'styled-components';
import { colors } from '~/styles';

const Container = styled.div`
  position: absolute;
  margin-bottom: 1%;
  margin-left: 1%;
  bottom: 0;
`;

const Title = styled.h1`
  font-size: 200%;
  color: ${colors.primary};
`;

export { Container, Title };
