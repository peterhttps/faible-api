import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Alert, TouchableOpacity } from 'react-native';
import { useStories } from '../../hooks/useStories';
import { addStory, removeStory } from '../../store/stories/actions';

import {
  Description,
  ImageInfosContainer,
  InfosContainer,
  ItemImage,
  Title,
  Wrapper,
} from './styles';
import IStory from '../../interfaces/IStory';

interface IProps {
  story: IStory;
}

const FableItem: React.FC<IProps> = ({ story }: IProps) => {
  const navigation = useNavigation();
  const { stories } = useStories();
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    if (stories.some(item => item.id === story.id)) {
      setIsFavorited(true);
    } else {
      setIsFavorited(false);
    }
  }, [stories, story.id]);

  const favoriteAction = () => {
    if (isFavorited) {
      removeStory(story.id);
      Alert.alert('', 'História removida dos favoritos!');
      setIsFavorited(false);
    } else {
      addStory(story);
      Alert.alert('', 'História adicionada aos favoritos!');
      setIsFavorited(true);
    }
  };

  const navigateStory = () => {
    navigation.navigate(
      'Story' as never,
      {
        story: { id: story.id as never },
      } as never,
    );
  };

  return (
    <Wrapper activeOpacity={0.8} onPress={navigateStory}>
      <ImageInfosContainer>
        <ItemImage
          source={{
            uri: story.bannerImage,
          }}
        />
        <InfosContainer>
          <Title>{story.title}</Title>
          <Description>{story.description}</Description>
        </InfosContainer>
      </ImageInfosContainer>

      {isFavorited ? (
        <TouchableOpacity activeOpacity={0.2} onPress={favoriteAction}>
          <Ionicons name="heart-sharp" size={24} color="#000" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity activeOpacity={0.2} onPress={favoriteAction}>
          <Ionicons name="heart-outline" size={24} color="#000" />
        </TouchableOpacity>
      )}
    </Wrapper>
  );
};

export default React.memo(FableItem);
