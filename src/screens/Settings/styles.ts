import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: ${props => props.theme.spacing.l};
`;

export const SettingsContainer = styled.View`
  margin: 0 ${props => props.theme.spacing.l};
  margin-top: ${props => props.theme.spacing.l};
  border-top-color: #c4c4c4;
  border-top-width: 1px;
  border-bottom-color: #c4c4c4;
  border-bottom-width: 1px;
`;

export const SettingsCardTitle = styled.Text`
  color: ${props => props.theme.colors.typography.tertiary};
`;

export const SettingsCard = styled.View<{
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
  padding: ${props => props.theme.spacing.s} 0;
`;
