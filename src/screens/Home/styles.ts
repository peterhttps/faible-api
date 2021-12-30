import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Wrapper = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${props => props.theme.spacing.m};
`;

export const TitlePurple = styled.Text`
  font-size: 36px;
  color: ${props => props.theme.colors.purple};
  font-weight: bold;
  text-align: center;
`;

export const TitleOrange = styled.Text`
  font-size: 36px;
  color: ${props => props.theme.colors.orange};
  font-weight: bold;
`;
