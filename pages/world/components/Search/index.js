import React from 'react';

import {
  Container, TextInput, ButtonSearch, Icon,
} from './styles';

const Search = () => (
  <Container>
    <ButtonSearch>
      <Icon>
        <use xlinkHref="/static/img/search.svg#search" />
      </Icon>
    </ButtonSearch>
    <TextInput />
  </Container>
);

export default Search;
