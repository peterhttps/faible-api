import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 16px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ItemImage = styled.Image`
  width: 70px;
  height: 70px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const InfosContainer = styled.View`
  justify-content: center;
  margin-left: ${props => props.theme.spacing.m};
  max-width: 70%;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

export const Description = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${props => props.theme.colors.typography.secondary};
`;

export const ImageInfosContainer = styled.View`
  flex-direction: row;
`;
