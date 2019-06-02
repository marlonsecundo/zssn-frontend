import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.a`
  margin-bottom: 2em;
  height: 5em;
  width: 5em;
  flex-direction: column;
`;

export const Image = styled.svg`
  fill: ${colors.primary};

  transition: fill 300ms;

  ${Container}:hover & {
    fill: ${colors.third};
  }
`;

export const Bar = styled.div`
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: ${colors.third};
  height: 1em;
  width: 0%;
  border-radius: 0.8em;
  margin-top: 0.3em;

  transition: width 300ms;

  ${Container}:hover & {
    width: 100%;
  }
`;

export const Text = styled.p`
  color: ${colors.background};
  font-size: 0.7em;
`;
