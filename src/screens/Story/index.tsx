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
import { useStories } from '../../components/hooks/useStories';
import IStory from '../../interfaces/IStory';
import { getStory } from '../../services/stories';

const imageURL =
  'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

const textStory = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a libero vehicula, convallis neque non, tempus metus. Ut ultricies pretium orci sed auctor. Vivamus sagittis dolor non ligula ultrices, pulvinar volutpat libero gravida. Proin suscipit mi vel facilisis eleifend. Curabitur eu ipsum eu quam gravida aliquet. Nam orci metus, viverra eu tortor sit amet, venenatis consequat tellus. Nullam bibendum enim sed eros feugiat convallis. Nullam pretium, massa sit amet pharetra consectetur, risus felis lobortis ligula, vitae molestie massa libero sed nibh. Nullam libero velit, finibus ut volutpat in, aliquet nec velit. Nullam venenatis, mi at finibus aliquam, justo dolor fringilla diam, varius convallis tellus mauris in dui. Nulla diam lorem, interdum et sapien nec, cursus volutpat dolor. In vel libero euismod, pharetra nisi eget, varius erat.

Curabitur gravida felis non est congue vestibulum. Sed euismod lorem lorem, eu congue est elementum sit amet. Aliquam vulputate sagittis felis ut vehicula. Etiam convallis, nisi quis finibus auctor, tortor mi vestibulum turpis, at laoreet velit nisi quis est. Donec mollis ut est et fermentum. Donec eget odio erat. Aliquam congue quam egestas dictum egestas. Maecenas vulputate lectus ut nulla porta, maximus finibus leo efficitur. Aenean augue sapien, tincidunt faucibus lacinia id, mollis sit amet augue. Suspendisse mattis interdum orci id euismod. Duis lobortis pellentesque justo, quis tempus elit luctus ultricies. Morbi pellentesque sagittis leo quis congue. In sit amet felis vitae nibh mattis imperdiet ac eleifend metus. Aenean ligula enim, pulvinar a bibendum nec, lobortis et ipsum. Ut pretium libero velit, mollis ornare augue suscipit eu.v

Nunc odio eros, convallis nec felis quis, porttitor ultrices velit. Praesent eleifend libero sed turpis pharetra, ac dapibus arcu lobortis. Phasellus lorem felis, semper ac maximus quis, fringilla vitae eros. In non ipsum lacinia arcu mollis mattis. Vivamus posuere arcu eu ligula interdum, eu porttitor nulla pharetra. Morbi accumsan efficitur turpis, sed consequat elit efficitur elementum. Nulla vitae tempus massa, id porta risus. Curabitur faucibus aliquam tortor vel ullamcorper. Sed pulvinar non urna eu interdum. Ut ut sapien vestibulum, aliquam elit et, tincidunt felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit auctor est at ornare. Vivamus dignissim odio hendrerit commodo interdum. Sed elementum, enim a bibendum varius, urna diam tempus est, non tempus justo nisl sit amet purus. Donec vulputate eros accumsan magna ornare laoreet.

Nullam semper placerat neque. Mauris nec tristique nunc. Praesent eget auctor tortor. Nulla luctus porta nisl, ut viverra lorem eleifend sit amet. Curabitur vel ante sit amet elit lacinia ullamcorper eu in elit. Vestibulum hendrerit venenatis faucibus. Pellentesque vulputate nisi eros, consequat pretium nulla hendrerit sed. Aliquam rhoncus, justo in tincidunt dignissim, tellus mi convallis urna, sed viverra dui quam sed odio. Maecenas arcu neque, blandit sit amet nunc vel, bibendum luctus ipsum. Etiam id luctus orci. Maecenas tincidunt purus nisi, nec convallis dolor auctor id. Donec quis pellentesque erat. Vestibulum pellentesque felis et rutrum suscipit. Morbi sit amet cursus dui.`;

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
          <GenreCard>
            <GenreTitle>Aventura</GenreTitle>
          </GenreCard>
          <GenreCard>
            <GenreTitle>Fantasia</GenreTitle>
          </GenreCard>
        </GenreContainer>
        <StoryContainer>{actualStory?.storyText}</StoryContainer>
      </StoryBody>
    </Wrapper>
  );
};

export default Story;
