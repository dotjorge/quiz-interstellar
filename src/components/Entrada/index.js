import styled from 'styled-components';

const Entrada = styled.div`
  position:relative;
  width:100%;
  height:40px;
  display:flex;
  align-items:center;
  color:gray;
  transition:.2s ease;
  font-style:italic;
  letter-spacing:.03em;

  &:before {
    content:'';
    padding-left:10px;
    animation-name: digite;
    animation-duration: 1s;
    animation-fill-mode:forwards; 
    animation-direction:normal;//reverse
    animation-iteration-count:1;
    animation-timing-function: linear;
    animation-delay:1s;
    font-size:14px;
  }

  @keyframes digite {
    0% {content:'';}
    1% {content:'D';}
    5% {content:'Di';}
    10% {content:'Dig';}
    15% {content:'Digi';}
    20% {content:'Digit';}
    25% {content:'Digite';}
    30% {content:'Digite ';}
    35% {content:'Digite s';}
    40% {content:'Digite se';}
    45% {content:'Digite seu';}
    50% {content:'Digite seu ';}
    55% {content:'Digite seu n';}
    60% {content:'Digite seu no';}
    65% {content:'Digite seu nom';}
    70% {content:'Digite seu nome';}
    75% {content:'Digite seu nome.';}
    70% {content:'Digite seu nome..';}
    70% {content:'Digite seu nome...';}
    100% {content:'Digite seu nome...';}
  }

  &:hover{
    color:${({ theme }) => theme.colors.secondary};
    padding-left:10px;
  }


`;

Entrada.Input = styled.input`
  position:absolute;
  left:0;
  top:0;
  background:rgba(20,20,20,.1);
  border:none;
  outline:none;
  padding:10px;
  width:100%;
  height:40px;
  border-radius:${({ theme }) => theme.Raio2};
  color:${({ theme }) => theme.colors.secondary};
  font-weight:bold;
  transition:.3s ease;
  &:hover,&:focus{
    box-shadow:-5px 5px 10px rgba(20,20,20,.1);
  }

`;

export default Entrada;