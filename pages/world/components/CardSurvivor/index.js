import React from 'react';

import {
  Container,
  Image,
  Name,
  Description,
  TitleContainer,
  Location,
  LocationIcon,
  Job,
  LocationValue,
  ItemsContainer,
  BagItem,
  BagItemIcon,
  BagItemCount,
} from './styles';

const CardSurvivor = ({ img, user }) => (
  <Container>
    <TitleContainer>
      <Image src="/static/img/hawk.jpg" />
      <Name>
        Marlon Secundo
        <Job>Desenvolvedor</Job>
      </Name>
    </TitleContainer>

    <ItemsContainer>
      <BagItem>
        <BagItemIcon>
          <use xlinkHref="/static/img/water.svg#water" />
        </BagItemIcon>
        <BagItemCount>3</BagItemCount>
      </BagItem>
      <BagItem>
        <BagItemIcon>
          <use xlinkHref="/static/img/food.svg#food" />
        </BagItemIcon>
        <BagItemCount>10</BagItemCount>
      </BagItem>
      <BagItem>
        <BagItemIcon>
          <use xlinkHref="/static/img/ammo.svg#ammo" />
        </BagItemIcon>
        <BagItemCount>15</BagItemCount>
      </BagItem>
      <BagItem>
        <BagItemIcon>
          <use xlinkHref="/static/img/medicine.svg#medicine" />
        </BagItemIcon>
        <BagItemCount>1</BagItemCount>
      </BagItem>
    </ItemsContainer>

    <Description>Um desenvolvedor perdido nesse mundo apocalíptico</Description>

    <Location>
      <LocationIcon>
        <use xlinkHref="/static/img/location.svg#location" />
      </LocationIcon>
      <LocationValue>X: 45,55</LocationValue>
      <LocationValue>Y: 50,54 </LocationValue>
    </Location>
  </Container>
);

export default CardSurvivor;
