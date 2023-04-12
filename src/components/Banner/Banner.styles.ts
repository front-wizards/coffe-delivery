import styled from "styled-components";

export const BannerContainerStyled = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const BannerTitleStyled = styled.h1`
    font-weight: 900;
    font-size: 4vw;
`;

export const BannerSubTitleStyled = styled.h5`
    font-weight: 100;
    font-size: 1rem;
`;

export const BannerBigPictureStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
`;

export const BannerItemSectionStyled = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BannerIconStyled = styled.span`
    background-color:${({ theme }) => theme.lightYellow};
    border: 4px solid ${({ theme }) => theme.lightYellow};
    //border-radius: 10px;
    border-radius: 50%;
    width: 200px;
    margin-right: 10px;
`;

export const BannerTextStyled = styled.section`
    margin-right: 10px;
`;
