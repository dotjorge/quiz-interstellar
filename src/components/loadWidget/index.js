import styled from 'styled-components';
import Widget from '../Widget'
import BarraLoading from '../BarraLoading'


const Rodando = styled.div`

    position:relative;
    width:30px;
    margin-left:-10px;
    display:flex;
    align-items:center;
    justify-content:center;

   &:after{
       content:'.';
       position:absolute;
    animation-name: rodar;
    animation-duration: 1s;
    animation-fill-mode:forwards; 
    animation-iteration-count:infinite;
    animation-timing-function: linear;
    transform-origin:center;
    @keyframes rodar {
        0%{transform:rotate(0deg)}
        100%{transform:rotate(360deg);}
    }
   }


`;

export default function loadWidget({classes,tema,style}){
    return(
    <>
        <Widget data-widgetbg={tema} style={style} className={classes}>
            <Widget.Header data-h1bg={tema}>
                <h1 data-h1={tema}>
                    <Rodando />Carregando...
                </h1>
            </Widget.Header>
            <Widget.Content>
                <BarraLoading dataTema={tema} />
            </Widget.Content>
        </Widget>
    </>
    );
};