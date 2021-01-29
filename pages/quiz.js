import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizContainer from '../src/components/QuizContainer'
import Footer from '../src/components/Footer'
import styled from 'styled-components'
import { useRouter } from 'next/router';
import Link from 'next/link'


const Voltar = {
  color:"black",
  marginLeft:"-10px",
  padding:"0 10px",
  fontWeight:"bolder",
  //padding:"10px",
  textDecoration:"none",
};


export default function telaQuiz(trocarTema) {
    const router = useRouter();
    const {name} = router.query;

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

        var  inverterElementos = document.getElementsByClassName('inverter');
        var i;
        for(i=0;i<inverterElementos.length;i++){
            //inverterElementos[i].style.filter='invert(1)';
            inverterElementos[i].classList.add("invertido");
        }
    }, [])

    //Cor do nome
    const color = db.theme.colors.primary;

  return (
    <>
      <QuizContainer>
        <QuizLogo />
        <Widget className={'inverter'}>
          <Widget.Header>
            <h1>
                <Link href="/">
                    <a style={Voltar}>&#x3c;</a>
                </Link>
                Aula 2
            </h1>
          </Widget.Header>
          <Widget.Content>
            <p>Obrigado por chegar até aqui <b style={{color}}>{name}</b>!</p>
            <p>Por enquanto isso é tudo que temos.</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>

    </>
  );
}