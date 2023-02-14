import React from 'react'
import Picture from '../Picture/Picture'
import { IntroContainerStyled, IntroBigPictureStyled } from './Intro.styles'



const Intro = () => {
  return (
    <IntroContainerStyled>
        <div>
            <h1>
                Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </p>
            <div>
                <span>
                    <p>
                        <span>
                            icon
                        </span>
                        <span>
                            Compra simples e segura
                        </span>
                    </p>
                    <p>
                        <span>
                            icon
                        </span>
                        <span>
                            Entrega rápida e rastreada
                        </span>
                    </p>
                </span>
                <span>
                    <p>
                        <span>
                            icon
                        </span>
                        <span>
                            Embalagem mantem o café intacto
                        </span>
                    </p>
                    <p>
                        <span>
                            icon
                        </span>
                        <span>
                            O café chega fresquinho até você
                        </span>
                    </p>
                </span>
            </div>
        </div>
        <IntroBigPictureStyled>
            <Picture image={'coffee.png'} dimensions={{width: 476, height: 360}} />
        </IntroBigPictureStyled>
    </IntroContainerStyled>
  )
}

export default Intro