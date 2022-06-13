import React, { useCallback, useEffect, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { SearchTitle, Wrapper } from './styles';
import { searchStories } from '../../services/stories';

// import { Container } from './styles';
import IStory from '../../interfaces/IStory';

type ParamList = {
  Search: {
    searchKey: string;
  };
};

const SearchResult: React.FC = () => {
  const searched = useRoute<RouteProp<ParamList, 'Search'>>();
  const [storyList, setStoryList] = useState<IStory[]>([]);

  const fetchStories = useCallback(async () => {
    const stories = await searchStories(searched.params.searchKey);
    setStoryList(stories.data);
  }, [searched.params.searchKey]);

  useEffect(() => {
    fetchStories();
  }, [fetchStories]);

  return (
    <Wrapper>
      <SearchTitle>Resultados para {searched.params.searchKey}</SearchTitle>
    </Wrapper>
  );
}

export default SearchResult;
