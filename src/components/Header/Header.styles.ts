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

    & .box-purple {
        background-color: purple;
        padding: 10px;
        min-width: 100px;
        text-align: center;
        color: white;
        font-weight: bold;
        border: 4px solid purple;
        border-radius: 5px;
    }

    & .box-orange {
        background-color: orange;
        padding: 10px;
        min-width: 30px;
        text-align: center;
        color: white;
        font-weight: bold;
        border: 4px solid orange;
        border-radius: 5px;
    }

`