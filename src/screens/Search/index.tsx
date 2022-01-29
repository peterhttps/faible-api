import React, { useCallback, useState } from 'react';
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
import { searchStories } from '../../services/stories';

const Search: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const search = useCallback(async () => {
    setLoading(true);
    const stories = await searchStories(inputValue);
    console.log(stories.data);
    setLoading(false);
  }, [inputValue]);

  return (
    <Wrapper>
      <SearchContainer>
        <SearchInput
          placeholder="Pesquisar"
          onChangeText={newText => setInputValue(newText)}
        />
        <TouchableOpacity onPress={search}>
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
