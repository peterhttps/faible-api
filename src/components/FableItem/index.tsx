import React, { useEffect, useState } from 'react';
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
import { useStories } from '../hooks/useStories';
import { removeStory } from '../../store/stories/actions';

interface IProps {
  title: string;
  description: string;
  image: string;
}

const FableItem: React.FC<IProps> = ({ title, description, image }: IProps) => {
  const navigation = useNavigation();
  const { stories } = useStories();
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    if (stories.some(item => item.title === title)) {
      setIsFavorited(true);
    }
  }, [stories, title]);

  const removeStoryStorage = () => {
    removeStory(title);
  };

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

      {isFavorited ? (
        <Ionicons
          name="heart-sharp"
          size={24}
          color="#000"
          onPress={removeStoryStorage}
        />
      ) : (
        <Ionicons name="heart-outline" size={24} color="#000" />
      )}
    </Wrapper>
  );
};

export default React.memo(FableItem);
