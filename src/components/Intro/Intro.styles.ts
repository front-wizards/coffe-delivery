import styled from "styled-components";

export const IntroContainerStyled = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const IntroTitleStyled = styled.h1`
    font-weight: 900;
    font-size: 4vw;
`;

export const IntroSubTitleStyled = styled.h5`
    font-weight: 100;
    font-size: 1rem;
`;

export const IntroBigPictureStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
`;

export const IntroItemSectionStyled = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const IntroIconStyled = styled.span`
    background-color:${({ theme }) => theme.lightYellow};
    border: 4px solid ${({ theme }) => theme.lightYellow};
    //border-radius: 10px;
    border-radius: 50%;
    width: 200px;
    margin-right: 10px;
`;

export const IntroTextStyled = styled.section`
    margin-right: 10px;
`;