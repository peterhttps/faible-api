import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
  DescriptionTitle,
  ExploreCard,
  ExploreContainer,
  ExploreTitle,
  GenreCard,
  GenreContainer,
  GenreTItle,
  SearchContainer,
  SearchInput,
  Wrapper,
} from './styles';

const Search: React.FC = () => {
  return (
    <Wrapper>
      <SearchContainer>
        <SearchInput placeholder="Pesquisar" />
        <TouchableOpacity>
          <Ionicons name="search" color="#aaa" size={24} />
        </TouchableOpacity>
      </SearchContainer>
      <DescriptionTitle>Explorar por</DescriptionTitle>
      <ExploreContainer>
        <ExploreCard>
          <ExploreTitle>Populares</ExploreTitle>
        </ExploreCard>
        <ExploreCard>
          <ExploreTitle>Populares</ExploreTitle>
        </ExploreCard>
      </ExploreContainer>
      <DescriptionTitle>Gêneros</DescriptionTitle>
      <GenreContainer>
        <GenreCard notBorderTop notBorderBottom activeOpacity={0.8}>
          <GenreTItle>Aventura</GenreTItle>
          <Ionicons name="arrow-forward-outline" color="#8A8A8A" size={24} />
        </GenreCard>
        <GenreCard activeOpacity={0.8}>
          <GenreTItle>Fantasia</GenreTItle>
          <Ionicons name="arrow-forward-outline" color="#8A8A8A" size={24} />
        </GenreCard>
        <GenreCard notBorderTop notBorderBottom activeOpacity={0.8}>
          <GenreTItle>Comédia</GenreTItle>
          <Ionicons name="arrow-forward-outline" color="#8A8A8A" size={24} />
        </GenreCard>
      </GenreContainer>
    </Wrapper>
  );
};

export default Search;
