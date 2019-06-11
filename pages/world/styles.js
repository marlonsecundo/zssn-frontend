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
`;

export const WorldMap = styled.section`
  height: 100%;
  width: 70%;
  background-color: ${colors.background};
`;

export const List = styled.div`
  flex: 1;
  background-color: ${colors.background};
`;
