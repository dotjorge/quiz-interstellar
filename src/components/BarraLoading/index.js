import styled from 'styled-components';


const BarraLoadingDiv = styled.div`
    position:relative;
    width:100%;
    height:40px;
    border-radius:15px;
    
`;

const BarraLoadingDivGlow = styled.div`
    position:relative;
    width:100%;
    height:100%;
    border-radius:15px;
    overflow:hidden;

    &:after{
        content:'';
        position:absolute;
        left:0;
        top:0;
        transform:translateX(-100%);
        width:100%;
        height:100%;
        background:linear-gradient(${({ theme }) => theme.colors.primary},${({ theme }) => theme.colors.primary})no-repeat;
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
        70%{transform:translateX(0%);opacity:1;}
        100%{transform:translateX(0%);opacity:0;}
    }

`;

export default function BarraLoading(){
    return(
    <>
    <BarraLoadingDiv><BarraLoadingDivGlow style={{position:"absolute",top:"3px",left:"-3px",filter:"blur(5px)",opacity:".4"}} /><BarraLoadingDivGlow style={{position:"absolute"}} /></BarraLoadingDiv>
    </>
    );
};