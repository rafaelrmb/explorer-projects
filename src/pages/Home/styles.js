import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: max-content auto;
  grid-template-areas: 
    "header" 
    "main";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY};
  height: 100vh;
  width: 100%;
  
  > div:nth-child(1) {
    grid-area: header;
  }

  a {
    color: inherit;
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  
  > main {
    grid-area: main;
    margin: 0 auto;
    padding: 1.5rem clamp(2rem, 5vw, 7.75rem);
    overflow-y: scroll;

    > header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      > button {
        max-width: 12.9375rem;
      }
    }
  }
`;
