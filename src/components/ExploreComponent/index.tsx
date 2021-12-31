import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import {
  BackgroundImageContainer,
  CardTitle,
  ListItem,
  Title,
  TitleContainer,
  Wrapper,
} from './styles';

const ExploreComponent: React.FC = () => {
  const [items] = useState([
    {
      title: 'Fantasia',
      image:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1968&q=80',
    },
    {
      title: 'Sci-Fi',
      image:
        'https://images.unsplash.com/photo-1595486929480-330d9b25fbb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2139&q=80',
    },
    {
      title: 'Comédia',
      image:
        'https://images.unsplash.com/photo-1607097596430-9029e50b15a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1958&q=80',
    },
  ]);

  return (
    <Wrapper>
      <Title>Explore</Title>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map(item => {
          return (
            <ListItem key={item.title} activeOpacity={0.9}>
              <BackgroundImageContainer
                source={{ uri: item.image }}
                resizeMode="cover"
                imageStyle={{ borderRadius: 10 }}
              >
                <TitleContainer>
                  <CardTitle>{item.title}</CardTitle>
                </TitleContainer>
              </BackgroundImageContainer>
            </ListItem>
          );
        })}
      </ScrollView>
    </Wrapper>
  );
};

export default ExploreComponent;
