import React from 'react';
import Nathy from '../../assets/img/nathy.png';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      
        <img src={Nathy} alt="Logo Alura" />
    
      <p>
        Orgulhosamente criado durante a
        {' '}
          Imersão React da Alura
          
      </p>
      <p>
        Quer saber mais sobre meus projetos e estudos?  {'  '}
        <a href="https://github.com/NathyNeumann">
          
           Vá para o meu gitHub. 
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
