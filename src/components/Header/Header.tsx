import React from 'react'
import Picture from '../Picture/Picture'
import { HeaderCartStyled, HeaderContainerStyled, HeaderLogoStyled } from './Header.styles'

export const Header = () => {
  return (
    <HeaderContainerStyled>
        <HeaderLogoStyled >
            <Picture
                image="Logo.png"
                dimensions={{width: 100, height: 50}}
            />
        </HeaderLogoStyled>
        <HeaderCartStyled>
            <span>Floripa</span>
            <span>Carrinho</span>
        </HeaderCartStyled>
    </HeaderContainerStyled>
  )
}
