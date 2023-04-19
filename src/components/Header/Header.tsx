import { ImLocation2 } from 'react-icons/im'
import { BsCartCheckFill } from 'react-icons/bs'


import Picture from '../Picture/Picture'
import { StyledHeaderCart, StyledHeaderContainer, StyledHeaderLogo } from './Header.styles'

export const Header = () => {
  return (
    <StyledHeaderContainer>
        <StyledHeaderLogo >
            <Picture
                isBig={false}
                image="Logo.png"
                dimensions={{width: 100, height: 50}}
                />
        </StyledHeaderLogo>
        <StyledHeaderCart>
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
        </StyledHeaderCart>
    </StyledHeaderContainer>
  )
}
