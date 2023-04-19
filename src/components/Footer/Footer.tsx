import React from 'react'
import { StyledFooterContainer } from './Footer.styles'

type FooterProps = {
  children: React.ReactNode;
}


export const Footer = ({children} : FooterProps) => {
  return (
    <StyledFooterContainer>
      <span>
        { children }
      </span>
      <span>
        {`version ${process.env.VITE_VERSION}`}
      </span>
    </StyledFooterContainer>
  )
}

