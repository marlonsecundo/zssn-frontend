import styled from 'styled-components';
import { colors } from '~/styles';

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
`;

export const SubTitle = styled.h3`
  color: ${colors.text};
  font-weight: normal;
`;

export const TecItemsContainer = styled.section`
  flex-direction: row;
  flex: 1;
  align-items: flex-end;
  width: 70%;

  margin-bottom: 5em;
`;
