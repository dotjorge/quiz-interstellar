  
import styled from 'styled-components';

const AlternativesFormDiv = styled.form`
  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.primary};
      background-color:${props => props.corFundo_};
      color:white;
      padding-left:25px;
      padding-left:35px;

      box-shadow:-5px 5px 15px ${({ theme }) => `${theme.colors.primary}69`};
      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
        box-shadow:-5px 5px 30px ${({ theme }) => `${theme.colors.success}69`};
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
        box-shadow:-5px 5px 30px ${({ theme }) => `${theme.colors.wrong}69`};
      }
    }
    &:focus {
      opacity: 1;
    } 

  }
  button {
    margin-top: 15px;
  }
`;

//export default AlternativesForm;
export default function AlternativesForm({children,corFundo,...props}){
  return(
  <>
  <AlternativesFormDiv corFundo_={corFundo} {...props}>{children}</AlternativesFormDiv>
  </>
  );
};