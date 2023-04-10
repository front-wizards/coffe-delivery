import React from 'react'

import { BsFillCartFill } from 'react-icons/bs'
import { BsFillClockFill } from 'react-icons/bs'
import { VscPackage } from 'react-icons/vsc'
import { GiCoffeeCup } from 'react-icons/gi'

import Picture from '../Picture/Picture'
import { IntroContainerStyled, IntroBigPictureStyled, IntroItemSectionStyled, IntroIconStyled, IntroTextStyled, IntroTitleStyled, IntroSubTitleStyled } from './Intro.styles'



const Intro = () => {
  return (
    <IntroContainerStyled>
        <div>
            <IntroTitleStyled>
                Encontre o café perfeito para qualquer hora do dia
            </IntroTitleStyled>
            <IntroSubTitleStyled>
                Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </IntroSubTitleStyled>
            <IntroItemSectionStyled>
                <span>
                    <p>
                        <IntroIconStyled>
                            <BsFillCartFill />
                        </IntroIconStyled>
                        <span>
                            Compra simples e segura
                        </span>
                    </p>
                    <p>
                    <IntroIconStyled>
                        <BsFillClockFill />
                        </IntroIconStyled>
                        <span>
                            Entrega rápida e rastreada
                        </span>
                    </p>
                </span>
                <span>
                    <p>
                    <IntroIconStyled>
                        <VscPackage />
                        </IntroIconStyled>
                        <span>
                            Embalagem mantem o café intacto
                        </span>
                    </p>
                    <p>
                    <IntroIconStyled>
                        <GiCoffeeCup />
                        </IntroIconStyled>
                        <span>
                            O café chega fresquinho até você
                        </span>
                    </p>
                </span>
            </IntroItemSectionStyled>
        </div>
        <IntroBigPictureStyled>
            <Picture image={'coffee.png'} dimensions={{width: 476, height: 360}} />
        </IntroBigPictureStyled>
    </IntroContainerStyled>
  )
}

export default Intro