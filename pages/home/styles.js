import styled from 'styled-components';
import { colors, metrics, animations } from '~/styles';

const { media } = metrics;

export const Container = styled.div`
  background-image: url('../static/img/background.png');
  flex: 1;
  flex-direction: row;

  ${media.mobileL`
    flex-direction: column-reverse;
    justify-content: space-between;

  `};
`;

export const Index = styled.div`
  flex: 1;
`;

export const CenterContent = styled.section`
  flex: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.mobileL`
    flex: 1;

  `};
`;

export const ImgZombie = styled.img`
  height: 45%;

  ${media.mobileL`
    height: 70%;
  `};
`;

export const ImgDesc = styled.p`
  margin-top: ${metrics.baseMargin};
  color: ${colors.third};
  text-align: center;
  font-style: italic;
  font-size: 200%;
  animation: ${animations.creepy} 0.34s linear infinite;

  ${media.mobileL`
    font-size: 150%;
  `};
`;

export const About = styled.section`
  flex-direction: column;
  flex: 1;
  padding: ${metrics.baseMargin};
`;

export const StyledLink = styled.a`
  display: inline;
  color: ${colors.third};
`;

export const ZSSN = styled.h1`
  font-size: 400%;
  font-weight: bold;
  align-self: center;
  color: ${colors.primary};
`;

export const Description = styled.p`
  align-self: center;
  color: ${colors.text};
  text-align: center;
`;

export const CreepyEffect = styled.svg`
  position: absolute;
`;
