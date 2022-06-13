import React, { useCallback, useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import { addStory, removeStory } from '../../store/stories/actions';

import {
  GenreCard,
  GenreContainer,
  GenreTitle,
  HeaderButton,
  HeaderButtonsContainer,
  StoryAuthor,
  StoryBody,
  StoryContainer,
  StoryHeader,
  StoryTitle,
  Wrapper,
} from './styles';
import { useStories } from '../../hooks/useStories';
import IStory from '../../interfaces/IStory';
import { getStory } from '../../services/stories';

const markdownContent = `    #Markdown in react-native is so cool! {'\n\n'}
You can **emphasize** what you want, or just _suggest it_ 😏…{'\n'}
You can even [**link your website**](http://carlito.ninja) or if you prefer:
[email somebody](mailto:email@somebody.com){'\n'}
Spice it up with some GIFs 💃: ![Some
GIF](https://media.giphy.com/media/dkGhBWE3SyzXW/giphy.gif){'\n'}
And even add a cool video 😎!{'\n'}
[![A cool video from
YT](https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg)](http://www.youtube.com/watch?v=dQw4w9WgXcQ)
[![Another one from
Vimeo](https://i.vimeocdn.com/video/399486266_640.jpg)](https://vimeo.com/57580368)`;

type ParamList = {
  Detail: {
    story: IStory;
  };
};

const Story: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'Detail'>>();

  const [isFavorited, setIsFavorited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [actualStory, setActualStory] = useState<IStory | null>(null);
  const { stories } = useStories();

  const fetchStory = useCallback(async () => {
    try {
      const storyResponse = await getStory(route.params.story.id);
      setIsLoading(false);
      setActualStory(storyResponse.data);
    } catch {
      console.log('Error');
    }
  }, [route.params.story.id]);

  useEffect(() => {
    fetchStory();
  }, [fetchStory]);

  useEffect(() => {
    if (stories.some(item => item.id === route.params.story.id)) {
      setIsFavorited(true);
    } else {
      setIsFavorited(false);
    }
  }, [route.params.story.id, stories]);

  const favoriteAction = () => {
    if (isFavorited) {
      removeStory(actualStory?.id || '');
      Alert.alert('', 'História removida dos favoritos!');
      setIsFavorited(false);
    } else {
      addStory(actualStory);
      Alert.alert('', 'História adicionada aos favoritos!');
      setIsFavorited(true);
    }
  };

  if (isLoading) {
    return <Wrapper />;
  }

  return (
    <Wrapper>
      <StoryHeader
        source={{ uri: actualStory?.bannerImage }}
        resizeMode="cover"
        imageStyle={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}
      >
        <HeaderButtonsContainer>
          <HeaderButton activeOpacity={0.8} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" color="#6A040F" size={15} />
          </HeaderButton>
          <HeaderButton activeOpacity={0.8} onPress={favoriteAction}>
            {isFavorited ? (
              <Ionicons name="heart-sharp" color="#6A040F" size={15} />
            ) : (
              <Ionicons name="heart-outline" color="#6A040F" size={15} />
            )}
          </HeaderButton>
        </HeaderButtonsContainer>
      </StoryHeader>
      <StoryBody>
        <StoryTitle>{actualStory?.title}</StoryTitle>
        <StoryAuthor>{actualStory?.author}</StoryAuthor>
        <GenreContainer>
          {actualStory?.genres?.map(genre => {
            return (
              <GenreCard key={genre}>
                <GenreTitle>{genre}</GenreTitle>
              </GenreCard>
            );
          })}
        </GenreContainer>
        <StoryContainer>{actualStory?.storyText}</StoryContainer>
      </StoryBody>
    </Wrapper>
  );
};

export default Story;
