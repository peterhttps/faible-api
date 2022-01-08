import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Alert, TouchableOpacity } from 'react-native';
import { useStories } from '../hooks/useStories';
import { removeStory } from '../../store/stories/actions';

import {
  Description,
  ImageInfosContainer,
  InfosContainer,
  ItemImage,
  Title,
  Wrapper,
} from './styles';

interface IProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const FableItem: React.FC<IProps> = ({
  id,
  title,
  description,
  image,
}: IProps) => {
  const navigation = useNavigation();
  const { stories } = useStories();
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    if (stories.some(item => item.title === title)) {
      setIsFavorited(true);
    }
  }, [stories, title]);

  const removeStoryStorage = () => {
    removeStory(id);
    Alert.alert('', 'História removida dos favoritos!');
  };

  const navigateStory = () => {
    navigation.navigate(
      'Story' as never,
      {
        story: { id: id as never },
      } as never,
    );
  };

  return (
    <Wrapper activeOpacity={0.8} onPress={navigateStory}>
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
        <TouchableOpacity activeOpacity={0.2} onPress={removeStoryStorage}>
          <Ionicons
            name="heart-sharp"
            size={24}
            color="#000"
            onPress={removeStoryStorage}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity activeOpacity={0.2}>
          <Ionicons name="heart-outline" size={24} color="#000" />
        </TouchableOpacity>
      )}
    </Wrapper>
  );
};

export default React.memo(FableItem);
