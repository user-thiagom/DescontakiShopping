import React from 'react'
import './index.css'
import relatorioImg from '../../assets/images/lojista.png'
import consumidorImg from '../../assets/images/consumidor.png'
import gestaoDeCuponsImg from '../../assets/images/percentage.png'

import NavigationButton from '../../components/NavigationButton'

import { Link } from 'react-router-dom';

const Menu = ()=>{
    
    
    return(
        <div id="container">
            <h2>Seja Bem Vindo(a)!</h2>
            <br></br>
            <p>O que deseja fazer?</p>
            <hr className='hrLarge'></hr>
            <div id='shoppingOptions'>
                <Link to="/relatorios"><NavigationButton value='Relatório dos Lojistas' imgSrc={relatorioImg}/></Link>
                <Link to="/relatorios"><NavigationButton value='Relatório dos Consumidores' imgSrc={consumidorImg}/></Link>
                <Link to="/gestaodecupons"><NavigationButton value='Gestão de Cupons' imgSrc={gestaoDeCuponsImg}/></Link>
            </div>
            <hr className='hrLarge'></hr>
        </div>
    )
}

export default Menu