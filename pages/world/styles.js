import styled, { createGlobalStyle } from 'styled-components';
import { colors } from '~/styles';

export const CustomGlobalStyles = createGlobalStyle`
  html, body {
    overflow: hidden;
  }
`;

export const Container = styled.section`
  flex-direction: row;
  flex: 1;
  background-color: ${colors.background};
`;

export const Survivors = styled.section`
  flex: 1;
  flex-direction: column;
  background-color: ${colors.whiteTransparent(0.01)};
`;

export const WorldMap = styled.section`
  height: 100%;
  width: 63%;
  background-color: ${colors.background};
`;

export const ListTitle = styled.h1`
  margin: 4%;
  color: ${colors.primary};
  font-size: 150%;
`;

export const List = styled.div`
  flex: 1;
  padding-left: 4%;
  padding-right: 4%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
`;
