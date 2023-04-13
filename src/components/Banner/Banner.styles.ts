import styled from "styled-components";

export const StyledBannerContainer = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-image: url("../../src/assets/Background.svg");
    background-repeat: no-repeat;
    background-size: cover;
`;

export const StyledBannerTitle = styled.h1`
    font-weight: 900;
    font-size: 4vw;
`;

export const StyledBannerSubTitle = styled.h5`
    font-weight: 100;
    font-size: 1rem;
`;

export const StyledBannerBigPicture = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
`;

export const StyledBannerItemSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledBannerIcon = styled.span`
    background-color:${({ theme }) => theme.lightYellow};
    border: 4px solid ${({ theme }) => theme.lightYellow};
    //border-radius: 10px;
    border-radius: 50%;
    width: 200px;
    margin-right: 10px;
`;

export const StyledBannerText = styled.section`
    margin-right: 10px;
`;
