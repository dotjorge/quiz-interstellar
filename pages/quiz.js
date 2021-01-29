import React from 'react';
import db from '../db.json';
import QuizLogo from '../src/components/QuizLogo'
import QuizContainer from '../src/components/QuizContainer'

import WidgetInvertido from '../src/components/WidgetInvertido'

import LoadWidget from '../src/components/loadWidget'

import AlternativesForm from '../src/components/AlternativesForm';
import Botao from '../src/components/Botao'

import Footer from '../src/components/Footer'
import styled from 'styled-components'
import { useRouter } from 'next/router';
import Link from 'next/link'



function QuizResultado({ results }) {
  const router = useRouter();
  const {name} = router.query;


  return (
    <WidgetInvertido>
      <WidgetInvertido.Header>
        <h1>Seu resultado</h1>
      </WidgetInvertido.Header>

      <WidgetInvertido.Content>
        <p>
          <b>{name}</b>, você acertou
            {' '}
            {/* {results.reduce((somatoriaAtual, resultAtual) => {
              const isAcerto = resultAtual === true;
              if (isAcerto) {
                return somatoriaAtual + 1;
              }
              return somatoriaAtual;
            }, 0)} */}
            {results.filter((x) => x).length}
            {' '}
            perguntas
          </p>

          <ul>
            {results.map((result, index) => (
              <li key={`result__${result}`}>
                #
                {index + 1}
                {': '}
                {result === true
                  ? (<span style={{color:"green"}}> ✓ Acertou</span>)
                  : (<span style={{color:"red"}}> ✕ Errou</span>)}
              </li>
            ))}
          </ul>
      </WidgetInvertido.Content>
    </WidgetInvertido>
  );
}

function QuizCorpo({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const router = useRouter();

  //Aula 4
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <WidgetInvertido>
    <WidgetInvertido.Header>
      <h1>
          <Link href="/">
              <a style={Voltar}>&#x3c;</a>
          </Link>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
      </h1>
    </WidgetInvertido.Header>
    <WidgetInvertido.Content>
      <h2>
        {question.title}
      </h2>
      <p>{question.description}</p>

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
              <WidgetInvertido.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
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
              </WidgetInvertido.Topic>
            );
          })}

          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}
          <Botao type="submit" disabled={!hasAlternativeSelected} style={{filter:"invert(1)"}}>
            Confirmar
          </Botao>
          {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}
        </AlternativesForm>
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
  opacity:".6",
};



export default function telaQuiz() {
  
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
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

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
      <QuizContainer>
        <QuizLogo />

        {estadoTela === 'QUIZ' && (
        <QuizCorpo
        question={question}
        questionIndex={questionIndex}
        totalQuestions={totalQuestions}
        onSubmit={handleSubmitQuiz}
        addResult={addResult}
        />
        )}



        {estadoTela === 'LOADING' && <LoadWidget classes={'inverter'}/>}
        {estadoTela === 'loadingInvertido' && <LoadWidget tema={'invertido'}/>}
        
        {estadoTela === 'RESULT' && <QuizResultado results={results} />}


        <Footer />
      </QuizContainer>




    </>
  );
}