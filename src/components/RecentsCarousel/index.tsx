import React from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useHome } from '../hooks/useHome';

import {
  BackgroundImageContainer,
  CardTitle,
  CarouselView,
  Title,
  TitleContainer,
  Wrapper,
} from './styles';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 5);

const RecentsCarousel: React.FC = () => {
  const { home } = useHome();

  const renderItem = ({ item }) => {
    return (
      <CarouselView height={ITEM_HEIGHT} width={ITEM_WIDTH} activeOpacity={0.9}>
        <BackgroundImageContainer
          source={{ uri: item.bannerImage }}
          resizeMode="cover"
          height={ITEM_HEIGHT}
          width={ITEM_WIDTH}
          imageStyle={{ borderRadius: 15 }}
        >
          <TitleContainer>
            <CardTitle>{item.title}</CardTitle>
          </TitleContainer>
        </BackgroundImageContainer>
      </CarouselView>
    );
  };

  return (
    <Wrapper>
      <Title>Recentes</Title>
      <Carousel
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        data={home?.new || []}
        renderItem={renderItem}
        autoplay
        autoplayInterval={5000}
        autoplayDelay={500}
        loop
      />
    </Wrapper>
  );
};

export default RecentsCarousel;
