import styled from 'styled-components';


const BarraLoadingDiv = styled.div`
    position:relative;
    width:100%;
    height:40px;
    border-radius:15px;

    background-color:rgba(215,215,215,.1);
    &[data-loadcor="invertido"] {
    background-color:rgba(40,40,40,.3);
    }


    animation-name: sumir;
    animation-duration: 2s;
    animation-fill-mode:forwards; 
    animation-iteration-count:1;
    animation-timing-function: cubic-bezier(0.24, 0.15, 1, 0.24);
    animation-delay:.4s;



    &[data-resultado="sim"] {
    animation-name:none;
    //background-color:red;
    }

    @keyframes sumir {
        0%{}
        70%{opacity:1;}
        100%{opacity:0;}
    }

    display:flex;
    align-items:center;
    justify-content:center;



`;

const BarraLoadingDivGlow = styled.div`

    position:absolute;
    left:0;
    top:0;
    transform:translateX(-100%);
    width:100%;
    height:100%;
    background-color:${({ theme }) => theme.colors.primary};

    &[data-loadcor="invertido"] {
    background-color: ${({ theme }) => theme.colors.primaryInverso};
    }

    border-radius:15px;
    animation-name: load;
    animation-duration: 2s;
    animation-fill-mode:forwards; 
    animation-iteration-count:1;
    animation-timing-function: cubic-bezier(0.24, 0.15, 1, 0.24);
    animation-delay:.4s;



    &[data-resultado="sim"] {
    animation-name:none;
    transform:${props => props.porcentagem};
    }

    @keyframes load {
        0%{transform:translateX(-100%);}
        70%{transform:translateX(0%);}
        100%{transform:translateX(0%);}
    }

    //display:${props => props.testeProp};

    //Props com valor default????
    //display:${props => props.inputColor || "palevioletred"};

`;

const TextoPorcentagem = styled.div`
    display:none;
    &[data-resultado="sim"] {
    display:block;
    }
    margin-left:10px;
    font-weight:bold;
    font-size:30px;
    margin-top:-4px;

    color:${({ theme }) => theme.colors.primary};
    &[data-loadcor="invertido"] {
    color: ${({ theme }) => theme.colors.primaryInverso};
    }


`;

export default function BarraLoading({dataTema,resultado,porcento,...props}){
    return(
    <>
    <BarraLoadingDiv data-resultado={resultado} data-loadcor={dataTema} style={{background:'none'}}>
        <BarraLoadingDiv data-resultado={resultado} data-loadcor={dataTema} style={{overflow:'hidden'}}>
            <BarraLoadingDivGlow data-resultado={resultado} porcentagem={'translateX(calc('+porcento+'% - 100% - 1px))'} data-loadcor={dataTema} style={{position:"absolute"}} />
        </BarraLoadingDiv>
        <TextoPorcentagem data-resultado={resultado} data-loadcor={dataTema}>{porcento}%</TextoPorcentagem>
    </BarraLoadingDiv>
    </>
    );
};