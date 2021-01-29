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
    color:black;
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

export default WidgetInvertido;