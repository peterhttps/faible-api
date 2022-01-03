import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Wrapper = styled(SafeAreaView)`
  margin-top: ${props => props.theme.spacing.l};
  flex: 1;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #e5e5e5;
  width: auto;
  margin-left: ${props => props.theme.spacing.l};
  margin-right: ${props => props.theme.spacing.l};
  padding-left: ${props => props.theme.spacing.m};
  padding-right: ${props => props.theme.spacing.m};
  padding-top: ${props => props.theme.spacing.s};
  padding-bottom: ${props => props.theme.spacing.s};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const SearchInput = styled.TextInput`
  width: 90%;
`;

export const DescriptionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: ${props => props.theme.spacing.xl};
  margin-left: ${props => props.theme.spacing.l};
`;

export const ExploreContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 ${props => props.theme.spacing.l};
  margin-top: ${props => props.theme.spacing.m};
`;

export const ExploreCard = styled.TouchableOpacity`
  background: #e5e5e5;
  width: 48%;
  padding: ${props => props.theme.spacing.m};
  justify-content: center;
  align-items: center;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

export const ExploreTitle = styled.Text`
  font-size: 14px;
  font-weight: normal;
`;

export const GenreContainer = styled.View`
  margin: 0 ${props => props.theme.spacing.l};
  margin-top: ${props => props.theme.spacing.m};
  border-top-color: #c4c4c4;
  border-top-width: 1px;
  border-bottom-color: #c4c4c4;
  border-bottom-width: 1px;
`;

export const GenreCard = styled.TouchableOpacity<{
  notBorderTop?: boolean;
  notBorderBottom?: boolean;
}>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-color: #c4c4c4;
  border-bottom-color: #c4c4c4;
  border-top-width: ${props => (!props.notBorderTop ? '1px' : '0px')};
  border-bottom-width: ${props => (!props.notBorderBottom ? '1px' : '0px')};
  padding: ${props => props.theme.spacing.xs} 0;
`;

export const GenreTItle = styled.Text`
  color: ${props => props.theme.colors.typography.tertiary};
`;
