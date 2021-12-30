import React from 'react';
import ExploreComponent from '../../components/ExploreComponent';
import RecentsCarousel from '../../components/RecentsCarousel';

import { TitleOrange, TitlePurple, Wrapper } from './styles';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <TitlePurple>
        F<TitleOrange>ai</TitleOrange>ble
      </TitlePurple>
      <RecentsCarousel />
      <ExploreComponent />
    </Wrapper>
  );
};

export default Home;
