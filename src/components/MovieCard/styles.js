import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: .625rem;
  margin-top: 3rem;
  padding: 2rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > .rating {
    display: flex;
    align-items: center;
    gap: .5rem;

    > svg {
      color: ${({ theme }) => theme.COLORS.ACCENT};
    }    
  }

  > #description {
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to display */
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.2em; /* adjust this value to be greater than or equal to the font size */
    max-height: 2.4em; /* adjust this value to display at least 2 lines */
    text-overflow: ellipsis;
  }
  
  > .tags {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
  }
`;