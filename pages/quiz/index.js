import React from 'react';
import QuizScreen from '../../src/telas/Quiz';
import db from '../../db.json';
import { ThemeProvider } from 'styled-components';

export default function Quiz({ }) {
    // const [db, setDb] React.useState({})
    // React.useEffect(() => {
    // });
    return (
      <ThemeProvider theme={db.invertedTheme}>
        <QuizScreen
          importarQuestoesDe={db.questions}
          bgExterno={'não'}
          fundoWidget={'rgba(39,39,39,.2)'}
        />
      </ThemeProvider>
      // {/* <pre style={{ color: 'black' }}>
      //   {JSON.stringify(dbExterno.questions, null, 4)}
      // </pre> */}
    );
  }
