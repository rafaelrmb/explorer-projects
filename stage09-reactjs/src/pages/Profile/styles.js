import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  height: 100vh;
  width: 100%;
  
  > header {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    padding-block: 4rem;
    padding-left: clamp(1rem, 10vw, 8rem);;

    a {
      display: flex;
      align-items: center;
      gap: .625rem;

      color: ${({ theme }) => theme.COLORS.ACCENT};
      text-decoration: none;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  
  margin-inline: auto;
  max-width: 21.25rem;
  
  > .image-container {
    position: relative;
    
    margin-top: -6rem;
    margin-bottom: 3.5rem;
    max-width: 11.625rem;
    
    > img {
      border-radius: 50%;
      width: 100%;
    }

    > label  {
      display: grid;
      place-content: center;

      position: absolute;
      bottom: .25rem;
      right: .625rem;

      background-color: ${({ theme }) => theme.COLORS.ACCENT};
      border-radius: 50%;
      color: ${({ theme }) => theme.COLORS.TEXT_DARK};
      cursor: pointer;
      font-size: ${({ theme }) => theme.FONTSIZE.LARGE};
      min-width: 3.125rem;
      min-height: 3.125rem;

      > input {
        display: none;
      }
    }
  }

  > div:nth-child(3) {
    margin-bottom: 1rem;
  }

  > button {
    margin-top: 1rem;
  }
`;
