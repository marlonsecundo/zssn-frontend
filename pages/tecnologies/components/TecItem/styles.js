import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.div`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;

  padding: 1em;
  margin-right: 3em;

  background-color: ${colors.whiteTransparent(0.01)};

  width: 5.5em;
  height: 7em;

  transition: background-color 300ms;

  :hover {
    background-color: ${colors.whiteTransparent(0.1)};
  }
`;

export const ImageSVG = styled.svg`
  width: 60%;
  height: 60%;
`;

export const Image = styled.img`
  width: 40%;
  object-fit: contain;
`;

export const Text = styled.p`
  color: ${colors.text};
  text-align: center;
`;
