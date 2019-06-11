import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.div`
  height: 4em;
  width: 100%;
  background-color: ${colors.whiteTransparent(1)};
`;

export const TextInput = styled.input.attrs(() => ({
  type: 'text',
}))`
  width: 100%;
  background-color: transparent;
  color: ${colors.background};
  font-family: 'Nunito', sans-serif;
  font-size: 115%;
`;

export const Icon = styled.svg`
  height: 2em;
  width: 2em;
  fill: ${colors.secondary};
`;

export const ButtonSearch = styled.button`
  width: 15%;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;
