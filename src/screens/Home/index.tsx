import React from 'react';
import { RefreshControl } from 'react-native';
import ExploreComponent from '../../components/ExploreComponent';
import FableList from '../../components/FableList';
import RecentsCarousel from '../../components/RecentsCarousel';

import { DescriptionTitle, TitleOrange, TitlePurple, Wrapper } from './styles';

const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const Home: React.FC = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

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
