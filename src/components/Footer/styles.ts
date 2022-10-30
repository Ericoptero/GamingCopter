import styled from 'styled-components';

export const Container = styled.footer`
  padding: 1rem;
  text-align: center;
  background: ${props => props.theme.colors.foreground};
  color: ${props => props.theme.colors.text};
`;