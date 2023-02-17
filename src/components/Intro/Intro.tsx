import { faClock, faSquare } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping, faLocationDot, faMugHot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
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
                            <FontAwesomeIcon icon={faCartShopping} />
                        </IntroIconStyled>
                        <span>
                            Compra simples e segura
                        </span>
                    </p>
                    <p>
                    <IntroIconStyled>
                        <FontAwesomeIcon icon={faClock} />
                        </IntroIconStyled>
                        <span>
                            Entrega rápida e rastreada
                        </span>
                    </p>
                </span>
                <span>
                    <p>
                    <IntroIconStyled>
                        <FontAwesomeIcon icon={faSquare} />
                        </IntroIconStyled>
                        <span>
                            Embalagem mantem o café intacto
                        </span>
                    </p>
                    <p>
                    <IntroIconStyled>
                        <FontAwesomeIcon icon={faMugHot} />
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