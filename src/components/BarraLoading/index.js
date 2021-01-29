import styled from 'styled-components';


const BarraLoadingDiv = styled.div`
    position:relative;
    width:100%;
    height:40px;
    border-radius:15px;

    background-color:rgba(255,255,255,.1);
    &[data-loadcor="invertido"] {
    background-color:rgba(0,0,0,.1);
    }
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
    }

    @keyframes load {
        0%{transform:translateX(-100%);}
        70%{transform:translateX(0%);}
        100%{transform:translateX(0%);}
    }

`;

export default function BarraLoading({dataTema}){
    return(
    <>
    <BarraLoadingDiv data-loadcor={dataTema}>
        <BarraLoadingDiv style={{overflow:'hidden'}}>
            <BarraLoadingDivGlow data-loadcor={dataTema} style={{position:"absolute"}} />
        </BarraLoadingDiv>
    </BarraLoadingDiv>
    </>
    );
};