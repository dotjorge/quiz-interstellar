import styled from 'styled-components'


const Fundo = styled.div`
    z-index:10;
    transition:2s ease filter;
    width:100%;
    position:relative;
    background:rgba(205, 220, 221, .4);
    backdrop-filter:blur(5px);
    display:flex;
    justify-content:center;
    align-items:center;
    height:40px;
    padding:0 10px;
    color:black;

    &:before{
        content:'';
        position:absolute;
        width:100%;
        height:100%;

        z-index:-1;
    }

    //pega a primeira div
    & > div:first-child{
        width:100%;
        max-width:1024px;
        display:flex;

        opacity:.7;
        
        & > span{
            margin:0 10px;
            opacity:.5;
        }

        @media only screen and (max-width: 800px) {
            //Project no canto direito
            & {
            display:flex;
            //justify-content:space-between;
            }
            
            //Project no canto direito
            a:nth-child(3){
                //flex:1;
            }

            a
            
            //Separador
            & > span{
            //display:none;
            }
        }
    }


    a:nth-child(3){
        margin-right:10px;
    }

`

const Logo = styled.div`
    font-weight:900;
    margin-left:5px;
    transition: .2s ease transform;


    &:before{
        content:'.';
    }

    &:hover{
        transform:scale(1.1);

    }

`

const Botao = styled.button`
    font-family:monospace;
    color:black;
    background:rgba(0,0,0,0);
    border:1px solid black;
    border:none;
    outline:none;
    border-radius:5px;
    padding:2px 0px;
    cursor:pointer;

    display:inline-flex;
    align-items:center;

    img{
        position:relative;
        margin-top:1px;
        margin-right:4px;
        image-rendering: -webkit-optimize-contrast;


    }
            

    span:first-child{
        opacity:.5;
    }

    &:before{
        content:'>';
        font-weight:bold;
        margin-right:-6px;
        opacity:0;
        transition:.2s ease all;
    }


    &[data-tipo="github"] {
        &:after{
            content:'_';
            font-weight:bold;
            margin-right:4px;
            animation:piscar 1s ease forwards infinite;


            @keyframes piscar{
                0%{opacity:0;}
                30%{opacity:0;}
                50%{opacity:1;}
                70%{opacity:0;}
                100%{opacity:0;}
            }
        }
    }

    &:active{
        background:rgba(255,255,255,.1);
    }

    &:hover:before{
        margin-right:4px;
        opacity:1;
    }

    b{
        margin-left:8px;
    }
    
`

export default function Dotjorge({...props}){
    return(
        <>
            <Fundo {...props}>
                <div>
                    <a href="https://github.com/dotjorge" target="_blank">
                        <Logo>jorge</Logo>
                    </a>
                    <span> | </span>
                    <a href="https://discord.gg/wuQEusnJz2" target="_blank">
                        <Botao>
                            <img src="icons/discord.png" width="auto" height="12px"/>
                            <b>Discord</b>
                        </Botao>
                    </a>
                    <a href="https://github.com/dotjorge/quiz-interstellar" target="_blank">
                        <Botao data-tipo="github">
                           <img src="icons/github.png" width="auto" height="12px"/>
                            Project on <b>GitHub</b>
                        </Botao>
                    </a>
                </div>
            </Fundo>
        </>
    );
  };
