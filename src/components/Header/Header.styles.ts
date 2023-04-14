import styled from 'styled-components'


export const StyledHeaderContainer = styled.header`
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 32px 0 32px 0;
    white-space: nowrap;
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

export const StyledHeaderLogo = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100px;
    //margin: auto;
    
`

export const StyledHeaderCart= styled.div`
    display: flex;
    justify-content: flex-end;
    width: 200px;

    div {
        cursor: pointer;
        margin-left: 20px;
        font-weight: 100;
    }

    & .box-purple {
        background-color: ${({ theme }) => theme.lightPurple};
        padding: 8px;
        text-align: center;
        color: ${({ theme }) => theme.darkPurple};
        font-weight: bold;
        border: 4px solid ${({ theme }) => theme.lightPurple};
        border-radius: 5px;
    }

    & .box-yellow {
        background-color: ${({ theme }) => theme.lightYellow};
        padding: 10px;
        min-width: 30px;
        text-align: center;
        color: ${({ theme }) => theme.darkYellow};;
        font-weight: bold;
        border: 4px solid ${({ theme }) => theme.lightYellow};
        border-radius: 5px;
    }
`