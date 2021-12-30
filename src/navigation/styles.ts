import styled from 'styled-components/native';

export const TabIconWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TabIconLabel = styled.Text<{ color?: string }>`
  font-size: 10px;
  color: ${props => props.color};
`;
