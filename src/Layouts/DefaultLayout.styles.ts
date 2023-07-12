import styled from "styled-components";

export const StyledDefaultLayout =  styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 60px 0 60px;
  font-family: Arial, Helvetica, sans-serif;
  color: ${({ theme }) => theme.textDefault};
`;
