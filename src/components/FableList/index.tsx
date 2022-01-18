import React, { useState } from 'react';
import FableItem from '../FableItem';
import { useHome } from '../hooks/useHome';
import { Wrapper } from './styles';

const FableList: React.FC = () => {
  const { home } = useHome();

  return (
    <Wrapper>
      {home?.popular.map(item => {
        return <FableItem key={item.title} story={item} />;
      })}
    </Wrapper>
  );
};

export default FableList;
