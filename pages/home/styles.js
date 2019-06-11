import styled, { createGlobalStyle } from 'styled-components';
import { colors, metrics, animations } from '~/styles';

const { media } = metrics;

export const CustomGlobalStyles = createGlobalStyle`
  html, body {
    height: 145%;
  }

  #__next {
    flex-direction: column;
  }

  ${media.mobileL`
    html, body {
      height: 141.4%;
    }

  `}
`;

export const Container = styled.section`
  background-image: url('../static/img/background.png');
  flex: 1;
  flex-direction: row;

  ${media.mobileL`
    flex-direction: column-reverse;
    justify-content: space-between;

  `};
`;

export const Index = styled.section`
  flex: 1;
  flex-direction: column;

  ${media.mobileL`
    flex: 0.6;
  `}
`;

export const CenterContent = styled.section`
  flex: 1.5;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.mobileL`
    flex: 2;
  `};
`;

export const ImgZombie = styled.img`
  height: 15em;
  margin-top: 10%;
  margin-bottom: 10%;
  ${media.mobileL`
    height: 40%;
  `};
`;

export const ImgDesc = styled.p`
  padding-right: 0.1em;
  color: ${colors.secondary};
  text-align: center;
  font-style: italic;
  font-size: 200%;
  animation: ${animations.opacity} 5s ease infinite alternate-reverse;

  ${media.mobileL`
    font-size: 150%;
  `};
`;

export const About = styled.section`
  flex-direction: column;
  align-items: center;
  padding-top: 4em;
  padding-left: 2em;
  flex: 1;

  ${media.mobileL`
    padding: 1em;

  `};
`;

export const StyledLink = styled.a`
  display: inline;
  color: ${colors.secondary};
`;

export const ZSSN = styled.h1`
  font-size: 400%;
  font-weight: bold;
  align-self: center;
  color: ${colors.primary};

  ${media.mobileL`
    font-size: 250%;
  `}
`;

export const Description = styled.p`
  align-self: center;
  color: ${colors.text};
  text-align: center;
  margin-bottom: 17%;
`;

export const CreepyEffect = styled.svg`
  position: absolute;
`;

export const StartContent = styled.p`
  color: ${colors.primary};
  font-family: 'STANFORD FREE';
  font-size: 3em;
  padding: 0.3em;
`;

export const Start = styled.a`
  background-color: ${colors.background};
  border-radius: 0.7em;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  animation: ${animations.creepy} 0.34s linear infinite;
  cursor: pointer;
`;
