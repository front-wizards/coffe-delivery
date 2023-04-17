import React from 'react'
import { Outlet } from 'react-router'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { DefaultLayoutStyled } from './DefaultLayout.styles'


const DefaultLayout = () => {
  return (
    <DefaultLayoutStyled>
        <Header/>
        <Outlet/>
        <Footer>
          Coffee Delivery
        </Footer>
      </DefaultLayoutStyled>
  )
}

export default DefaultLayout