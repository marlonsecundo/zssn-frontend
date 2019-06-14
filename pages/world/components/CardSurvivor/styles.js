import styled from 'styled-components';
import { colors, metrics } from '~/styles';

export const Container = styled.section`
  flex-direction: column;
  background-color: ${colors.whiteTransparent(1)};
  height: 12.5em;
  width: 12.5em;
  border-radius: 0.5em;
  padding: 1.5em;
  margin-bottom: 3%;
  object-fit: contain;
  box-shadow: 0 20px 25px -5px ${colors.whiteTransparent(0.1)},
    0 10px 10px -5px ${colors.whiteTransparent(0.04)};
`;

export const TitleContainer = styled.div``;

export const Image = styled.img`
  height: 3em;
  border-radius: 100%;
  object-fit: contain;
`;

export const Name = styled.p`
  margin-left: 5%;
  font-weight: bold;
`;

export const Job = styled.p`
  margin-top: 5%;
  font-size: 90%;
  font-weight: normal;
  color: ${colors.backgroundTranparent(0.5)};
`;

export const Description = styled.p`
  margin-top: 10%;
  margin-bottom: 10%;
  font-size: 90%;
  color: ${colors.backgroundTranparent(0.5)};
  text-align: justify;
`;

export const ItemsContainer = styled.div`
  margin-top: 5%;
  justify-content: space-between;
  background-color: ${colors.background};
  padding: 0.5em;
  padding-right: 0.5em;
  border-radius: 0.7em;
`;

export const BagItem = styled.div`
  height: 1.5em;
  width: 2.5em;
  justify-content: center;
  align-items: center;
`;

export const BagItemCount = styled.p`
  margin-left: 0.1em;
  font-weight: bold;
  color: ${colors.text};
  font-family: 'Nunito', sans-serif;
`;

export const Location = styled.div`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LocationValue = styled.p`
  color: ${colors.third};
`;

export const LocationIcon = styled.svg`
  height: 1.5em;
  width: 1.5em;
  fill: ${colors.third};
`;

export const BagItemIcon = styled.svg`
  width: 70%;
  height: 70%;
  fill: ${colors.primary};
`;
