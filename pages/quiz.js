import React from 'react';
import db from '../db.json';
import QuizLogo from '../src/components/QuizLogo'
import QuizContainer from '../src/components/QuizContainer'

import WidgetInvertido from '../src/components/WidgetInvertido'

import LoadWidget from '../src/components/LoadWidget'


import Footer from '../src/components/Footer'
import styled from 'styled-components'
import { useRouter } from 'next/router';
import Link from 'next/link'

function QuizCorpo() {
  const router = useRouter();
  const {name} = router.query;
  const color = db.theme.colors.primaryInverso;
  return (
    <WidgetInvertido>
    <WidgetInvertido.Header>
      <h1>
          <Link href="/">
              <a style={Voltar}>&#x3c;</a>
          </Link>
          Aula 2
      </h1>
    </WidgetInvertido.Header>
    <WidgetInvertido.Content>
      <p>Obrigado por chegar até aqui <b style={{color}}>{name}</b>!</p>
      <p>Por enquanto isso é tudo que temos.</p>
    </WidgetInvertido.Content>
  </WidgetInvertido>
  );
}

const Voltar = {
  color:"white",
  marginLeft:"-10px",
  padding:"0 10px",
  fontWeight:"bolder",
  //padding:"10px",
  textDecoration:"none",
};



export default function telaQuiz() {
  
  //Troca a tela
  const estadosTela = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
  };
  const [estadoTela, setEstadoTela] = React.useState(estadosTela.LOADING);
  React.useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      setEstadoTela(estadosTela.QUIZ);
    }, 2.4 * 1000);

    
  // nasce === didMount
  }, []);


  const [_document, set_document] = React.useState(null)
  React.useEffect(() => {
      set_document(document);
      //Documento pronto
      document.getElementsByClassName('neveScroll')[0].style.opacity='0';

      document.getElementsByClassName('space')[0].style.opacity='1';
      document.getElementsByClassName('spaceImg')[0].style.transform='scale(1)';
      //GPU n CPU bound
      //document.getElementsByClassName('spaceImg')[0].style.animationName='pulsar';

      document.getElementsByClassName('cooper')[0].style.animationName='none';
      document.getElementsByClassName('cooper')[0].style.opacity='0';
      document.getElementsByClassName('warp')[0].style.animationName='warp';

      setTimeout(function(){ 
        var  inverterElementos = document.getElementsByClassName('inverter');
        for(let i=0;i<inverterElementos.length;i++){
            //inverterElementos[i].style.filter='invert(1)';
            setTimeout(function(){ 
              inverterElementos[i].classList.add("invertido");
            }, 100);
        }
      }, 200);
  }, [])

  //Cor do nome
 

  return (
    <>
      <QuizContainer>
        <QuizLogo />



        {estadoTela === 'QUIZ' && <QuizCorpo />}



        {estadoTela === 'LOADING' && <LoadWidget />}


        <Footer />
      </QuizContainer>




    </>
  );
}