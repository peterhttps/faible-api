import styled from 'styled-components/native';

export const Wrapper = styled.View`
  margin-top: ${props => props.theme.spacing.m};
`;

export const Title = styled.Text`
  font-weight: bold;
  margin-left: ${props => props.theme.spacing.l};
  margin-bottom: ${props => props.theme.spacing.xs};
  font-size: 18px;
`;

export const ListItem = styled.TouchableOpacity`
  height: 160px;
  width: 160px;
  background: dodgerblue;
  margin: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const BackgroundImageContainer = styled.ImageBackground`
  height: 160px;
  width: 160px;
  flex: 1;
  justify-content: flex-end;
`;

export const TitleContainer = styled.View`
  background: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 30px;
  justify-content: center;
  opacity: 1;
`;

export const CardTitle = styled.Text`
  font-size: 14px;
  color: ${props => props.theme.colors.typography.primary};
  font-weight: bold;
  margin-left: ${props => props.theme.spacing.m};
`;
