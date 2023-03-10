import styled from "styled-components";
import backgroundImg from "../../assets/background-img.png";

export const Container = styled.div`
  display: flex;
  
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  overflow-y: scroll;
  height: 100vh;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  
  margin-inline: clamp(2rem, 10vw, 8rem);
  margin-top: 9rem;
  max-width: 21.875rem;

  > h1 {
    font-size: ${({ theme }) => theme.FONTSIZE.XXL};
    color: ${({ theme }) => theme.COLORS.ACCENT};
  }

  > p:nth-child(2) {
    font-size: ${({ theme }) => theme.FONTSIZE.SMALL};
    color: ${({ theme }) => theme.COLORS.TEXT_LIGHT_700};
    margin-bottom: 3rem;
  }

  > p:nth-child(3) {
    font-size: ${({ theme }) => theme.FONTSIZE.LARGE};
    color: ${({ theme }) => theme.COLORS.TEXT_LIGHT_900};
    margin-bottom: 2.5rem;
  }

  > div {
    margin-top: .5rem;
  }

  > button {
    margin-top: 1.5rem;
    margin-bottom: 2.625rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.ACCENT};
    align-self: center;
  }
`;

export const Background = styled.div`
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
  opacity: .5;
  flex: 1;
`;