import React from 'react'

import { BsFillCartFill } from 'react-icons/bs'
import { BsFillClockFill } from 'react-icons/bs'
import { VscPackage } from 'react-icons/vsc'
import { GiCoffeeCup } from 'react-icons/gi'

import Picture from '../Picture/Picture'
import { StyledBannerContainer, StyledBannerBigPicture, StyledBannerItemSection, StyledBannerIcon, StyledBannerTitle, StyledBannerSubTitle } from './Banner.styles'



const Banner = () => {
  return (
    <StyledBannerContainer>
        <div>
            <StyledBannerTitle>
                Encontre o café perfeito para qualquer hora do dia
            </StyledBannerTitle>
            <StyledBannerSubTitle>
                Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </StyledBannerSubTitle>
            <StyledBannerItemSection>
                <div>
                    <p>
                        <StyledBannerIcon>
                            <BsFillCartFill />
                        </StyledBannerIcon>
                        <span>
                            Compra simples e segura
                        </span>
                    </p>
                    <p>
                        <StyledBannerIcon>
                            <BsFillClockFill />
                        </StyledBannerIcon>
                        <span>
                            Entrega rápida e rastreada
                        </span>
                    </p>
                </div>
                <div>
                    <p>
                        <StyledBannerIcon>
                            <VscPackage />
                        </StyledBannerIcon>
                        <span>
                            Embalagem mantem o café intacto
                        </span>
                    </p>
                    <p>
                        <StyledBannerIcon>
                            <GiCoffeeCup />
                        </StyledBannerIcon>
                        <span>
                            O café chega fresquinho até você
                        </span>
                    </p>
                </div>
            </StyledBannerItemSection>
        </div>
        <StyledBannerBigPicture>
            <Picture image={'coffee.png'} dimensions={{width: 476, height: 360}} isBig={true} />
        </StyledBannerBigPicture>
    </StyledBannerContainer>
  )
}

export default Banner
