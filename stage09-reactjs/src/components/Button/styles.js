import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.ACCENT};
  border: none;
  border-radius: .625rem;
  color: ${({ theme }) => theme.COLORS.TEXT_DARK};
  font-weight: 500;
  font-size: ${({ theme }) => theme.FONTSIZE.MEDIUM};
  font-family: inherit;
  padding: 1rem;
  width: 100%;
`;