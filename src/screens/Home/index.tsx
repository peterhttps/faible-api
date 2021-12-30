import React from 'react';
import RecentsCarousel from '../../components/RecentsCarousel';
import { Text } from 'react-native';

import { TitleOrange, TitlePurple, Wrapper } from './styles';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <TitlePurple>F<TitleOrange>ai</TitleOrange>ble</TitlePurple>
      <RecentsCarousel />
      <Text>EEEEEE</Text>
    </Wrapper>
  );
}

export default Home;