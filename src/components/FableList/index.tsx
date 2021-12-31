import React, { useState } from 'react';
import FableItem from '../FableItem';
import { Wrapper } from './styles';

const FableList: React.FC = () => {
  const [items] = useState([
    {
      title: 'O conto secreto',
      description: 'O que será que aconteceu nessa casa?',
      image:
        'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      title: 'O conto secreto 2',
      description: 'O que será que aconteceu nessa casa?',
      image:
        'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      title: 'O conto secreto 3',
      description: 'O que será que aconteceu nessa casa?',
      image:
        'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ]);

  return (
    <Wrapper>
      {items.map(item => {
        return (
          <FableItem
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        );
      })}
    </Wrapper>
  );
};

export default FableList;
