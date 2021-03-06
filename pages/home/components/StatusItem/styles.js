import styled from 'styled-components';
import { colors, metrics } from '~/styles';

const { media } = metrics;

export const Container = styled.section`
  width: 6em;
  height: 7em;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3em;

  ${media.mobileL`
    height: 0;
    width: 0;
    overflow: hidden;
  `}
`;

export const Image = styled.svg`
  fill: ${colors.primary};
  width: 4em;
  height: 4em;
  padding: 1em;
`;

export const SubText = styled.p`
  text-align: center;
  color: ${colors.text};
  white-space: nowrap;
`;
