import styled from 'styled-components';
import { colors, metrics } from '~/styles';

const { media } = metrics;

export const Container = styled.nav`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-self: flex-end;

  border-radius: 1em;
  margin-top: 11%;
  margin-left: -5%;
  padding: 1%;
  background-color: ${colors.whiteBackground};

  position: fixed;
  height: 60%;
  width: 10%;

  ${media.mobileL`
    flex-direction: row;
    align-self: flex-end;
    height: 20%;
    width: 100%;
    padding-top: 1em;
  `}
`;

export const Title = styled.h1`
  padding-bottom: 0.5em;
  color: ${colors.primary};
  font-weight: lighter;
  margin-bottom: 1em;
  overflow: hidden;
  font-size: 1.5em;

  ${media.mobileL`
    width: 0%;
    padding-bottom: 0;
    padding-left: 0.5em;
  `}
`;
