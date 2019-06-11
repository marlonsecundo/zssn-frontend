import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.section`
  align-items: center;
  overflow: hidden;

  position: fixed;
  bottom: 0;
  right: 0;

  margin: 2%;
  padding: 0.2em;
  border-radius: 2em;

  height: 2em;
  width: 2em;

  background-color: ${colors.whiteTransparent(0.3)};

  transition: background-color 700ms ease-out, width 1s ease-out, border-radius 600ms ease-out;

  :hover {
    background-color: ${colors.whiteTransparent(1)};
    width: 12em;
  }
`;

export const Img = styled.img`
  height: 100%;
  border-radius: 100%;
`;

export const Text = styled.p`
  flex: 1;
  padding-left: 10%;
  white-space: nowrap;
`;
