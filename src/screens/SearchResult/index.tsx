import React, { useCallback, useEffect, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton, ResultHeader, SearchTitle, Wrapper } from './styles';
import { searchStories } from '../../services/stories';

// import { Container } from './styles';
import IStory from '../../interfaces/IStory';
import { FavoritesList } from '../Favorites/styles';
import FableItem from '../../components/FableItem';

type ParamList = {
  Search: {
    searchKey: string;
  };
};

const SearchResult: React.FC = () => {
  const searched = useRoute<RouteProp<ParamList, 'Search'>>();
  const navigation = useNavigation();

  const [storyList, setStoryList] = useState<IStory[]>([]);

  const fetchStories = useCallback(async () => {
    const stories = await searchStories(
      searched.params.searchKey.charAt(0).toUpperCase() +
        searched.params.searchKey.slice(1),
    );
    setStoryList(stories.data);
  }, [searched.params.searchKey]);

  useEffect(() => {
    fetchStories();
  }, [fetchStories]);

  return (
    <Wrapper>
      <ResultHeader>
        <HeaderButton activeOpacity={0.8} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" color="#6A040F" size={15} />
        </HeaderButton>
        <SearchTitle>Resultados para {searched.params.searchKey}</SearchTitle>
      </ResultHeader>
      <FavoritesList>
        {storyList.map(item => {
          return <FableItem key={item.title} story={item} />;
        })}
      </FavoritesList>
    </Wrapper>
  );
};

export default SearchResult;
