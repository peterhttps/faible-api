import React from 'react';
import ExploreComponent from '../../components/ExploreComponent';
import FableList from '../../components/FableList';
import { useStories } from '../../components/hooks/useStories';
import RecentsCarousel from '../../components/RecentsCarousel';

import { DescriptionTitle, TitleOrange, TitlePurple, Wrapper } from './styles';

const Home: React.FC = () => {
  const { stories } = useStories();

  stories.map(sto => console.log(`${sto.title}\n`));

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
