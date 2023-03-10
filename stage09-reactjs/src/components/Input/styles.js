import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: .625rem;
  border: none;
  padding-inline: 1.125rem;
  width: 100%;

  &:focus-within {
    outline: 1px solid ${({ theme }) => theme.COLORS.ACCENT};
  }
  
  > input {
    flex: 1;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1rem;
    padding-block: 1.375rem;

    
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY};
    }
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY};
  }
`;
