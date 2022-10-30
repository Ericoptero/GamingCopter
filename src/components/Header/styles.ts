import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding-block: 1rem;
  background: ${props => props.theme.colors.foreground};

  box-shadow: 0px 15px 40px -15px rgba(0,0,0,0.75);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  max-width: ${props => props.theme.maxWidth};
  padding-inline: 1rem;
  margin-inline: auto;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1;
  color: ${props => props.theme.colors.text};

  span {
    font-size: 1rem;
    display: block;
    text-align: right;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;

  width: 20rem;
  padding: 0.5rem 1rem;
  border-radius: ${props => props.theme.borderRadius};

  background: ${props => props.theme.colors.midground};
  transition: width 1s;

  &:focus-within {
    outline: 2px solid ${props => props.theme.colors.outline};
    width: 100%;
  }

  input {
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    color: ${props => props.theme.colors.text};

    &::placeholder {
      color: ${props => props.theme.colors.secondaryText};
    }
  }

  button {
    border: 0;
    background: none;
    color: ${props => props.theme.colors.text};
  }
`;

export const ProfileIcon = styled.button`
  border: 0;
  background: none;
  color: ${props => props.theme.colors.text};
`;