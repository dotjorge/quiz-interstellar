import React, { useState } from "react";
//import db from '../../db.json';
import QuizLogo from '../../components/QuizLogo'
import QuizContainer from '../../components/QuizContainer'
import Widget from '../../components/Widget'
import LoadWidget from '../../components/loadWidget'
import AlternativesForm from '../../components/AlternativesForm';
import Botao from '../../components/Botao'
import Footer from '../../components/Footer'
import styled from 'styled-components'
import { useRouter } from 'next/router';
import Link from 'next/link'
import BarraLoading from '../../components/BarraLoading'


export const ResultadoOverlay = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  left:0;top:0;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:70px;
  color:white;
  &[data-result="acertou"] {
    color:#00ff37;
  }
  &[data-result="errou"] {
    color:#ff0c00;
  }


  &:before{
    content:attr(data-simbolo);
  }

  opacity:0;
  animation-name: fade;
  animation-duration: 1s;
  animation-fill-mode:forwards; 
  animation-iteration-count:1;
  animation-timing-function: linear;

  @keyframes fade {
      0%{opacity:0;} 
      50%{opacity:1;}
      100%{opacity:0;transform:scale(1.5)}
  }

`;

function QuizResultado({ results, importarQuestoesDe }) {
  const router = useRouter();
  let {name} = router.query;

  if(!name){
  name = 'Sem nome';
  }

  


  return (
    <Widget>
      <Widget.Header>
        {/*Por algum motivo tava dando um erro*/}
        <h1><h3>&#9776;</h3><b>Seu resultado</b></h1>
      </Widget.Header>

      <Widget.Content>
        <p data-externo={'sim'}>

            {/* {results.reduce((somatoriaAtual, resultAtual) => {
              const isAcerto = resultAtual === true;
              if (isAcerto) {
                return somatoriaAtual + 1;
              }
              return somatoriaAtual;
            }, 0)} */}
            {
            results.filter((x) => x).length  === 0
            ?
            (<><b>{name}</b>, você não acertou nenhuma pergunta :(</>)
            : 
            ''
            }

            {
            results.filter((x) => x).length  === 1
            ?
            (<><b>{name}</b>, você acertou só uma pergunta.</>)
            : 
            ''
            }

            {
            results.filter((x) => x).length  > 1 && results.filter((x) => x).length  != importarQuestoesDe.length
            ?
            (<><b>{name}</b>, você acertou {results.filter((x) => x).length} perguntas.</>)
            : 
            ''
            }

            {
            results.filter((x) => x).length === importarQuestoesDe.length
            ?
            (<><b>{name}</b>, você acertou todas as {results.filter((x) => x).length} perguntas!</>)
            : 
            ''
            }
            
          </p>
          <BarraLoading  resultado={'sim'} porcento={(Math.round(results.filter((x) => x).length / results.length * 100))} dataTema={'invertido'} />

          {/*Jogar dnv*/}

          <form 
            autoComplete="off"
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.reload();
            }}
            >
            <Botao data-seta={'>  '} disabled={name.length === 0}>Jogar novamente</Botao>
            </form>


          <ul>
            {results.map((result, index) => (
              <li style={{width:'100%',display:'flex',color:'rgba(255,255,255,.7)'}} key={`result__${result}`}>
                <span style={{width:'100%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>
                {index + 1}
                {'. '}
                {importarQuestoesDe[index].title}
                </span>
                {result === true
                  ? (<span style={{color:"green"}}>{' '}✓</span>)
                  : (<span style={{color:"red"}}>{' '}✕</span>)}
              </li>

            ))}

          </ul>
          <form 
            autoComplete="off"
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/`);
            }}
            >
            <Botao data-seta={'<  '} disabled={name.length === 0}>Voltar pro inicio</Botao>
            </form>
      </Widget.Content>
    </Widget>
  );
}

function QuizCorpo({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
  fundoWidget,
}) {
  const router = useRouter();

  //Aula 4
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;



  const [estadoSeta, permanecerSeta] = React.useState('Sim');
  return (
    <Widget fundoWidget={fundoWidget}>
      {question.image !== '' && <img
        alt={''}
        style={{
          position:'absolute',
          width: '100%',
          height: '100%',
          zIndex:'-1',
          objectFit: 'cover',
          marginRight:'10px',
          borderRadius:'10px',
          filter:'brightness(.5) contrast(.7)'
        }}
        src={question.image}
        className={'imgQuestao'}
      />}
      
    <Widget.Header>
      <h1 data-externo={'sim'}>
          <Link href="/">
              <a>&#x3c;</a>
          </Link>
          <b>{`Pergunta `}{questionIndex + 1}</b>
          <i>/{totalQuestions}</i>
      </h1>
    </Widget.Header>
    <Widget.Content>
      <h2 data-externo={'sim'}>
        {question.title}
      </h2>
      <p data-externo={'sim'}>"{question.description}"</p>
      <AlternativesForm
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 1 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
                data-externo={'sim'}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  //onChange antes
                  onClick={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}
          <Botao 
          fundoWidget={fundoWidget}
          type="submit" data-seta={estadoSeta} disabled={!hasAlternativeSelected}>
            Confirmar
          </Botao>

        </AlternativesForm>

    </Widget.Content>
    {isQuestionSubmited && isCorrect && <ResultadoOverlay data-result={'acertou'}  data-simbolo={'✓'} />}
    {isQuestionSubmited && !isCorrect && <ResultadoOverlay data-result={'errou'} data-simbolo={'✕'} />}
  </Widget>
  );
}





export default function telaQuiz({ importarQuestoesDe, bgExterno,tituloQuiz,...props}) {
  
  //Troca a tela
  const estadosTela = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
    loadingInvertido: 'loadingInvertido',
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

      //Inverter github e footer
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



  //Questoes e resutlado
  const [results, setResults] = React.useState([]);

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = importarQuestoesDe[questionIndex];
  const totalQuestions = importarQuestoesDe.length;

  //Somar resultados
  function addResult(result) {
    // results.push(result);
    setResults([
      ...results,
      result,
    ]);
  }

  //Passar pra próxima pergunta
  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setEstadoTela(estadosTela.loadingInvertido);
      setTimeout(() => {
          setEstadoTela(estadosTela.RESULT);
        }, 2.4 * 1000);

    }
  }

 

  return (
    <>
      {bgExterno !== 'não' && <div style={{position:'absolute',left:'0',top:'0',width:'100%',height:'100%',overflow:'hidden'}}><div id={'bgExterno'} style={{position:'absolute',left:'0',top:'0',width:'100%',height:'100%',backgroundImage:'url('+bgExterno+')',backgroundSize:'cover',backgroundPosition:'center',zIndex:'-1',filter:'brightness(.3) contrast(.8)blur(2px)'}} className={'bgExterno'}></div></div>}

      <QuizContainer>

      <QuizLogo>{tituloQuiz}</QuizLogo>

        {estadoTela === 'QUIZ' && (
        <QuizCorpo
        question={question}
        questionIndex={questionIndex}
        totalQuestions={totalQuestions}
        onSubmit={handleSubmitQuiz}
        addResult={addResult}
        {...props}
        />
        )}



        {estadoTela === 'LOADING' && <LoadWidget/>}
        {estadoTela === 'loadingInvertido' && <LoadWidget tema={'invertido'}/>}
        
        {estadoTela === 'RESULT' && <QuizResultado results={results} importarQuestoesDe={importarQuestoesDe} />}


        
      </QuizContainer>
      <Footer />


    </>
  );
}