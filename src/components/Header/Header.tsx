import { BsCartCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'


import Picture from '../Picture/Picture'
import { StyledHeaderCart, StyledHeaderContainer, StyledHeaderLogo } from './Header.styles'
import LocationInfo from '../LocationInfo/LocationInfo'

export const Header = () => {
  return (
    <StyledHeaderContainer>
        <StyledHeaderLogo >
            <Link to="/">
              <Picture
                isBig={false}
                image="Logo.png"
                dimensions={{width: 100, height: 50}}
              />
            </Link>
        </StyledHeaderLogo>
        <StyledHeaderCart>
            <div className="box-purple">
                <LocationInfo />
            </div>
            <div className="box-yellow">
              <BsCartCheckFill/>
            </div>
        </StyledHeaderCart>
    </StyledHeaderContainer>
  )
}
