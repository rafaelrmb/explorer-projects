import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.TEXT_DARK};
  border-radius: .625rem;
  color: ${({ theme }) => theme.COLORS.TEXT_LIGHT_900};
  padding: .3125rem 1rem;
`;