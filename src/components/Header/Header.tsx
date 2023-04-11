import { ImLocation2 } from 'react-icons/im'
import { BsCartCheckFill } from 'react-icons/bs'


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
            <span className="box-purple">
              <span>
                <ImLocation2 />
              </span>
              <span>
                Floripa, SC
              </span>
            </span>
            <span className="box-yellow">
              <BsCartCheckFill/>
            </span>
        </HeaderCartStyled>
    </HeaderContainerStyled>
  )
}
