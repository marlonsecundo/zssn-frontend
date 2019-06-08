import styled from 'styled-components';
import { colors } from '~/styles';

export const Bar = styled.div`
  align-self: center;
  align-items: center;
  overflow: hidden;

  justify-content: center;
  background-color: ${colors.secondary};
  height: 2.5em;
  width: 0%;
  border-radius: 0.8em;
  margin-top: 0.3em;

  transition: width 300ms;
`;

export const Image = styled.svg`
  fill: ${colors.third};

  padding: 0.7em;
  padding-left: 0;
  padding-right: 0;

  border-radius: 1em;

  transition: fill 300ms;
  transition: background-color 300ms;

  :hover {
    background-color: ${colors.whiteTransparent(0.1)};
  }
`;

export const Container = styled.a`
  flex-direction: column;

  margin-bottom: 3em;

  height: 5.5em;
  width: 4.7em;

  ${props => (props.selected
    ? `
      ${Image} {
        fill: ${colors.secondary};
      }

      ${Bar} {
        width: 100%;
      }`
    : '')}
`;

export const Text = styled.p`
  color: ${colors.background};
  font-size: 0.7em;
`;
