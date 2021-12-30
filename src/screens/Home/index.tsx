import React from 'react';
import { Text } from 'react-native';
import RecentsCarousel from '../../components/RecentsCarousel';

import { TitleOrange, TitlePurple, Wrapper } from './styles';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <TitlePurple>
        F<TitleOrange>ai</TitleOrange>ble
      </TitlePurple>
      <RecentsCarousel />
      <Text>EEEEEE</Text>
    </Wrapper>
  );
};

export default Home;
