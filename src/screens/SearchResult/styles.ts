import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Wrapper = styled(SafeAreaView)`
  margin-top: ${props => props.theme.spacing.l};
  flex: 1;
`;

export const SearchTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-left: ${props => props.theme.spacing.m};
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
  margin-left: ${props => props.theme.spacing.l};
`;

export const ResultHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
