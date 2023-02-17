import styled from "styled-components";

export const DefaultLayoutStyled =  styled.main`
  diplay: flex;
  justify-content: center;
  align-items: center;
  padding: 0 60px 0 60px;
  font-family: Arial, Helvetica, sans-serif;
  color: ${({ theme }) => theme.textDefault};
`;
