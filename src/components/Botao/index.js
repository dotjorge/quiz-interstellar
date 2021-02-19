import styled from 'styled-components';

export const Botao=styled.button`
  display:block;
  position:relative;
  background:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),linear-gradient(${({ theme }) => theme.colors.secondary},${({ theme }) => theme.colors.secondary});

  //background:linear-gradient(rgba(20,20,20,.2),rgba(20,20,20,.2)),linear-gradient(to left,${({ theme }) => theme.colors.secondary}87,${({ theme }) => theme.colors.secondary} 70%),url(1.png)no-repeat right/80%;

  //Escurecer nos quizes dos outros

  width:100%;
  height:40px;
  border:none;
  outline:none;
  border-radius:${({ theme }) => theme.Raio2};
  letter-spacing:1px;
  cursor:pointer;
  font-weight:900;


  color:rgba(255,255,255,.9);
  //color:${props => props.fundoWidget ? 'rgba(0,0,0,.9)' : ''};
  

  margin-top:10px;
  transition:.3s ease;

  &:after {
    content:'';
    position:absolute;
    left:0;top:0;
    width:100%;
    height:100%;
    //box-shadow:-5px 5px 10px ${({ theme }) => theme.colors.secondary};
    opacity:.1;
    border-radius:10px;
    //background:white;
    transition:.3s ease;
    
  }
  &:hover:after{
    opacity:.3;
    box-shadow:-5px 5px 15px ${({ theme }) => theme.colors.secondary};
  }

  &:before {
    content:attr(data-seta);
    opacity:0;
    margin-right:-28px;

    transition:.3s all ease;
  }

  &:hover:before{
    
    opacity:.5;
    margin-right:5px;
  }




  &:disabled{
    opacity:.7;
    pointer-events:none;
  }


`;

export default Botao;