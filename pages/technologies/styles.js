import styled from 'styled-components';
import { colors, metrics } from '~/styles';

const { media } = metrics;

export const Container = styled.section`
  flex: 1;
  flex-direction: column;
  background-color: ${colors.background};
  padding-left: 8%;
`;

export const Title = styled.h1`
  font-size: 250%;
  color: ${colors.primary};
  margin-top: 8%;
  margin-bottom: 1%;

  ${media.mobileL`
    font-size: 200%;
    padding-top: 22%;
  `}
`;

export const SubTitle = styled.h3`
  color: ${colors.text};
  font-weight: normal;
  line-height: 2;
  width: 50%;

  ${media.mobileL`

    line-height: 1.5;
    font-size: 90%;
    width: 90%;

  `}
`;

export const TecItemsContainer = styled.section`
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  align-items: flex-end;
  align-content: flex-end;
  width: 70%;

  margin-bottom: 5%;

  ${media.mobileL`
    width: 100%;
  `}
`;
