import styled from 'styled-components';

export const Botao=styled.button`
  display:block;
  position:relative;
  background:red;
  width:100%;
  height:40px;
  border:none;
  outline:none;
  border-radius:${({ theme }) => theme.Raio2};
  letter-spacing:1px;
  cursor:pointer;
  font-weight:bold;
  color:white;
  margin-top:10px;


  &:after {
    content:'';
    position:absolute;
    left:0;top:0;
    width:100%;
    height:100%;
    box-shadow:-5px 5px 10px ${({ theme }) => theme.colors.secondary};
    opacity:.1;
    border-radius:${({ theme }) => theme.Raio};
    background:white;
    transition:.5s ease;
    
  }

  &:before {
    content:'>';
    opacity:0;
    margin-right:-10px;

    transition:.2s ease;
  }

  &:hover:before{
    opacity:.5;
    margin-right:5px;
  }

  &:hover:after{
    opacity:.2;
  }


  &:disabled{
    opacity:.8;
    pointer-events:none;
  }


`;

export default Botao;