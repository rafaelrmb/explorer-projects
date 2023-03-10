import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  height: 100vh;
  width: 100%;
  
  > main {
    padding-inline: clamp(2rem, 5vw, 7.5rem);
    overflow-y: scroll;

    > #tags {
      display: flex;
      gap: 1rem;
      margin-block: 2.5rem;
    }
  }
`;


export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > a {
    display: flex;
    align-items: center;
    gap: .625rem;

    color: ${({ theme }) => theme.COLORS.ACCENT};
  }

  #movie-info {
    display: flex;
    align-items: stretch;

    gap: 1.25rem;

    > h1 {
      font-size: 2.25rem;
    }

    #rating {
      display: flex;
      align-items: center;
      margin-top: .625rem;
    }
  }

  > #created-by {
    display: flex; 
    align-items: center;
    gap: 2rem;

    > p {
      display: flex;
      align-items: center;
      gap: .5rem;

      > img {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
      }
    }
  }
`;