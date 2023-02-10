import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

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
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <span>
                Floripa, SC
              </span>
            </span>
            <span className="box-yellow">
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
        </HeaderCartStyled>
    </HeaderContainerStyled>
  )
}
