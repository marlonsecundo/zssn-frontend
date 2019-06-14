import styled from 'styled-components';
import { colors, animations } from '~/styles';

export const Container = styled.section`
  align-self: center;
  align-items: center;
  position: absolute;
  flex-direction: row-reverse;
  width: 63%;
  height: 160%;

  background-color: ${colors.background};

  animation: ${() => animations.collapseMenu()} 1s ease-in-out 0s 1 both
    ${({ collapsed }) => (collapsed ? 'normal' : 'reverse')};
`;

export const PageContainer = styled.section`
  flex: 1;
  width: 100%;
  height: 62.5%;
`;

export const ButtonsContainer = styled.section`
  width: 12%;
  height: 62.5%;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-right: -1em;
`;

export const Button = styled.button`
  justify-content: center;
  align-items: center;

  margin-top: 20%;
  margin-bottom: 20%;
  margin-right: ${props => (props.marginRight ? props.marginRight : '0px')};

  width: 3.5em;
  height: 3.5em;

  border-radius: 3em;
  background-color: transparent;
`;

export const Icon = styled.svg`
  width: 80%;
  height: 80%;
  fill: ${colors.secondary};
`;
