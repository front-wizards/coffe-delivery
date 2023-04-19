import styled from "styled-components";

export const StyledFooterContainer= styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 10px 0 10px 0;
    color: ${({ theme }) => theme.lightBlack};
    @media only screen and (max-width: 1100px) {
        font-size: 0.75em;
      }

    @media only screen and (max-width: 800px) {
        font-size: 0.75em;
      }
    
      @media only screen and (max-width: 750px) {
        font-size: 0.5em;
      }
`