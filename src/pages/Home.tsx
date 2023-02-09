import React from 'react'
import styled from 'styled-components'


const HomeContainerStyled =  styled.main`
  diplay: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Home = () => {
  return (
    <HomeContainerStyled>Index</HomeContainerStyled>
  )
}

export default Home