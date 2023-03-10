import styled from "styled-components";

export const Container = styled.textarea`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border: none;
  border-radius: .625rem;
  color: ${({ theme }) => theme.COLORS.GRAY};
  font-size: ${({ theme }) => theme.FONTSIZE.MD};
  font-family: inherit;
  min-height: 12.5rem;
  resize: vertical;
  padding: 1.1875rem 1rem;
  width: 100%;
`;