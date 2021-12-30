import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Title = styled.Text`
  font-weight: bold;
  margin-left: ${props => props.theme.spacing.l};
  margin-bottom:  ${props => props.theme.spacing.m};
  font-size: 18px;
`;

export const CarouselView = styled.View<{ width: number, height: number }>`
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
  background: dodgerblue;
  border-top-left-radius: 15;
  border-top-right-radius: 15;
  border-bottom-left-radius: 15;
  border-bottom-right-radius: 15;

`;

export const BackgroundImageContainer = styled.ImageBackground<{ width: number, height: number }>`
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
  flex: 1;
  justify-content: flex-end;
`;

export const TitleContainer = styled.View`
  background: white;
  height: 35px;
  justify-content: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const CardTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.colors.typography.primary};
  margin-left: ${props => props.theme.spacing.m};
`;