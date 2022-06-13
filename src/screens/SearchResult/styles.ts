import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Wrapper = styled(SafeAreaView)`
  margin-top: ${props => props.theme.spacing.l};
  flex: 1;
`;

export const SearchTitle = styled.Text`

`;
