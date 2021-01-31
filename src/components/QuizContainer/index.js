import styled from 'styled-components'
const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin-right:150px;
  
  animation-name:none;
  animation-duration: 1.5s;
  animation-fill-mode:forwards;
  animation-timing-function: cubic-bezier(0, 0, 0, 1);
  @keyframes moverEsquerda {
    from {margin-right:0}
    to {margin-right:150px}
  }

  //Mobile
  @media screen and (max-width: 500px) {
    padding: 15px;
    margin-right:0;
  }

`;

export default QuizContainer;