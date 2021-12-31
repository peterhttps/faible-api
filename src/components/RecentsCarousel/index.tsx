import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

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
  const [items] = useState([
    {
      title: 'O conto secreto',
      image:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      title: 'Roubo do relógio dourado',
      image:
        'https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
    },
    {
      title: 'Dona Maria e as dez flores',
      image:
        'https://images.unsplash.com/photo-1501813531019-338a4182efb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },

    {
      title: 'A raposa e a lebre',
      image:
        'https://images.unsplash.com/photo-1550100136-e092101726f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
  ]);

  const renderItem = ({ item }) => {
    return (
      <CarouselView height={ITEM_HEIGHT} width={ITEM_WIDTH} activeOpacity={0.9}>
        <BackgroundImageContainer
          source={{ uri: item.image }}
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
        data={items}
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
