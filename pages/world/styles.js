import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.div`
  flex-direction: row;
  flex: 1;
  background-color: ${colors.background};
`;

export const Survivors = styled.section`
  flex: 1;
  flex-direction: column;
  background-color: red;
`;

export const WorldMap = styled.section`
  flex: 2;
  background-color: blue;
`;
