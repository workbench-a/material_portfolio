import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './Theme';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <BrowserRouter>
          <Header position="fixed" color="primary"/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/projects' component={Projects}/>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
