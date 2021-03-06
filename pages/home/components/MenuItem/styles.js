import styled from 'styled-components';
import { colors, metrics } from '~/styles';

const { media } = metrics;

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

  ${media.mobileL`
      height: 0%;
  `}
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
    background-color: ${colors.whiteBackground};
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

  ${media.mobileL`
      height: 4.5em;
      width: 3.7em;
      margin-right: 1em;
  `}
`;

export const Text = styled.p`
  color: ${colors.background};
  font-size: 0.7em;
`;
