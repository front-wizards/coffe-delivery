import React from 'react'
import { Outlet } from 'react-router'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { DefaultLayoutStyled } from './DefaultLayoutStyles'


const DefaultLayout = () => {
  return (
    <DefaultLayoutStyled>
        <Header/>
        <Outlet/>
        <Footer/>
    </DefaultLayoutStyled>
  )
}

export default DefaultLayout