import React from 'react'
import ReactDOM from 'react-dom'
import Saudacao from './Saudacao'
import Primeiro from './Primeiro'
import Bomdia from './BomDia'
import Botoes from './Botoes'


ReactDOM.render(
    <div>
         <Bomdia />
         <Primeiro></Primeiro>
         <Saudacao topo="Bom dia " nome="Gabriel Haab"></Saudacao>
         <Botoes/>
    </div>
    , document.getElementById('root'))