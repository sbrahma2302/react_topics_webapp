import React, { useState } from 'react';
import { TopicsList } from './TopicsList';
import { light, dark } from "../theme/themes"
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from '../theme/GlobalStyles';

const App = () => {
  const [ theme, setTheme ] = useState('light');

  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return <>

    <div className = "container">
      <div className = "row">
        <div className = "col-md-12 text-right">
          <button className = "btn btn-default" onClick = { switchTheme }> Switch Theme to  { theme === 'light' ? 'dark' : 'light' } </button>
        </div>
        <div className = "col-md-12">
          <ThemeProvider theme = { theme === 'light' ? light : dark } >
            <GlobalStyles />

            <TopicsList />

          </ThemeProvider>
        </div>
      </div>
    </div>

  </>

}

export default App;
