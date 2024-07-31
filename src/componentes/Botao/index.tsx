import { ReactElement } from 'react'
import './Botao.css'
import React from 'react'

interface BotaoProps extends Omit<HTMLButtonElement, 'children'> {
    children: ReactElement | string
    cor?: string
}

const Botao : React.FC<BotaoProps> = ( {children, ...rest } ) => {

    return (
    <button className='botao' >
        {children}
    </button>)
}

export default Botao