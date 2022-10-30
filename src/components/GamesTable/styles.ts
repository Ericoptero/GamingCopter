import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding-inline: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background: ${props => props.theme.colors.foreground};
  border-radius: ${props => props.theme.borderRadius};
`;

export const SearchInput = styled.input`
  width: 15rem;
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};

  background: ${props => props.theme.colors.midground};
  color: ${props => props.theme.colors.text};

  &::placeholder {
    color: ${props => props.theme.colors.secondaryText};
  }

  &:focus {
    outline: 2px solid ${props => props.theme.colors.outline};
  }
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.25rem;
  
  th, td {
    padding: 0.5rem;

    &:first-child {
      padding-left: 1rem;
      border-top-left-radius: ${props => props.theme.borderRadius};
      border-bottom-left-radius: ${props => props.theme.borderRadius};
    }

    &:last-child {
      padding-right: 1rem;
      border-top-right-radius: ${props => props.theme.borderRadius};
      border-bottom-right-radius: ${props => props.theme.borderRadius};
    }
  }

  thead {
    text-align: left;
    color: ${props => props.theme.colors.text};

    tr {
      background: ${props => props.theme.colors.midground};
    }
  }

  tbody td {
    color: ${props => props.theme.colors.textTable};
  } 
`;