import styled from 'styled-components';
import { colors, metrics } from '~/styles';

const { media } = metrics;

export const Container = styled.div`
  background: ${colors.background};
  flex: 1;
  flex-direction: row;

  ${media.mobileL`
    flex-direction: column-reverse;

  `};
`;

export const Menu = styled.section`
  flex: 1;
`;

export const CenterContent = styled.section`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
