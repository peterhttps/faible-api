import React from 'react';
import ExploreComponent from '../../components/ExploreComponent';
import FableList from '../../components/FableList';
import RecentsCarousel from '../../components/RecentsCarousel';

import { DescriptionTitle, TitleOrange, TitlePurple, Wrapper } from './styles';

const Home: React.FC = () => {
  return (
    <Wrapper>
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
