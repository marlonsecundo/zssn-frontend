import React from 'react';

import {
  Container, LabelInput, AvatarInput, NameInput, InputContainer,
} from './styles';

const newuser = () => (
  <Container>
    <AvatarInput />

    <InputContainer width="30%">
      <LabelInput>Nome</LabelInput>
      <NameInput />
    </InputContainer>
  </Container>
);

export default newuser;
