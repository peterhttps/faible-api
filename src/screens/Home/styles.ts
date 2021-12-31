import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
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

export const DescriptionTitle = styled.Text`
  margin-left: ${props => props.theme.spacing.l};
  margin-top: ${props => props.theme.spacing.s};
  margin-bottom: ${props => props.theme.spacing.m};
  font-weight: bold;
  font-size: 18px;
`;
