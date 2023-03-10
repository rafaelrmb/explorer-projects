import styled from "styled-components"


export const Container = styled.div`
  background: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY}` : "none"};
  border-radius: .625rem;
  padding: 1rem;

  display: flex;
  align-items: center;
  flex-basis: 11.25rem;

  > button {
    background: none;
    border: none;
    height: 1.5rem;
    
    &:hover > svg {
      transform: rotate(180deg);
    }
    
    > svg {
      width: 1.5rem;
      font-size: 1.25rem;
      color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY : theme.COLORS.ACCENT};
      transition: transform .3s ease-in-out;
    } 
  }
  
  > input {
    background-color: transparent;
    border: none;
    color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY : theme.COLORS.WHITE};
    font-size: 1rem;
  }
`;