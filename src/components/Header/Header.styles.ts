import styled from 'styled-components'


export const HeaderContainerStyled = styled.header`
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 32px 0 32px 0;
`

export const HeaderLogoStyled = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100px;
    //margin: auto;
`

export const HeaderCartStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    widith: 200px;

    span {
        cursor: pointer;
        margin-left: 20px;
        font-weight: 100;
      }
`