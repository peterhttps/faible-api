import React from 'react';
import FableItem from '../../components/FableItem';
import { useStories } from '../../components/hooks/useStories';
import { FavoritesList, TitleHeader, Wrapper } from './styles';

// import { Container } from './styles';

const Favorites: React.FC = () => {
  const { stories } = useStories();

  return (
    <Wrapper>
      <TitleHeader>Favoritos</TitleHeader>
      <FavoritesList>
        {stories.map(item => {
          return (
            <FableItem
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.bannerImage}
            />
          );
        })}
      </FavoritesList>
    </Wrapper>
  );
};

export default Favorites;
