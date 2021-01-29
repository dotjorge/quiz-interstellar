import styled from 'styled-components'

const WidgetInvertido = styled.div`
  transition:2s ease;
  margin-top: 24px;
  margin-bottom: 24px;
  //border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => {
    return theme.colors.mainBgInverso;
  }};
  backdrop-filter:blur(${({ theme }) => theme.Blur});
  border-radius: ${({ theme }) => theme.Raio};
  overflow: hidden;
  //box-shadow:-5px 5px 10px rgba(182, 201, 205,.5);

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;

    display: flex;
    align-items: center;
  }
  h1{
    color:rgba(0,0,0,.9);
  }
  h2{
    color:${({ theme }) => theme.colors.primaryInverso};
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color:rgb(235,235,235);
  }


  b{
    color:${({ theme }) => theme.colors.primaryInverso};
  }
`;

WidgetInvertido.Header = styled.header`
  display: inline-block;
  //justify-content: flex-start;
  //align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primaryInverso};
  margin:10px;
  margin-bottom:-10px;

  border-radius: ${({ theme }) => theme.Raio};

  
  * {
    margin: 0;
  }
`;

WidgetInvertido.Content = styled.div`

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


WidgetInvertido.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color:rgb(235,235,235);
  background-color: ${({ theme }) => `${theme.colors.primaryInverso}40`};
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
    padding-left:25px;
    background-color: ${({ theme }) => `${theme.colors.primaryInverso}`};
    color:rgb(20,20,20);
  }

  &:before {
    content:'<';
    position:absolute;
    color:${({ theme }) => `${theme.colors.secondaryInverso}`};
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
`;


export default WidgetInvertido;