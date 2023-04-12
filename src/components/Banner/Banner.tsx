import { faClock, faSquare } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping, faLocationDot, faMugHot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Picture from '../Picture/Picture'
import { BannerContainerStyled, BannerBigPictureStyled, BannerItemSectionStyled, BannerIconStyled, BannerTextStyled, BannerTitleStyled, BannerSubTitleStyled } from './Banner.styles'



const Banner = () => {
  return (
    <BannerContainerStyled>
        <div>
            <BannerTitleStyled>
                Encontre o café perfeito para qualquer hora do dia
            </BannerTitleStyled>
            <BannerSubTitleStyled>
                Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </BannerSubTitleStyled>
            <BannerItemSectionStyled>
                <span>
                    <p>
                        <BannerIconStyled>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </BannerIconStyled>
                        <span>
                            Compra simples e segura
                        </span>
                    </p>
                    <p>
                    <BannerIconStyled>
                        <FontAwesomeIcon icon={faClock} />
                        </BannerIconStyled>
                        <span>
                            Entrega rápida e rastreada
                        </span>
                    </p>
                </span>
                <span>
                    <p>
                    <BannerIconStyled>
                        <FontAwesomeIcon icon={faSquare} />
                        </BannerIconStyled>
                        <span>
                            Embalagem mantem o café intacto
                        </span>
                    </p>
                    <p>
                    <BannerIconStyled>
                        <FontAwesomeIcon icon={faMugHot} />
                        </BannerIconStyled>
                        <span>
                            O café chega fresquinho até você
                        </span>
                    </p>
                </span>
            </BannerItemSectionStyled>
        </div>
        <BannerBigPictureStyled>
            <Picture image={'coffee.png'} dimensions={{width: 476, height: 360}} />
        </BannerBigPictureStyled>
    </BannerContainerStyled>
  )
}

export default Banner