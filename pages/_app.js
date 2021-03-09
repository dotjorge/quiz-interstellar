
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json';
import Centralizar from '../src/components/Centralizar'
import Head from 'next/head'
import GitHubCorner from '../src/components/GitHubCorner'


import React, { useState } from "react";
import { useRouter } from 'next/router';

import Dotjorge from '../src/components/Dotjorge';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
    background-color:rgba(206, 221, 222,1);
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  a{
    text-decoration:none;
    color:inherit;
  }

  .bgExterno{
    animation-name:bgExterno;
    animation-duration: 4s;
    animation-fill-mode: forwards;
    animation-timing-function:cubic-bezier(0, 0, 0, 1);
    opacity:0;
    transform:scale(1.5);
  }
  @keyframes bgExterno {
    0% {opacity:0;transform:scale(1.5);}
    100% {opacity:1;transform:scale(1);}
  }
  .imgQuestao{
    animation-name:imgQuestao;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    opacity:0;
    transform:scale(1.5);
  }
  @keyframes imgQuestao {
    0% {opacity:0;transform:scale(1.5);}
    100% {opacity:.3;transform:scale(1);}
  }
  .invertido {
    filter:invert(1);
  }

  .space{
    filter: brightness(.6);
    position:absolute;
    width:100%;
    height:100%;
    overflow:hidden;
    z-index:-1;
    opacity:0;
    background-image:url(/spacehdr.png);
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
    


  }
  .spaceImg{
    
    position:absolute;
    width:100%;
    height:100%;
    transition:4s cubic-bezier(0, 0, 0, 1);
    background-image:url(/spacehdrFx.png);
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
    

    animation-name:none;
    animation-delay:3s;
    animation-duration: 5s;
    animation-iteration-count:infinite;
    animation-timing-function: linear;
    transform:scale(1.5);

  }
  @keyframes pulsar {
    0% {opacity:1;}
    50%{opacity:0;}
    100% {opacity:1;}
  }
  .neveScroll{
    position:fixed;
    width:100%;
    height:100%;
    overflow:hidden;
    z-index:-1;
    transition:3s ease;
  }

  .neveScroll:after{
    content:'';
    position:absolute;
    width:calc(3164px * 3);
    height:100%;
    background-image:url(/fundoNeve.png);
    background-size:auto 100%;
    background-repeat:repeat-x;
    animation-name: scroll,fadein;
    animation-duration: 200s,2s;
    animation-iteration-count:infinite,1;
    animation-timing-function: linear;
    animation-fill-mode: forwards; 
    opacity:0;
    animation-delay:0s, 0s;

  }


  @keyframes scroll {
    from {transform:translateX(0%)}
    to {transform:translateX(-54%)}
  }
  @keyframes fadein {
    from {opacity:0;}
    to {opacity:1;}
  }

  .cooper{

    pointer-events:none;
    position:fixed;
    width:100%;
    height:100%;
    z-index:-1;
    z-index:15;

    background-image:url(/Cooper.png);

    background-size:auto 100%;
    background-position:calc(50% - 150px) center;
    background-repeat:no-repeat;
    transform:scaleX(-1);

    animation-name: cooper;
    animation-delay:1s;
    animation-duration: 1.5s;
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
    animation-fill-mode:forwards;

    opacity:0
  }

  .cooper:after{
    content:'';
    width:100%;
    height:100%;
    position:absolute;

    background:rgba(206, 221, 222,.5);
    
    display:none;
  }

  @keyframes cooper {
    0% {opacity:0;background-position:calc(50% - 50px) center;}
    100% {opacity:1;background-position:calc(50% - 150px) center;}
  }

  .warp{
    position:absolute;
    width:100%;
    height:100%;
    z-index:-1;

    background-image:url(/warp.jpg);

    background-size:100% 100%;
    background-position:center;
    background-repeat:no-repeat;
    
    opacity:0;


    animation-duration: 2s;
    animation-fill-mode:forwards;
    animation-timing-function: ease-in;


    transition:5s ease;
  }

  @keyframes warp {
    from {opacity:.3;background-size:100% 100%}
    to {opacity:.3;background-size:150% 150%;opacity:0;}
  }

`

const theme = db.theme;


export default function App({ Component, pageProps }) {
  const router = useRouter();
  const {name} = router.query;

  //const [theme, setTheme] = useState(db.theme);

  return (
    <>
    <Head>
      <title>{db.title} - AluraQuiz</title>
      <meta property="og:title" content={db.title} key="title"></meta>
      <meta property="og:image" content={db.bg} />
      <link rel="shortcut icon" href={db.fav} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
    </Head>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Centralizar>
      <Dotjorge className={'inverter'}/>
        <div className={'space'}>
          <div className={'spaceImg'}></div>
        </div>
        <div className={'warp'}></div>
        <div className={'neveScroll'}></div>
        <div className={'cooper'}></div>
        <Component {...pageProps} />
        <GitHubCorner projectUrl="https://github.com/dotjorge" />
      </Centralizar>
    </ThemeProvider>

    <style jsx global>{`
      `}</style>
    </>
  )
}
