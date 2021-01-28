import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizContainer from '../src/components/QuizContainer'
import Footer from '../src/components/Footer'

import React, { useState } from "react";
import { useRouter } from 'next/router';



export const EntradaFx = styled.div`
  position:relative;
  width:100%;
  height:40px;
  display:flex;
  align-items:center;
  color:gray;

  &:before {
    content:'';
    padding-left:10px;
    animation-name: digite;
    animation-duration: 1s;
    animation-fill-mode:forwards; 
    animation-direction:normal;//reverse
    animation-iteration-count:1;
    animation-timing-function: linear;
    animation-delay:1s;
    font-size:14px;
  }

  @keyframes digite {
    0% {content:'';}
    1% {content:'D';}
    5% {content:'Di';}
    10% {content:'Dig';}
    15% {content:'Digi';}
    20% {content:'Digit';}
    25% {content:'Digite';}
    30% {content:'Digite ';}
    35% {content:'Digite s';}
    40% {content:'Digite se';}
    45% {content:'Digite seu';}
    50% {content:'Digite seu ';}
    55% {content:'Digite seu n';}
    60% {content:'Digite seu no';}
    65% {content:'Digite seu nom';}
    70% {content:'Digite seu nome';}
    75% {content:'Digite seu nome.';}
    70% {content:'Digite seu nome..';}
    70% {content:'Digite seu nome...';}
    100% {content:'Digite seu nome...';}
  }

`;

export const Entrada = styled.input`
  position:absolute;
  left:0;
  top:0;
  background:rgba(20,20,20,.3);
  border:none;
  outline:none;
  padding:10px;
  width:100%;
  height:40px;
  border-radius:${({ theme }) => theme.Raio2};
`;

export const Botao= styled.button`
  display:block;
  position:relative;
  background:red;
  width:100%;
  height:40px;
  border:none;
  outline:none;
  border-radius:${({ theme }) => theme.Raio2};
  letter-spacing:1px;
  cursor:pointer;
  font-weight:bold;
  color:white;
  margin-top:10px;


  &:after {
    content:'';
    position:absolute;
    left:0;top:0;
    width:100%;
    height:100%;
    box-shadow:-5px 5px 10px ${({ theme }) => theme.colors.secondary};
    opacity:.1;
    border-radius:${({ theme }) => theme.Raio};
    background:white;
    transition:.5s ease;
    
  }

  &:before {
    content:'>';
    opacity:0;
    margin-right:-10px;

    transition:.2s ease;
  }

  &:hover:before{
    opacity:.5;
    margin-right:5px;
  }

  &:hover:after{
    opacity:.2;
  }


  &:disabled{
    opacity:.8;
    pointer-events:none;
  }


`;



export default function Home(trocarTema) {
  //const [trocarTema, tema] = useState("");
  const [placeHolder, placeHolderEstado] = useState("");
  const router = useRouter();

  //Faz a variavel trocar em tempo real
  const [name, setName] = React.useState(''); 

  const [_document, set_document] = React.useState(null)
  React.useEffect(() => {
    set_document(document);
    //Documento pronto
    document.getElementsByClassName('neveScroll')[0].style.opacity='1';
    document.getElementsByClassName('cooper')[0].style.animationName='cooper';

    var  inverterElementos = document.getElementsByClassName('inverter');
    var i;
    for(i=0;i<inverterElementos.length;i++){
        inverterElementos[i].style.filter='invert(0)';
    }
  }, [])

  return (
    <>
      <QuizContainer>
        <QuizLogo />
        <Widget className={'inverter'}>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
            <EntradaFx style={{color: placeHolder}}>
            <Entrada onChange={function (infosDoEvento) {
                  console.log(infosDoEvento.target.value);
                  setName(infosDoEvento.target.value);
                }} onFocus={function(){
              placeHolderEstado("transparent");
            }} onBlur={function(isso){
              if(isso.target.value.length == 0){placeHolderEstado("");}
              console.log(isso.target.value.length);
            }}/>
            </EntradaFx>
            <Botao onClick={function(){
            }} disabled={name.length === 0}>Começar</Botao>
            </form>
          </Widget.Content>
        </Widget>

        <Widget className={'inverter'}>
          <Widget.Content>
            <h2>Quizes da Galera</h2>

            <p>Error 404</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
    </>
  );
}


