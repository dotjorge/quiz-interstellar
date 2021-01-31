import React from 'react';
import db from '../db.json';
import QuizLogo from '../src/components/QuizLogo'
import QuizContainer from '../src/components/QuizContainer'

import WidgetInvertido from '../src/components/WidgetInvertido'

import LoadWidget from '../src/components/loadWidget'

import AlternativesForm from '../src/components/AlternativesForm';
import Botao from '../src/components/Botao'

import Footer from '../src/components/Footer'
import styled, { ThemeConsumer } from 'styled-components'
import { useRouter } from 'next/router';
import Link from 'next/link'


import BarraLoading from '../src/components/BarraLoading'

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
            (<><b>{name}</b>, você acertou uma pergunta</>)
            : 
            ''
            }

            {
            results.filter((x) => x).length  > 1 && results.filter((x) => x).length  != db.questions.length
            ?
            (<><b>{name}</b>, você acertou {results.filter((x) => x).length} perguntas</>)
            : 
            ''
            }

            {
            results.filter((x) => x).length === db.questions.length
            ?
            (<><b>{name}</b>, você acertou todas as {results.filter((x) => x).length} perguntas!</>)
            : 
            ''
            }
            
          </p>
          <BarraLoading  resultado={'sim'} porcento={(Math.round(results.filter((x) => x).length / results.length * 100))} dataTema={'invertido'} />
          <ul>
            {results.map((result, index) => (
              <li style={{width:'100%',display:'flex',color:'rgba(255,255,255,.7)'}} key={`result__${result}`}>
                <span style={{width:'100%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>
                {index + 1}
                {'. '}
                {db.questions[index].title}
                </span>
                {result === true
                  ? (<span style={{color:"green"}}>{' '}✓</span>)
                  : (<span style={{color:"red"}}>{' '}✕</span>)}
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



  const [estadoSeta, permanecerSeta] = React.useState('Sim');
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
          corFundo={db.theme.colors.primaryInverso}
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
          <Botao 
          type="submit" data-seta={estadoSeta} disabled={!hasAlternativeSelected} style={{filter:"invert(1)"}}>
            Confirmar
          </Botao>

        </AlternativesForm>

    </WidgetInvertido.Content>
    {isQuestionSubmited && isCorrect && <ResultadoOverlay data-result={'acertou'}  data-simbolo={'✓'} />}
    {isQuestionSubmited && !isCorrect && <ResultadoOverlay data-result={'errou'} data-simbolo={'✕'} />}
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