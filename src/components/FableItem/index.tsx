import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Description,
  ImageInfosContainer,
  InfosContainer,
  ItemImage,
  Title,
  Wrapper,
} from './styles';

interface IProps {
  title: string;
  description: string;
  image: string;
}

const FableItem: React.FC<IProps> = ({ title, description, image }: IProps) => {
  const navigation = useNavigation();

  return (
    <Wrapper
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Story' as never)}
    >
      <ImageInfosContainer>
        <ItemImage
          source={{
            uri: image,
          }}
        />
        <InfosContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </InfosContainer>
      </ImageInfosContainer>

      <Ionicons name="heart-outline" size={24} color="#000" />
    </Wrapper>
  );
};

export default FableItem;
