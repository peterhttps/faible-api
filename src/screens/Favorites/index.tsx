import React from 'react';
import FableItem from '../../components/FableItem';
import { useStories } from '../../components/hooks/useStories';
import {
  EmptyFavoritesContainer,
  EmptyFavoritesMessage,
  FavoritesList,
  TitleHeader,
  Wrapper,
} from './styles';

const Favorites: React.FC = () => {
  const { stories } = useStories();

  return (
    <Wrapper>
      <TitleHeader>Favoritos</TitleHeader>
      {stories.length === 0 ? (
        <EmptyFavoritesContainer>
          <EmptyFavoritesMessage>
            Ainda não há histórias favoritas aqui!
          </EmptyFavoritesMessage>
        </EmptyFavoritesContainer>
      ) : (
        <FavoritesList>
          {stories.map(item => {
            return (
              <FableItem
                id={item.id}
                key={item.title}
                title={item.title}
                description={item.description}
                image={item.bannerImage}
              />
            );
          })}
        </FavoritesList>
      )}
    </Wrapper>
  );
};

export default Favorites;
