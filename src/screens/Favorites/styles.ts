import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
`;

export const TitleHeader = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: ${props => props.theme.spacing.l};
`;

export const FavoritesList = styled.View`
  flex: 1;
  padding: ${props => props.theme.spacing.l};
`;

export const EmptyFavoritesContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EmptyFavoritesMessage = styled.Text`
  font-size: 14px;
  margin: ${props => props.theme.spacing.l};
  text-align: center;
  color: ${props => props.theme.colors.typography.tertiary};
`;
