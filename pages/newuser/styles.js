import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.form`
  background-color: ${colors.backgroundTranparent};
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  flex-direction: column;
  margin-bottom: 5%;
  width: ${props => (props.width ? props.width : 'auto')};
  height: ${props => (props.height ? props.height : '3.6em')};
`;

export const AvatarInput = styled.div`
  width: 10%;
  padding-bottom: 10%;
  border-radius: 100%;
  background-color: red;
  margin-bottom: 2%;
`;

export const NameInput = styled.input.attrs(() => ({ type: 'text ' }))`
  background-color: ${colors.background};
  border: 1.5px solid ${colors.whiteTransparent(0.5)};
  border-radius: 7px;
  width: 100%;
  height: 100%;
  padding-left: 10px;
  color: ${colors.text};
  font-family: 'Nunito', sans-serif;
  font-size: 0.9em;
`;

export const LabelInput = styled.label`
  align-self: flex-start;
  margin-bottom: 1%;
  color: ${colors.whiteTransparent(0.5)};
`;

export const Submit = styled.input.attrs(() => ({ type: 'text' }))``;
