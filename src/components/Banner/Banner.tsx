import React from 'react'

import { BsFillCartFill } from 'react-icons/bs'
import { BsFillClockFill } from 'react-icons/bs'
import { VscPackage } from 'react-icons/vsc'
import { GiCoffeeCup } from 'react-icons/gi'

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
                            <BsFillCartFill />
                        </BannerIconStyled>
                        <span>
                            Compra simples e segura
                        </span>
                    </p>
                    <p>
                        <BannerIconStyled>
                            <BsFillClockFill />
                        </BannerIconStyled>
                        <span>
                            Entrega rápida e rastreada
                        </span>
                    </p>
                </span>
                <span>
                    <p>
                        <BannerIconStyled>
                            <VscPackage />
                        </BannerIconStyled>
                        <span>
                            Embalagem mantem o café intacto
                        </span>
                    </p>
                    <p>
                        <BannerIconStyled>
                            <GiCoffeeCup />
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