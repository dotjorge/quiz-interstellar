import styled from 'styled-components'

// src/components/Footer/index.js
const FooterWrapper = styled.footer`

  padding: 20px;
  display: flex;
  align-items: center;
  color: black;

  //Enquanto a troca de cor é via filtro
  transition:filter .5s ease;

  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 0;
  background: linear-gradient(to top,rgba(206,221,222,.5),transparent);
  display: flex;
  justify-content: center;
  backdrop-filter: none;
  opacity: .6;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: black;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper className={'inverter'} {...props}>
      <a href="https://www.alura.com.br/">
        <img style={{filter:"invert(1)"}} src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}