import styled from 'styled-components'

const WidgetFundo = styled.div`


  transition:2s ease;
  margin-top: 24px;
  margin-bottom: 24px;

  background-color: ${({ theme }) => theme.colors.mainBg}bd;


  background:${props => props.fundoWidget};

  backdrop-filter:blur(${({ theme }) => theme.Blur});
  border-radius: ${({ theme }) => theme.Raio};
  overflow: hidden;
  //box-shadow:-5px 5px 10px rgba(182, 201, 205,.5);

  h1, h2, h3,h4 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    display: flex;
    align-items: center;
  }
  h1{
    color:${({ theme }) => theme.colors.secondary};
    font-size:26px;

    //&[data-externo="sim"]{
    //  color:rgba(255,255,255,.9);
    //}
    	
    opacity:.9;
    font-weight:900;

    i{
      color:${({ theme }) => theme.colors.secondary};
      opacity:.8;
    }
    b{
      color:white;
    }
    a{
    color:${({ theme }) => theme.colors.secondary};
    margin-left:-10px;
    padding:0 10px;
    font-weight:bolder;
    text-decoration:none;
    opacity:.6;
    position:relative;

    &:after{
      opacity:.5;
      transition:.2s ease;
      content:'<';
      position:absolute;
      left:10px;
    }
    &:hover:after{
      left:0px;
    }
    }

    h3{
      color:${({ theme }) => theme.colors.secondary};
      margin-right:10px;
    }

  }

  h2{
    color:${({ theme }) => theme.colors.primary};
    &[data-widgetbg="invertido"] {
      opacity:.2;
    }
    &[data-externo="sim"]{
    //filter:saturate(2);
    }
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color:rgba(20,20,20,.7);
    &[data-externo="sim"]{
    color:rgba(255,255,255,.8);
    }
  }

  b{
    color:${({ theme }) => theme.colors.primary};
  }

`;

Widget.Header = styled.header`

  display: inline-block;
  //justify-content: flex-start;
  //align-items: center;
  padding: 18px 32px;
  //background-color: ${({ theme }) => theme.colors.primary};
  &[data-h1bg="invertido"] {
    background-color: ${({ theme }) => theme.colors.primaryInverso};
  }

  &[data-externo="sim"]{
    background-color: ${({ theme }) => theme.colors.primary}78;
  }


  background:${props => props.fundoHeader};

  margin:10px;
  margin-bottom:-10px;

  border-radius: ${({ theme }) => theme.Raio};

  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }

`;


Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color:rgb(235,235,235,.9);
  background-color: ${({ theme }) => `${theme.colors.primary}4a`};

  &[data-quiz="externo"]{
  background-color: ${({ theme }) => `${theme.colors.primary}d4`};
  }
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.Raio};

  transition: .2s;
  display: flex;
  align-items:center;
  position:relative;



  &:hover,
  &:focus {

    background-color: ${({ theme }) => `${theme.colors.primary}`};
    padding-left:25px;

    box-shadow:-5px 5px 15px ${({ theme }) => `${theme.colors.primary}69`};


    //color:rgb(20,20,20);
  }

  &:before {
    content:'<';
    position:absolute;
    color:${({ theme }) => `${theme.colors.secondary}`};
    right:0;
    opacity:0;
    transition:.2s ease;
  }

  &:hover:before {
    content:'<';
    position:absolute;
    right:10px;
    opacity:1;
  }

  
  &[data-disabled="true"] {
    opacity:.6;
    pointer-events:none;
  }

  
`;

Widget.Loading = styled.div`
    position:relative;
    width:35px;
    margin-left:-10px;
    display:flex;
    align-items:center;
    justify-content:center;

    color:${({ theme }) => theme.colors.secondary};
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




export default function Widget({children,...props}){
  return(
  <>
  <WidgetFundo {...props}>
{children}
</WidgetFundo>
  </>
  );
};