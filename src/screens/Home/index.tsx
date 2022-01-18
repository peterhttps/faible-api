import React, { useCallback, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import ExploreComponent from '../../components/ExploreComponent';
import FableList from '../../components/FableList';
import RecentsCarousel from '../../components/RecentsCarousel';
import { getHome } from '../../services/stories';
import { setHomeStore } from '../../store/home/actions';

import { DescriptionTitle, TitleOrange, TitlePurple, Wrapper } from './styles';

const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const Home: React.FC = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const getHomeData = useCallback(async () => {
    try {
      const homeResponse = await getHome();
      setIsLoading(false);
      setHomeStore(homeResponse.data);
    } catch {
      console.log('Error');
    }
  }, []);

  useEffect(() => {
    getHomeData();
  }, [getHomeData]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  if (isLoading) {
    return <Wrapper />;
  }

  return (
    <Wrapper
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <TitlePurple>
        F<TitleOrange>ai</TitleOrange>ble
      </TitlePurple>
      <RecentsCarousel />
      <ExploreComponent />
      <DescriptionTitle>Populares</DescriptionTitle>
      <FableList />
    </Wrapper>
  );
};

export default Home;
