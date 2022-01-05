import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  flex: 1;
`;

export const StoryHeader = styled.ImageBackground`
  width: 100%;
  height: 220px;
`;

export const HeaderButtonsContainer = styled.View`
  margin: ${props => props.theme.spacing.m};
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderButton = styled.TouchableOpacity`
  background: white;
  flex-direction: row;
  align-self: flex-start;
  width: 29px;
  height: 29px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const StoryBody = styled.View`
  flex: 1;
  padding-left: ${props => props.theme.spacing.l};
  padding-right: ${props => props.theme.spacing.l};
  padding-top: ${props => props.theme.spacing.m};
`;

export const StoryTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const StoryAuthor = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.colors.typography.tertiary};
`;

export const GenreContainer = styled.View`
  flex-direction: row;
  margin-top: ${props => props.theme.spacing.s};
`;

export const GenreCard = styled.View`
  flex-direction: row;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  margin-right: ${props => props.theme.spacing.s};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.l};
  background: ${props => props.theme.colors.primary};
  border-radius: 5px;
`;

export const GenreTitle = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: bold;
`;

export const StoryContainer = styled.Text`
  margin-top: ${props => props.theme.spacing.m};
  font-size: 16px;
  color: #3b3b3b;
  padding-bottom: ${props => props.theme.spacing.l};
`;
