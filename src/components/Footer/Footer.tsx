import React from 'react'
import { FooterContainerStyled } from './Footer.styles'

type FooterProps = {
  children: React.ReactNode;
}


export const Footer = ({children} : FooterProps) => {
  return (
    <FooterContainerStyled>
      <span>
        { children }
      </span>
      <span>
        {`version ${import.meta.env.VITE_VERSION}`}
      </span>
    </FooterContainerStyled>
  )
}

