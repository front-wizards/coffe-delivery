import React from 'react'
import { Outlet } from 'react-router'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { StyledDefaultLayout } from './DefaultLayout.styles'


const DefaultLayout = () => {
  return (
    <StyledDefaultLayout>
        <Header/>
        <Outlet/>
        <Footer/>
    </StyledDefaultLayout>
  )
}

export default DefaultLayout